import { useEffect, useState } from 'react';

const GRAVATAR_BASE_URL = 'https://gravatar.com/avatar';

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
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!email) {
      setUrl(null);

      return;
    }

    let isCancelled = false;

    buildGravatarUrl(email, sizePx).then((nextUrl) => {
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
