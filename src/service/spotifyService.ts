import {
  SpotifyAlbumResponse,
  SpotifyAlbumResponseTracks,
  SpotifyAlbumResponseTracksParams,
  SpotifyTokenObject,
} from '@/types/spotify';

/* import dotenv from 'dotenv';

dotenv.config(); */

class SpotifyService {
  static async getAccessToken(): Promise<string> {
    const clientId = process.env.SPOTIFY_API_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_API_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      throw new Error('Environment variables for Spotify API client ID and secret must be defined');
    }
    const encodedCredentials = btoa(`${clientId}:${clientSecret}`);
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + encodedCredentials,
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      throw new Error(
        `Unable to Fetch Data, Please check URL
        or Network connectivity!!`
      );
    }
    const data = (await response.json()) as SpotifyTokenObject;
    return data.access_token;
  }

  private static getSpotifyAlbumId(url: string): string | null {
    const regex = /album\/([a-zA-Z0-9]+)(\?|$)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  static async getAlbumInfo(url: string): Promise<SpotifyAlbumResponse> {
    const id = SpotifyService.getSpotifyAlbumId(url);

    const token = await this.getAccessToken();

    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) {
      throw new Error(`Unable to Fetch Data`);
    }

    const data = (await response.json()) as SpotifyAlbumResponse;

    await this.populateAlbumTracksIfNeeded(data);

    return data;
  }

  static async populateAlbumTracksIfNeeded(album: SpotifyAlbumResponse) {
    let offset = album.tracks.limit;
    const limit = 50;
    const totalItems = album.tracks.total;
    const tracksItems = album.tracks.items;

    if (tracksItems.length >= totalItems) {
      // Limit of base album request is greater or equal than total items, so no further requests are needed
      return;
    }

    while (tracksItems.length < totalItems) {
      const newTracks = await this.getAlbumTracks(album.id, {
        offset: offset,
        limit: limit,
      });
      offset = offset + limit;
      tracksItems.push(...newTracks.items);
    }
  }

  static async getAlbumTracks(
    albumId: string,
    params?: Partial<SpotifyAlbumResponseTracksParams>
  ): Promise<SpotifyAlbumResponseTracks> {
    const url = new URL(`https://api.spotify.com/v1/albums/${albumId}/tracks`);

    // Create a URLSearchParams object
    const searchParams = new URLSearchParams();

    // Add parameters to the URLSearchParams object if they are defined
    if (params?.offset) {
      searchParams.append('offset', params.offset.toString());
    }
    if (params?.limit) {
      searchParams.append('limit', params.limit.toString());
    }

    url.search = searchParams.toString();

    const token = await this.getAccessToken();

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Unable to Fetch Data, Please check URL
        or Network connectivity!!`
      );
    }

    return (await response.json()) as SpotifyAlbumResponseTracks;
  }
}

export default SpotifyService;
