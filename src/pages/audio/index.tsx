import { GetStaticProps, NextPage } from 'next';
import { getAllPosts } from 'lib/audio';
import Layout from 'components/home/Layout';
import AudioCard from 'components/home/AudioCard';
import SEO from 'components/home/SEO';
import PageHeader from 'components/home/PageHeader';
import { HomeAttributes } from 'interfaces/home';
import { AudioAttributes } from 'interfaces/audio';
//import { EventAttributes } from 'interfaces/event';
import Header from 'components/home/Header';
import Head from 'next/head';
import { useEffect, useState } from 'react';

//import React from 'react';

interface Props {
  homeContent: { attributes: HomeAttributes };
  audioContent: { attributes: AudioAttributes };
  posts: any[];
}

const AudioPage: NextPage<Props> = ({ posts, audioContent, homeContent }) => {
  const home = homeContent.attributes;
  const audio = audioContent.attributes;
  const [episodes, setEpisodes] = useState([]);
  const [speaker, setSpeaker] = useState('');
  const [book, setBook] = useState('');

  const handleSpeakerSelect = (event) => {
    setSpeaker(event.target.value);
  };
  const handleBookSelect = (event) => {
    setBook(event.target.value);
  };
  /*const filterBySpeaker = (posts) => {
    return posts.filter((episode) =>
      episode.speaker.toLowerCase().includes(speaker.toLocaleLowerCase())
    );
  };
  const filterByBook = (posts) => {
    return posts.filter((episode) =>
      episode.book.toLowerCase().includes(book.toLocaleLowerCase())
    );
  };
  useEffect(() => {
    let result = posts;
    result = filterByBook(result);
    result = filterBySpeaker(result);
    setEpisodes(result);
  }, [filterBySpeaker, filterByBook, posts]);*/
  useEffect(() => {
    setEpisodes(posts);
  }, [posts]);
  const filteredEpisodes = episodes.filter(
    (episode) =>
      episode.speaker.toLowerCase().includes(speaker.toLocaleLowerCase()) &&
      episode.book.toLowerCase().includes(book.toLocaleLowerCase())
  );
  return (
    <>
      <SEO />
      <Layout>
        <Header cta_text={home.hero_cta_text} cta_url={home.hero_cta_url} />
        <Head>
          <title>{audio.audio_title}</title>
        </Head>
        <div className="bg-gray-50">
          <main className="flex-1 w-full container px-4 py-8 mx-auto md:px-8 md:py-16">
            <div>
              <PageHeader
                title={audio.audio_title}
                description={audio.audio_description}
              />
            </div>
            <section className="container mx-auto ">
              <div className="space-y-8">
                <div className="flex flex-1 gap-4 justify-between mx-auto max-w-lg">
                  <div className="w-full">
                    <label
                      htmlFor="select-speaker"
                      className="text-gray-400 block"
                    >
                      Speaker
                      <select
                        id="select-speaker"
                        value={speaker}
                        onChange={handleSpeakerSelect}
                        className="styled-select shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 w-full block mt-1"
                      >
                        <option value="">All Speakers</option>
                        {audio.speakers?.map((sp, i) => {
                          return (
                            <option key={i} value={sp.name}>
                              {sp.name}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="select-book"
                      className="text-gray-400 block"
                    >
                      Book
                      <select
                        id="select-book"
                        value={book}
                        onChange={handleBookSelect}
                        className="styled-select shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 w-full block mt-1"
                      >
                        <option value="">All Books</option>
                        {audio.books?.map((bk, i) => {
                          return (
                            <option key={i} value={bk.name}>
                              {bk.name}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredEpisodes.map((post, i) => (
                    <AudioCard
                      key={i}
                      title={post.title}
                      image={post.image}
                      slug={post.slug}
                      book={post.book}
                      speaker={post.speaker}
                    />
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homeContent = await import(`../../content/pages/${'home'}.md`);
  const content = await import(`../../content/pages/${'audio'}.md`);
  const posts = getAllPosts([
    'title',
    'subtitle',
    'book',
    'speaker',
    'postDate',
    'image',
    'slug',
  ]);

  return {
    props: {
      audioContent: content.default,
      homeContent: homeContent.default,
      posts,
    },
  };
};

export default AudioPage;
