import { useEffect, useState } from 'react';

const GRAVATAR_BASE_URL = 'https://gravatar.com/avatar';

// The hash is async, so without this every remount would show the fallback
// for a frame before the image of an address already resolved.
const resolvedUrls = new Map<string, string | null>();

const cacheKey = (email: string, sizePx: number) => {
  return `${email.trim().toLowerCase()}|${sizePx}`;
};

const toHex = (buffer: ArrayBuffer) => {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

export const buildGravatarUrl = async (email: string, sizePx: number) => {
  const subtle = globalThis.crypto?.subtle;

  if (!subtle) {
    return null;
  }

  const data = new TextEncoder().encode(email.trim().toLowerCase());
  const hash = toHex(await subtle.digest('SHA-256', data));

  return `${GRAVATAR_BASE_URL}/${hash}?d=404&s=${sizePx}`;
};

export const useGravatarUrl = (email: string | undefined, sizePx: number) => {
  const [url, setUrl] = useState<string | null>(() => {
    return email ? (resolvedUrls.get(cacheKey(email, sizePx)) ?? null) : null;
  });

  useEffect(() => {
    if (!email) {
      setUrl(null);

      return;
    }

    const key = cacheKey(email, sizePx);

    if (resolvedUrls.has(key)) {
      setUrl(resolvedUrls.get(key) ?? null);

      return;
    }

    let isCancelled = false;

    buildGravatarUrl(email, sizePx).then((nextUrl) => {
      resolvedUrls.set(key, nextUrl);

      if (!isCancelled) {
        setUrl(nextUrl);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [email, sizePx]);

  return url;
};
