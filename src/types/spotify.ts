export interface SpotifyTokenObject {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface SpotifyObjectExternalIds {
  /**The Spotify URL for the object. */
  spotify: string;
}

interface SpotifyObject {
  /**A link to the Web API endpoint providing full details of the object. */
  href: string;
  /**The Spotify ID for the object. */
  id: string;
  /**The name of the object. */
  name: string;
  /**External URLs for this object. */
  external_urls: SpotifyObjectExternalIds;
}

export interface GetAlbumResponseImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyAlbumResponseTracks {
  /**A link to the Web API endpoint returning the full result of the request */
  href: string; //'https://api.spotify.com/v1/me/shows?offset=0&limit=20';
  /**The maximum number of items in the response (as set in the query or by default). */
  limit: number;
  /**URL to the next page of items. ( null if none) */
  next: string | null; //'https://api.spotify.com/v1/me/shows?offset=1&limit=1';
  /**The offset of the items returned (as set in the query or by default) */
  offset: number;
  /**URL to the previous page of items. ( null if none) */
  previous: string | null; //'https://api.spotify.com/v1/me/shows?offset=1&limit=1';
  /**The total number of items available to return. */
  total: number;
  items: SpotifyAlbumTrack[];
}

export interface SpotifyAlbumArtist extends SpotifyObject {}

export interface SpotifyAlbumTrack extends SpotifyObject {
  artists: SpotifyAlbumArtist[];
  /**The disc number (usually 1 unless the album consists of more than one disc). */
  disc_number: 0;
  /**The track length in milliseconds. */
  duration_ms: 0;
  /**Whether or not the track has explicit lyrics ( true = yes it does; false = no it does not OR unknown). */
  explicit: false;
  /**A URL to a 30 second preview (MP3 format) of the track. */
  preview_url: string;
  /**The number of the track. If an album has several discs, the track number is the number on the specified disc. */
  track_number: number;
  /**Whether or not the track is from a local file. */
  is_local: boolean;
}

export interface SpotifyAlbumResponse extends SpotifyObject {
  tracks: SpotifyAlbumResponseTracks;
  artists: SpotifyAlbumArtist[];
  /** The number of tracks in the album.*/
  total_tracks: number;
  /**The cover art for the album in various sizes, widest first. */
  images: GetAlbumResponseImage[];
  /**The date the album was first released. */
  release_date: string;
  /**A list of the genres the album is associated with. If not yet classified, the array is empty. */
  genres: string[];
  /** The type of the album. Allowed values: "album", "single", "compilation" */
  album_type: string;
}
