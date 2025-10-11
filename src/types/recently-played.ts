export interface SpotifyRecentlyPlayed {
  items: SpotifyRecentlyPlayedItem[];
}

export interface SpotifyRecentlyPlayedItem {
  track: SpotifyRecentlyPlayedTrack;
  played_at: string;
}

export interface SpotifyRecentlyPlayedTrack {
  name: string;
  artists: SpotifyRecentlyPlayedArtist[];
  album: SpotifyRecentlyPlayedAlbum;
  external_urls: { spotify: string };
  explicit: boolean;
}

export interface SpotifyRecentlyPlayedArtist {
  name: string;
}

export interface SpotifyRecentlyPlayedAlbum {
  images: SpotifyRecentlyPlayedImage[];
}

export interface SpotifyRecentlyPlayedImage {
  url: string;
}
