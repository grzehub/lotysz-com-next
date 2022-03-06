import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import Head from "next/head";
import { ProjectProps } from "../index";
import { getStrapiPostData } from "../../lib/posts";

const Post = ({ project }: { project: ProjectProps }) => {
  const router = useRouter();

  return (
    <Layout>
      {router.isFallback ? (
        <span>Loading…</span>
      ) : (
        <>
          <article>
            <Head>
              <title>{project.title} | Next.js Blog Example with</title>
            </Head>
            <header>{project.title}</header>
            <p>{project.description}</p>
          </article>
        </>
      )}
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/projects`);
  const projects: ProjectProps[] = await res.json();

  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:1337/projects/${params.id}`);
  const project: ProjectProps[] = await res.json();

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project }, // will be passed to the page component as props
  };
}

export default Post;
