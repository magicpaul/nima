import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { CalendarIcon, MapIcon } from '@heroicons/react/outline';
import Layout from 'components/home/Layout';
import SEO from 'components/home/SEO';
import { HomeAttributes } from 'interfaces/home';
import { EventAttributes } from 'interfaces/event';
import Header from 'components/home/Header';
import TicketButton from 'components/home/TicketButton';
import Image from 'next/image';
import Speaker from 'components/event/Speaker';
import EventDetails from 'components/event/EventDetails';

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
    featured,
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
  console.log(directions);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={subtitle} />
        <meta property="og:description" content={subtitle} />
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
                  {category}
                </p>
                <h2 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray sm:leading-none px-4 md:pr-4 md:pl-0">
                  <span className="block text-grey dark:text-gray-50 xl:inline">
                    {title}
                  </span>
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
              className="text-base font-light text-gray dark:text-gray-100 leading-relaxed prose lg:prose-xl mx-auto max-w-none"
              dangerouslySetInnerHTML={{ __html: content.html }}
            ></article>
          </div>
        </section>
        <EventDetails
          when={whenText}
          cost={costText}
          where={location}
          directions={directions}
          map={mapsEmbed}
          featured={featured}
        />
        <section className="text-green-900 body-font bg-green bg-opacity-10">
          <div className="container px-4 md:px-8 py-16 mx-auto flex flex-col ">
            <div className="lg:w-full mx-auto ">
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-center text-gray dark:text-gray-100 font-extrabold tracking-tight">
                Speaker{sp2Name ? 's' : ''}:
              </h1>
              <Speaker
                spName={sp1Name}
                spBio={sp1Bio}
                spImg={sp1Img}
                spLocation={sp1Location}
              />
              <Speaker
                spName={sp2Name}
                spBio={sp2Bio}
                spImg={sp2Img}
                spLocation={sp2Location}
              />
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
