import pkg from 'next';
const { redirects: nextRedirects } = pkg;
const nextConfig = {};

export const redirects = async () => {
  return [
    {
      source: '/',
      destination: '/login',
      permanent: true,
    },
  ];
};