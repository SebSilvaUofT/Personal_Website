import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const headshotPath = path.join(process.cwd(), 'public', 'headshot.png')
  const headshotData = await readFile(headshotPath)
  const headshotBase64 = `data:image/png;base64,${headshotData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <img
          src={headshotBase64}
          width={32}
          height={32}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
