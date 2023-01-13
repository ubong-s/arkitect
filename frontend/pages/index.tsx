import Head from 'next/head';
import Image from 'next/image';
import { CallToAction, Hero, InnovativeDesign } from '../components';

export default function Home() {
  return (
    <>
      <Hero />
      <InnovativeDesign />
      <CallToAction
        subtitle='Contact'
        title='Curious about what we can do for you?'
        button={{ text: 'Get In Touch', link: '/contact' }}
      />
    </>
  );
}
