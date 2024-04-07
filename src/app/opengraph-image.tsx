import { ImageResponse } from 'next/og'
import creader_logo from '@/public/creader_logo.svg'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
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
                    backgroundColor: '#fff',
                    fontSize: 32,
                    fontWeight: 600,
                }}
            >
                <img src={creader_logo} alt="CReader Logo" />
                <div style={{ marginTop: 40 }}>Hello, World</div>
            </div>
        ),
        // ImageResponse options
    )
}