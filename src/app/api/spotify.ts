import axios from "axios";
import { SpotifyCurrentlyPlaying } from "@/types/currently-playing";
import {
  SpotifyRecentlyPlayed,
  SpotifyRecentlyPlayedItem,
} from "@/types/recently-played";

export class SpotifyAPI {
  private static readonly CLIENT_ID =
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
  private static readonly CLIENT_SECRET =
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!;
  private static readonly REFRESH_TOKEN =
    process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!;
  private static accessToken: string;
  private static tokenObtainedAt: number;
  private static tokenExpiresIn: number = 50 * 60 * 1000;

  public static async getCurrentlyPlaying() {
    try {
      const accessToken = await this.getAccessToken();
      if (!accessToken) {
        return null;
      }

      const response = await axios.get<SpotifyCurrentlyPlaying>(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.status === 204 || response.status > 400) {
        return null;
      }

      return response.data;
    } catch (error) {
      console.error("Error getting currently playing:", error);
      return null;
    }
  }

  public static async getRecentlyPlayed(
    limit = 1,
  ): Promise<SpotifyRecentlyPlayedItem | null> {
    try {
      const accessToken = await this.getAccessToken();
      if (!accessToken) {
        return null;
      }

      const response = await axios.get<SpotifyRecentlyPlayed>(
        "https://api.spotify.com/v1/me/player/recently-played",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit,
          },
        },
      );

      if (!response.data?.items?.length) {
        return null;
      }

      return response.data.items[0];
    } catch (error) {
      console.error("Error getting recently played:", error);
      return null;
    }
  }

  private static async getAccessToken() {
    try {
      const now = Date.now();

      if (
        this.accessToken &&
        this.tokenObtainedAt &&
        now - this.tokenObtainedAt < this.tokenExpiresIn
      ) {
        return this.accessToken;
      }

      const authHeader = Buffer.from(
        `${this.CLIENT_ID}:${this.CLIENT_SECRET}`,
      ).toString("base64");

      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: this.REFRESH_TOKEN,
        }).toString(),
        {
          headers: {
            Authorization: `Basic ${authHeader}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      const data = response.data;

      this.accessToken = data.access_token;
      this.tokenObtainedAt = now;
      if (typeof data.expires_in === "number") {
        const bufferSeconds = 60;
        this.tokenExpiresIn = Math.max(
          (data.expires_in - bufferSeconds) * 1000,
          30 * 1000,
        );
      }

      return this.accessToken;
    } catch (error) {
      console.error("Error obtaining access token:", error);
      return null;
    }
  }
}
