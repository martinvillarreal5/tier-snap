import {
  SpotifyAlbumResponse,
  SpotifyAlbumResponseTracks,
  SpotifyAlbumResponseTracksParams,
  SpotifyTokenObject,
} from '@/types/spotify';
import dotenv from 'dotenv';

dotenv.config();

const getAccessToken = async (): Promise<string> => {
  const clientId = process.env.SPOTIFY_API_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_API_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error('Environment variables for Spotify API client ID and secret must be defined');
  }
  const encodedCredentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + encodedCredentials,
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Unable to Fetch Data, Please check URL
      or Network connectivity!!`
    );
  }
  const data = (await response.json()) as SpotifyTokenObject;
  return data.access_token;
};

const getAlbumInfo = async (albumId: string): Promise<SpotifyAlbumResponse> => {
  const token = await getAccessToken();

  const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to Fetch Data`);
  }

  const data = (await response.json()) as SpotifyAlbumResponse;

  await populateAlbumTracksIfNeeded(data);

  return data;
};

const populateAlbumTracksIfNeeded = async (album: SpotifyAlbumResponse) => {
  let offset = album.tracks.limit;
  const limit = 50;
  const totalItems = album.tracks.total;
  const tracksItems = album.tracks.items;

  if (tracksItems.length >= totalItems) {
    //Limit of base album request is greater or equal than total items, so no further requests are needed
    return;
  }

  while (tracksItems.length < totalItems) {
    const newTracks = await getAlbumTracks(album.id, {
      offset: offset,
      limit: limit,
    });
    offset = offset + limit;
    tracksItems.push(...newTracks.items);
  }
};

const getAlbumTracks = async (
  albumId: string,
  params?: Partial<SpotifyAlbumResponseTracksParams>
): Promise<SpotifyAlbumResponseTracks> => {
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

  const token = await getAccessToken();

  const response = await fetch(url, {
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
};
