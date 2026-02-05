import { ImageResponse } from 'next/og'
import { profileData } from '@/lib/portfolio-data'

export const alt = `${profileData.name} - ${profileData.title}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
  const headshotUrl = new URL('/headshot.png', baseUrl).toString()

  // Load the Poppins font (using TTF format for ImageResponse compatibility)
  const poppinsSemiBold = await fetch(
    'https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-SemiBold.ttf'
  ).then((res) => res.arrayBuffer())

  const poppinsRegular = await fetch(
    'https://github.com/google/fonts/raw/main/ofl/poppins/Poppins-Regular.ttf'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'black',
          fontFamily: 'Poppins',
        }}
      >
        {/* Circular headshot with border */}
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid rgba(255, 255, 255, 0.1)',
            marginBottom: 40,
          }}
        >
          <img
            src={headshotUrl}
            width={220}
            height={220}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: 'white',
            marginBottom: 12,
            letterSpacing: '-0.02em',
          }}
        >
          {profileData.name}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '0.01em',
          }}
        >
          {profileData.title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Poppins',
          data: poppinsSemiBold,
          weight: 600,
          style: 'normal',
        },
        {
          name: 'Poppins',
          data: poppinsRegular,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  )
}
