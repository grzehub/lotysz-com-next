import Head from "next/head";
import { Button } from "@material-ui/core";
import { GetStaticProps, InferGetStaticPropsType } from "next";
// import Link from "../components/link";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
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

const Home = ({ projects }: { projects: ProjectProps[] }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h2>Blog</h2>
        <ul>
          {projects.map(({ id, description, title }) => (
            <li key={id}>
              <Link href={`/projects/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              <span style={{ fontFamily: "Roboto-ffi Bold Old" }}>
                stored: {description}
              </span>
              <Button
                variant='contained'
                color='primary'
                style={{ fontFamily: "Roboto-ffi Bold" }}
              >
                {title}
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
