import { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/Logo.svg'


import { Container, Header } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Imagem da logo" width={100} height={100} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

