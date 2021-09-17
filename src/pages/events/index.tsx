import { GetStaticProps, NextPage } from 'next';
import { getAllPosts } from 'lib/posts';
import Layout from 'components/home/Layout';
import BlogCard from 'components/home/BlogCard';
import SEO from 'components/home/SEO';
import PageHeader from 'components/home/PageHeader';
import { HomeAttributes } from 'interfaces/home';
//import { EventAttributes } from 'interfaces/event';
import Header from 'components/home/Header';
import Head from 'next/head';

interface Props {
  content: { attributes: HomeAttributes };
  posts: any[];
}

const BlogPage: NextPage<Props> = ({ posts, content }) => {
  const { attributes } = content;
  return (
    <>
      <SEO />
      <Layout>
        <Header
          cta_text={attributes.hero_cta_text}
          cta_url={attributes.hero_cta_url}
        />
        <Head>
          <title>Events</title>
        </Head>
        <div className="bg-gray-50">
          <main className="flex-1 w-full max-w-7xl px-4 py-8 mx-auto md:px-8 md:py-16">
            <PageHeader title="Events" description="Events here" />
            <section className="container py-8 mx-auto ">
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                  {posts.map((post) => (
                    <BlogCard
                      key={post.slug}
                      title={post.title}
                      image={post.image}
                      subtitle={post.subtitle}
                      slug={post.slug}
                      category={post.category}
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
  const content = await import(`../../content/pages/${'home'}.md`);
  const posts = getAllPosts([
    'title',
    'subtitle',
    'category',
    'postDate',
    'image',
    'slug',
  ]);

  return { props: { content: content.default, posts } };
};

export default BlogPage;
