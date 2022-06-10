import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { Welcome, Welcome2 } from '../components/Welcome';
import { Services } from '../components/Services'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  return (
    <div>
      <Head>
        <title>julianmotz | it-solutions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Parallax pages={3} style={{ top: '0', left: '0', backgroundColor: '#f1f5f9' }}>
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0f172a',
          }}>
          <Welcome/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2.5}
          >
          <Services/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Welcome2/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}