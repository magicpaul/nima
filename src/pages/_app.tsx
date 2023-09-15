import { AppProps } from 'next/app';
import 'css/yt-lite.css';
import 'css/tailwind.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
