"use client";
import { FaSpotify } from "react-icons/fa";
import { useSpotify } from "../../contexts/currently-playing-context";

export default function MusicPage() {
  const {
    isPlaying,
    title,
    artist,
    albumImageUrl,
    songUrl,
    explicit,
    canvasUrl,
  } = useSpotify();

  return (
    <div className="container">
      {canvasUrl && (
        <video
          src={canvasUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover h-full w-full opacity-60 dark:opacity-40 mx-auto"
          style={{ pointerEvents: "none" }}
        ></video>
      )}
      <div className="relative z-10">
        {isPlaying ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4">
              <img
                src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
                alt="Spotify playing"
                className="w-3 h-3"
              />

              <img
                id="song-cover"
                src={albumImageUrl}
                alt="Song cover"
                className="rounded-lg object-cover w-32"
              />
              <div className="flex flex-col gap-2 relative overflow-x-hidden">
                <h3
                  id="song-title"
                  className={`text-lg font-bold max-w-xs whitespace-nowrap ${
                    title.length > 35 ? "animate-marquee" : ""
                  }`}
                >
                  <a
                    href={songUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    <span>{title}</span>
                  </a>
                </h3>
                <div className="flex items-center gap-2">
                  {explicit && (
                    <span className="text-xs text-white bg-gray-500 dark:text-black px-1 py-0.5 rounded">
                      E
                    </span>
                  )}
                  <div className="relative overflow-hidden max-w-xs">
                    <h4
                      className={`text-sm opacity-90 whitespace-nowrap ${
                        artist.length > 35 ? "animate-marquee" : ""
                      }`}
                    >
                      <span>{artist}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-white">
            <div className="text-green-500 text-3xl">
              <FaSpotify size={32} />
            </div>
            <h3 className="text-xl mt-4 text-black dark:text-white">
              currently not playing any song on Spotify!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
