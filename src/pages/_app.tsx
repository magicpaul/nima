import { AppProps } from 'next/app';

import '../css/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
