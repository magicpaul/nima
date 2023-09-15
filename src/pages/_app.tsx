import { AppProps } from 'next/app';
import 'css/tailwind.css';
import 'css/yt-lite.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
