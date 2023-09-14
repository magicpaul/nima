import { NextPage, GetStaticProps } from 'next';

import SEO from 'components/home/SEO';
import HeroSection from 'components/home/HeroSection';
import Layout from 'components/home/Layout';
import FeatureSection from 'components/home/FeatureSection';
import EventSection from 'components/home/EventSection';
import { HomeAttributes } from 'interfaces/home';
import { EventAttributes } from 'interfaces/event';
import { getFeaturedPost } from '../lib/posts';
import Header from 'components/home/Header';

interface Props {
  content: { attributes: HomeAttributes };
  featuredPost: { attributes: EventAttributes };
}

const HomePage: NextPage<Props> = ({ content, featuredPost }) => {
  const { attributes } = content;
  const currentEvent = featuredPost[0];
  return (
    <>
      <SEO />
      <Layout>
        <Header
          cta_text={attributes.hero_cta_text}
          cta_url={attributes.hero_cta_url}
        />
        <HeroSection
          title_white={attributes.hero_title_white}
          title_green={attributes.hero_title_green}
          description={attributes.hero_description}
          image={attributes.hero_image}
          cta_text={attributes.hero_cta_text}
          cta_url={attributes.hero_cta_url}
        />
        <FeatureSection
          description1={attributes.feature_description1}
          description2={attributes.feature_description2}
        />
        {currentEvent && (
          <EventSection
            category={currentEvent.category}
            title={currentEvent.title}
            subtitle={currentEvent.subtitle}
            eventDate={currentEvent.eventDate}
            location={currentEvent.location}
            slug={currentEvent.slug}
            sp1Name={currentEvent.sp1Name}
            sp1Img={currentEvent.sp1Img}
            sp1Location={currentEvent.sp1Location}
            sp2Name={currentEvent.sp2Name}
            sp2Img={currentEvent.sp2Img}
            sp2Location={currentEvent.sp2Location}
            image={currentEvent.image}
            video={currentEvent.video}
            featured={currentEvent.featured}
          />
        )}
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);
  const featuredPost = getFeaturedPost([
    'category',
    'title',
    'subtitle',
    'eventDate',
    'location',
    'slug',
    'sp1Name',
    'sp1Img',
    'sp1Location',
    'sp2Name',
    'sp2Img',
    'sp2Location',
    'image',
    'video',
    'featured',
  ]);

  return { props: { content: content.default, featuredPost } };
};

export default HomePage;
