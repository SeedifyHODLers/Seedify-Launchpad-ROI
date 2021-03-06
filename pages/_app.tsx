import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

const useIFrameResize = () => {
    useEffect(() => {
        function iframeResize() {
            const body = document.body,
                html = document.documentElement

            const height = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            )
            parent.postMessage('resize::' + height, '*')
        }

        // Resize iframe
        iframeResize()
        setInterval(iframeResize, 2000)
    }, [])
}

function MyApp({ Component, pageProps }: AppProps) {
    useIFrameResize()
    return <Component {...pageProps} />
}

export default MyApp
