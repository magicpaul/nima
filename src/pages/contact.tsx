import { NextPage, GetStaticProps } from 'next';
import React from 'react';
import SEO from 'components/home/SEO';
//import HeroSection from 'components/home/HeroSection';
import Layout from 'components/home/Layout';
import TeamSection from 'components/contact/TeamSection';
import { ContactAttributes } from 'interfaces/contact';
import { HomeAttributes } from 'interfaces/home';
import ContactForm from 'components/contact/ContactForm';
import Header from 'components/home/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  content: { attributes: ContactAttributes };
  homeContent: { attributes: HomeAttributes };
}

const ContactPage: NextPage<Props> = ({ content, homeContent }) => {
  const team = content.attributes;
  const home = homeContent.attributes;
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === 'true';
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-6 border-l-8 sm:py-8 border-green-600 bg-green-500 bg-opacity-10 text-gray-800 shadow-xl my-4">
          <span>
            Thank you for submitting this form. Someone should get back to you
            soon.
          </span>
          <button
            type="button"
            className="px-8 py-3 font-semibold rounded bg-green-500 text-white"
            onClick={() =>
              router.replace('/contact', undefined, { shallow: true })
            }
          >
            Submit Another Response
          </button>
        </div>
      </div>
    </React.Fragment>
  );
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
        {formVisible ? <ContactForm /> : ConfirmationMessage}
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
