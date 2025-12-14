import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'DFW Indoor Sports - Premier Multi-Sport Facility'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A111F',
          backgroundImage: 'linear-gradient(135deg, #0A111F 0%, #1a2744 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: '#D62828',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 60,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            D
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            letterSpacing: '-0.02em',
          }}
        >
          DFW Indoor Sports
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#9CA3AF',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Premier Multi-Sport Facility in Fort Worth
        </div>
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 50,
            fontSize: 20,
            color: '#D62828',
            fontWeight: 600,
          }}
        >
          <span>Cricket</span>
          <span>•</span>
          <span>Badminton</span>
          <span>•</span>
          <span>Soccer</span>
          <span>•</span>
          <span>Dodgeball</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
