import Head from "next/head";
import { VFC } from "react";
import Link from "./link";

export const siteTitle = "lotysz creative coding";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: VFC<LayoutProps> = ({ children, home }) => {
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
