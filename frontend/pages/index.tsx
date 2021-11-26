import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout, { siteTitle } from "../components/layout";

interface HomeProps {
  id: string;
  title: string;
  date: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await fetch(`http://localhost:1337/projects`);
  const projects = await res.json();

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects }, // will be passed to the page component as props
  };
};

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        {console.log(projects)}
      </Head>

      <section>
        <h2>Blog</h2>
        <ul>
          {projects.map(({ id, description, title }) => (
            <li key={id}>
              <a>{title}</a>
              {/* <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link> */}
              <br />
              {id}
              <br />
              {description}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
