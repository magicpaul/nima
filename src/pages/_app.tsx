import { AppProps } from 'next/app';

import 'css/yt-lite.css';
import 'css/tailwind.css';

interface CustomPageProps { 
  
}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
                                            
  return <Component {...pageProps} />
                    
}
