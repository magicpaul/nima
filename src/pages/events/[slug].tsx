import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
// import Link from 'next/link';
//import Image from 'next/image';
import { CalendarIcon, MapIcon } from '@heroicons/react/outline';
import Layout from 'components/home/Layout';
import SEO from 'components/home/SEO';
import { HomeAttributes } from 'interfaces/home';
import { EventAttributes } from 'interfaces/event';
import Header from 'components/home/Header';
import TicketButton from 'components/home/TicketButton';
import Image from 'next/image';

interface HomeProps {
  homeContent: { attributes: HomeAttributes };
  content: { attributes: EventAttributes };
}

const EventDetailPage: React.FC<{ content: any; homeContent: any }> = ({
  content,
  homeContent,
}) => {
  const {
    title,
    image,
    category,
    subtitle,
    eventDate,
    location,
    ticketsLink,
    whenText,
    costText,
    mapsEmbed,
    directions,
    sp1Img,
    sp1Name,
    sp1Location,
    sp1Bio,
    sp2Img,
    sp2Name,
    sp2Location,
    sp2Bio,
  } = content.attributes;
  const home = homeContent.attributes;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={image} />
      </Head>
      <SEO />
      <Layout>
        <Header cta_text={home.hero_cta_text} cta_url={home.hero_cta_url} />
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 bg-white sm:pb-8 md:pb-16 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-24">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 md:mt-10 lg:mt-0 lg:px-8 lg:pt-16 xl:mt-0 xl:pt-28">
                <p className="text-xl font-medium text-green-500 sm:mb-1 px-4 md:pr-4 md:pl-0">
                  {category}
                </p>
                <h2 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray sm:leading-none px-4 md:pr-4 md:pl-0">
                  <span className="block text-grey xl:inline">{title}</span>
                </h2>
                <p className="lg:text-2xl md:text-xl text-lg font-medium text-gray-400 sm:mb-1 px-4 md:pr-4 md:pl-0">
                  {subtitle}
                </p>
                <div className="px-4 md:pr-4 md:pl-0">
                  <div className="flex-none sm:flex items-center lg:text-xl md:text-lg font-light my-8 lg:mt-8 sm:mb-0">
                    <div className="block sm:inline-block">
                      <span className="text-gray-300">
                        <CalendarIcon className="h-6 w-6 pr-2 inline-block" />
                        {eventDate}
                      </span>
                    </div>
                    <div className="text-base font-normal mx-2 sm:inline hidden">
                      ·
                    </div>
                    <div className="sm:inline-block block">
                      <span className="text-gray-300">
                        <MapIcon className="h-6 w-6 pr-2 inline" />
                        {location}
                      </span>
                    </div>
                  </div>
                </div>
                <TicketButton link={ticketsLink} />
              </main>
            </div>
          </div>
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="h-64 w-full sm:h-72 md:h-96 lg:w-full lg:h-full">
              <Image
                src={image}
                alt="Northern Ireland Ministry Assembly Header Image"
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
            <article
              className="text-base font-light leading-relaxed prose lg:prose-xl mx-auto max-w-none"
              dangerouslySetInnerHTML={{ __html: content.html }}
            ></article>
          </div>
        </section>
        <section className="text-gray-600 body-font relative">
          <div className="container px-4 md:px-8 py-8 mx-auto ">
            <div className="grid gap-16 sm:grid-cols-2 justify-between">
              <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 mb-4 mr-8 text-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg mb-1 font-medium title-font uppercase text-green">
                    When
                  </h2>
                  <p className="text-base font-light">{whenText}</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 mr-8 text-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg mb-1 font-medium title-font uppercase text-green">
                      Cost
                    </h2>
                    <p className="text-base font-light">{costText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 md:px-8 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 w-full h-96 md:h-auto bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0 "
                frameBorder="0"
                title="map"
                scrolling="no"
                src={mapsEmbed}
              ></iframe>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white grid grid-cols-1 grid-rows-3 justify-start md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div className="flex flex-col items-start row-start-1 max-w-screen-sm md:flex-row">
                <div className="flex items-center justify-center w-12 h-12 mb-4 mr-8 text-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg mb-1 font-medium title-font uppercase text-green">
                    Where
                  </h2>
                  <p className="leading-relaxed text-gray-600">{location}</p>
                </div>
              </div>
              <div className="row-start-2 row-span-2">
                <p className="text-base font-light mb-4">{directions}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-green-900 body-font bg-green bg-opacity-10">
          <div className="container px-4 md:px-8 py-16 mx-auto flex flex-col ">
            <div className="lg:w-full mx-auto ">
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-center text-gray font-extrabold tracking-tight">
                Speakers
              </h1>
              <div className="flex flex-col items-center sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <img
                    src={sp1Img}
                    className="w-32 h-32 object-cover rounded-full inline-flex items-center justify-center"
                  />
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      {sp1Name}
                    </h2>
                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">{sp1Location}</p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-base md:text-lg mb-4">
                    {sp1Bio}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <img
                    src={sp2Img}
                    className="w-32 h-32 object-cover rounded-full inline-flex items-center justify-center"
                  />
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                      {sp2Name}
                    </h2>
                    <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">{sp2Location}</p>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-base md:text-lg mb-4">
                    {sp2Bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await import(`../../content/_events/${params.slug}.md`);
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
  })(require.context('../../content/_events', true, /\.md$/));

  const paths = postSlugs.map((slug) => {
    return `/events/${slug}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export default EventDetailPage;
