import Head from "next/head";
import Link from "./link";

export const siteTitle = "Next.js Lotr";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

export const Layout = ({ children, home }: LayoutProps) => {
  return (
    <div>
      <Head>
        <meta name='og:title' content={siteTitle} />
      </Head>
      <header></header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
