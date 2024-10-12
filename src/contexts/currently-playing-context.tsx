"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { SpotifyAPI } from "../app/api/spotify";

interface SpotifyContextType {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  explicit: boolean;
  canvasUrl: string;
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
  const [canvasUrl, setCanvasUrl] = useState("");

  const refreshData = async () => {
    const data = await SpotifyAPI.getCurrentlyPlaying();
    if (data?.is_playing) {
      setIsPlaying(true);
      setTitle(data.item.name);
      setArtist(data.item.artists.map((_artist) => _artist.name).join(", "));
      setAlbumImageUrl(data.item.album.images[0].url);
      setSongUrl(data.item.external_urls.spotify);
      setExplicit(data.item.explicit);
      getCurrentlyPlayingCanvas(data.item.id);
    } else {
      setIsPlaying(false);
      setTitle("");
      setArtist("");
      setAlbumImageUrl("");
      setSongUrl("");
      setExplicit(false);
      setCanvasUrl("");
    }
  };

  const getCurrentlyPlayingCanvas = async (songId: string) => {
    const { data } = await SpotifyAPI.getSongCanvas(songId);
    if (
      data &&
      data.trackUnion &&
      data.trackUnion.canvas &&
      data.trackUnion.canvas.url
    ) {
      setCanvasUrl(data.trackUnion.canvas.url);
    } else {
      setCanvasUrl("");
    }
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
        canvasUrl,
        refreshData,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
