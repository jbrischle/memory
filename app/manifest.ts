import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Memory',
    short_name: 'Memory',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    orientation: 'portrait',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#FFFFFF',
    icons: [
      {
        src: "/icon/memory-game-16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "/icon/memory-game-24.png",
        sizes: "24x24",
        type: "image/png"
      },
      {
        src: "/icon/memory-game-32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/icon/memory-game-64.png",
        sizes: "64x64",
        type: "image/png"
      },
      {
        src: "/icon/memory-game-128.png",
        sizes: "128x128",
        type: "image/png"
      },
      {
        src: "/icon/memory-game-256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/icon/memory-game-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
  }
}
