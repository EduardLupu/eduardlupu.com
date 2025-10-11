"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { SpotifyAPI } from "@/app/api/spotify";

interface SpotifyContextType {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  explicit: boolean;
  refreshData: () => void;
}

const SpotifyContext = createContext<SpotifyContextType | undefined>(undefined);

export const useSpotify = () => {
  const context = useContext(SpotifyContext);
  if (!context) {
    throw new Error("useSpotify must be used within a SpotifyProvider");
  }
  return context;
};

export const SpotifyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [albumImageUrl, setAlbumImageUrl] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [explicit, setExplicit] = useState(false);

  const refreshData = async () => {
    const currentlyPlaying = await SpotifyAPI.getCurrentlyPlaying();

    if (currentlyPlaying?.is_playing && currentlyPlaying.item) {
      setIsPlaying(true);
      setTitle(currentlyPlaying.item.name);
      setArtist(
        currentlyPlaying.item.artists.map((_artist) => _artist.name).join(", "),
      );
      setAlbumImageUrl(currentlyPlaying.item.album.images[0]?.url ?? "");
      setSongUrl(currentlyPlaying.item.external_urls.spotify);
      setExplicit(currentlyPlaying.item.explicit);
      return;
    }

    const recentlyPlayed = await SpotifyAPI.getRecentlyPlayed();
    if (recentlyPlayed?.track) {
      setIsPlaying(false);
      setTitle(recentlyPlayed.track.name);
      setArtist(
        recentlyPlayed.track.artists.map((_artist) => _artist.name).join(", "),
      );
      setAlbumImageUrl(recentlyPlayed.track.album.images[0]?.url ?? "");
      setSongUrl(recentlyPlayed.track.external_urls.spotify);
      setExplicit(recentlyPlayed.track.explicit);
      return;
    }

    setIsPlaying(false);
    setTitle("");
    setArtist("");
    setAlbumImageUrl("");
    setSongUrl("");
    setExplicit(false);
  };

  useEffect(() => {
    refreshData();

    const intervalId = setInterval(refreshData, 45000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <SpotifyContext.Provider
      value={{
        isPlaying,
        title,
        artist,
        albumImageUrl,
        songUrl,
        explicit,
        refreshData,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
