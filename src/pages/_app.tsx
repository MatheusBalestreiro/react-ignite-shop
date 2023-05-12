import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";

import logoImg from '../assets/logo.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps){
  return (
    <div>
      <header>
        <img src={logoImg.src} />
      </header>
      <Component {...pageProps} />
    </div>
    
  )
}
