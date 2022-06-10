import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { Welcome, Welcome2 } from '../components/Welcome';

export default function Home() {
  return (
    <div>
      <Head>
        <title>julianmotz.</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Welcome />
      <Welcome2 />
      <Welcome2 />
    </div>
  );
}