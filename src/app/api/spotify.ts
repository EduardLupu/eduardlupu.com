import axios from "axios";
import { SpotifyCurrentlyPlaying } from "../../types/currently-playing";

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
  private static webAccessToken: string;
  private static readonly CORS_PROXY =
    "https://cors-anywhere.lupu-eduard-adrian.workers.dev/";

  public static async getCurrentlyPlaying() {
    try {
      const accessToken = await this.getAccessToken();

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

  public static async getSongCanvas(songId: string) {
    const accessToken = await this.webGetAccessToken(),
      operationName = "canvas",
      variables = JSON.stringify({ uri: `spotify:track:${songId}` }),
      extensions = JSON.stringify({
        persistedQuery: {
          version: 1,
          sha256Hash:
            "1b1e1915481c99f4349af88268c6b49a2b601cf0db7bca8749b5dd75088486fc",
        },
      });

    const url = new URL(this.CORS_PROXY);

    url.searchParams.append(
      "destination",
      `https://api-partner.spotify.com/pathfinder/v1/query?operationName=${operationName}&variables=${encodeURIComponent(variables)}&extensions=${encodeURIComponent(extensions)}`,
    );

    const headers = {
      authorization: `Bearer ${accessToken}`,
      "app-platform": "WebPlayer",
      "spotify-app-version": "896000000",
    };

    try {
      const response = await axios.get(url.toString(), { headers });
      return response.data;
    } catch (error) {
      console.error("Error getting song canvas:", error);
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

      return this.accessToken;
    } catch (error) {
      console.error("Error obtaining access token:", error);
      return null;
    }
  }

  private static async webGetAccessToken() {
    // Free CORS Proxy server because I won't pay for any server :P
    const url = new URL(this.CORS_PROXY);

    url.searchParams.append(
      "destination",
      `https://open.spotify.com/get_access_token?reason=transport&productType=web_player`,
    );

    const now = Date.now();

    if (
      this.webAccessToken &&
      this.tokenObtainedAt &&
      now - this.tokenObtainedAt < this.tokenExpiresIn
    ) {
      return this.webAccessToken;
    }

    const headers = {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-encoding": "gzip, deflate, br, zstd",
      "accept-language": "en-US,en;q=0.9",
      connection: "keep-alive",
      host: "open.spotify.com",
      "sec-ch-ua":
        '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    };

    const { data } = await axios.get<{
      clientId: string;
      accessToken: string;
      accessTokenExpirationTimestampMs: number;
      isAnonymous: boolean;
    }>(url.toString(), {
      headers: headers,
    });

    this.webAccessToken = data.accessToken;

    return this.webAccessToken;
  }

  private static async spotifyIdToGid(spotifyId: string) {
    function base62ToBase10(s: string) {
      const base = BigInt(62);
      let value = BigInt(0);
      for (let i = 0; i < s.length; i++) {
        const char = s[i];
        let digitValue: bigint;
        if ("0" <= char && char <= "9") {
          digitValue = BigInt(char.charCodeAt(0) - "0".charCodeAt(0));
        } else if ("a" <= char && char <= "z") {
          digitValue = BigInt(char.charCodeAt(0) - "a".charCodeAt(0) + 10);
        } else if ("A" <= char && char <= "Z") {
          digitValue = BigInt(char.charCodeAt(0) - "A".charCodeAt(0) + 36);
        }
        // @ts-ignore
        value = base * value + digitValue;
      }
      return value;
    }

    function base10ToHex(n: bigint) {
      return n.toString(16);
    }

    const base10 = base62ToBase10(spotifyId);
    let gidHex = base10ToHex(base10);

    const gidLength = gidHex.length;

    for (let i = gidLength; i < 32; i++) {
      gidHex = `0${gidHex}`;
    }
    return gidHex;
  }
}
