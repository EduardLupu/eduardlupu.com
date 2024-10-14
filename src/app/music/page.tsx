"use client";
import { FaSpotify } from "react-icons/fa";
import { useSpotify } from "../../contexts/currently-playing-context";
import { useEffect, useRef } from "react";

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

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fallbackImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const fallbackImageElement = fallbackImageRef.current;

    if (videoElement && canvasUrl) {
      const promise = videoElement.play();

      if (promise !== undefined) {
        promise
          .catch((error) => {
            if (error.name === "NotAllowedError") {
              videoElement.remove();
              if (fallbackImageElement) {
                fallbackImageElement.style.display = "block";
              }
            }
          })
          .then(() => {
            if (videoElement) {
              videoElement.play();
            }
          });
      }
    }
  }, [canvasUrl]);

  return (
    <div className="container">
      {canvasUrl ? (
        <>
          <video
            src={canvasUrl}
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 object-cover h-full w-full opacity-60 dark:opacity-40 mx-auto"
            style={{ pointerEvents: "none" }}
          ></video>
          <img
            ref={fallbackImageRef}
            src={albumImageUrl || ""}
            alt="Song cover"
            className="absolute inset-0 object-cover h-full w-full opacity-60 dark:opacity-40 mx-auto"
            style={{ display: "none", pointerEvents: "none" }}
          />
        </>
      ) : (
        albumImageUrl && (
          <img
            src={albumImageUrl}
            alt="Song cover"
            className="absolute inset-0 object-cover h-full w-full opacity-60 dark:opacity-40 mx-auto"
            style={{ pointerEvents: "none" }}
          />
        )
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
                className="rounded-lg object-cover w-16 sm:w-32"
              />
              <div className="flex flex-col gap-2 relative overflow-x-hidden">
                <h3
                  id="song-title"
                  className="text-xs md:text-lg font-bold whitespace-nowrap truncate"
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
                  <div className="relative overflow-hidden">
                    <h4 className="text-[10px] md:test-xs opacity-90 whitespace-nowrap truncate">
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
