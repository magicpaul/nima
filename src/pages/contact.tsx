import { NextPage, GetStaticProps } from 'next';

import SEO from 'components/home/SEO';
//import HeroSection from 'components/home/HeroSection';
import Layout from 'components/home/Layout';
import TeamSection from 'components/contact/TeamSection';
import { ContactAttributes } from 'interfaces/contact';
import { HomeAttributes } from 'interfaces/home';
import ContactForm from 'components/contact/ContactForm';
import Header from 'components/home/Header';
import Head from 'next/head';
interface Props {
  content: { attributes: ContactAttributes };
  homeContent: { attributes: HomeAttributes };
}

const ContactPage: NextPage<Props> = ({ content, homeContent }) => {
  const team = content.attributes;
  const home = homeContent.attributes;
  return (
    <>
      <SEO />
      <Layout>
        <Header cta_text={home.hero_cta_text} cta_url={home.hero_cta_url} />
        <Head>
          <title>{team.team_title}</title>
          <meta name="description" content={team.team_description}></meta>
        </Head>
        <TeamSection
          title={team.team_title}
          description={team.team_description}
          team={team.team}
        />
        <ContactForm />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'contact'}.md`);
  const homeContent = await import(`../content/pages/${'home'}.md`);
  return {
    props: { content: content.default, homeContent: homeContent.default },
  };
};

export default ContactPage;
