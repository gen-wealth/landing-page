import { deflate, inflate } from "pako";

let pending: Record<string, any> = {};

export function getCookie(onError?: (error: any) => any): Record<string, any> | null {
  try {
    // Skip when there's no cookie
    if (!document.cookie) return null;

    // Extract data from cookie
    const cookies = document.cookie.split(";");
    let retrievedData = "";
    cookies.forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      if (name === "data") {
        retrievedData = decodeURIComponent(value);
      }
    });

    // Skip when cookie data is empty
    if (!retrievedData.length) return null;

    // Decode the base64-encoded data
    const base64DecodedData = atob(retrievedData);

    // Convert the data to a Uint8Array
    const compressedData = new Uint8Array(base64DecodedData.length);
    for (let i = 0; i < base64DecodedData.length; i++) {
      compressedData[i] = base64DecodedData.charCodeAt(i);
    }

    // Decompress the data
    const decompressedData = inflate(compressedData, { to: "string" });

    // Return parsed JSON
    return JSON.parse(decompressedData);
  } catch (error) {
    // Error callback
    if (onError) onError(error);
    return null;
  }
}

export function setCookie(data: Record<string, any>, days: number = 30, onError?: (error: any) => any) {
  try {
    let cookie: Record<string, any> | null = getCookie();

    // Hold data when there's no cookie consent
    if (!cookie?.cookieConsent && !data?.cookieConsent) {
      pending = { ...pending, ...data };
      return;
    }

    // Merge new data with existing cookie data
    cookie = { ...cookie, ...pending, ...data };

    // Convert records to JSON
    const json = JSON.stringify(cookie);

    // Compress the JSON data
    const compressedData = deflate(json);

    // Convert the compressed data to a base64-encoded string
    const objectArray = Array.from(compressedData);
    const binary = String.fromCharCode.apply(null, objectArray);
    const base64EncodedData = btoa(binary);

    // Encode the base64-encoded data
    const encodedText = encodeURIComponent(base64EncodedData);

    // Calculate expiration date
    const expiresIn = new Date().getTime() + days * 86_400_000;
    const expiresUTC = new Date(expiresIn).toUTCString();

    // Set cookie parameters
    const genwealth = ".genwealth.app";
    const root = "/";

    // Store the encoded data in the cookie
    document.cookie = `data=${encodedText}; expires=${expiresUTC}; domain=${genwealth}; path=${root}`;
  } catch (error) {
    // Error callback
    if (onError) onError(error);
  }
}
