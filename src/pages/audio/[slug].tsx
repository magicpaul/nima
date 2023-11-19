import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from 'components/home/Layout';
import SEO from 'components/home/SEO';
import { HomeAttributes } from 'interfaces/home';
import { AudioAttributes } from 'interfaces/audio';
import Header from 'components/home/Header';
import Image from 'next/image';

interface HomeProps {
  homeContent: { attributes: HomeAttributes };
  content: { attributes: AudioAttributes };
}

const AudioDetailPage: React.FC<{ content: any; homeContent: any }> = ({
  content,
  homeContent,
}) => {
  const { title, image, book, speaker, embed } = content.attributes;
  const home = homeContent.attributes;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={book} />
        <meta property="og:description" content={book} />
        <meta property="og:image" content={image} />
      </Head>
      <SEO />
      <Layout>
        <Header cta_text={home.hero_cta_text} cta_url={home.hero_cta_url} />
        <div className="relative bg-white dark:bg-gray-700 overflow-hidden">
          <div className="container mx-auto">
            <div className="relative z-10 bg-white dark:bg-gray-700 sm:pb-8 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-24 xl:max-w-3xl">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-700 transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <main className="mt-4 mx-auto container px-4 sm:mt-6 sm:px-6 md:mt-10 lg:mt-0 lg:px-8 lg:pt-16 xl:mt-0 xl:pt-28">
                <p className="text-xl font-medium text-green-500 sm:mb-1 px-4 md:pr-4 md:pl-0">
                  {book}
                </p>
                <h2 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray dark:text-gray-50 sm:leading-none px-4 md:pr-4 md:pl-0">
                  <span className="block text-grey xl:inline">{title}</span>
                </h2>
                <p className="lg:text-2xl md:text-xl text-lg font-medium text-gray-400 dark:text-gray-100 sm:mb-1 px-4 md:pr-4 md:pl-0">
                  {speaker}
                </p>
              </main>
            </div>
          </div>
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-64 w-full sm:h-72 md:h-96 lg:w-full lg:h-full">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                placeholder="blur"
                blurDataURL={image}
              />
            </div>
          </div>
        </div>
        <section className="text-green-900 body-font bg-gray-300 bg-opacity-10">
          <div className="container px-4 md:px-8 py-8 mx-auto flex flex-col">
            <Link href="/audio">
              <a className="text-green uppercase hover:text-green-700 pb-4">
                &lsaquo; Back
              </a>
            </Link>
            <iframe
              src={embed}
              frameBorder="0"
              width="100%"
              height="190px"
            ></iframe>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await import(`../../content/_audio/${params.slug}.md`);
  const homeContent = await import(`../../content/pages/${'home'}.md`);
  return {
    props: { content: content.default, homeContent: homeContent.default },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('../../content/_audio', true, /\.md$/));

  const paths = postSlugs.map((slug) => {
    return `/audio/${slug}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export default AudioDetailPage;
