import { NextPage, GetStaticProps } from 'next';

import SEO from 'components/home/SEO';
//import HeroSection from 'components/home/HeroSection';
//import Layout from 'components/home/Layout';
import { HomeAttributes } from 'interfaces/home';
import Header from 'components/home/Header';
import Footer from 'components/home/Footer';
import Link from 'next/link';
import Image from "next/legacy/image";

interface Props {
  homeContent: { attributes: HomeAttributes };
}

const AudioPage: NextPage<Props> = ({ homeContent }) => {
  const home = homeContent.attributes;
  return (
    <div className="h-screen flex flex-col justify-between">
      <SEO />
      <Header cta_text={home.hero_cta_text} cta_url={home.hero_cta_url} />
      <div className="mx-auto  flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto space-y-8 text-center sm:max-w-lg">
          <Image
            src="/img/Music-pana.svg"
            alt="person wearing headphones with an audio player app icon"
            width="300"
            height="300"
            className="w-32 h-32"
          />
          <h1 className="text-3xl">Audio recordings are coming soon</h1>
          <Link
            href="/"
            className="px-8 py-3 font-semibold rounded-md bg-green text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'contact'}.md`);
  const homeContent = await import(`../content/pages/${'home'}.md`);
  return {
    props: { content: content.default, homeContent: homeContent.default },
  };
};

export default AudioPage;
