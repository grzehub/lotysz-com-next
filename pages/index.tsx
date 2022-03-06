import Head from "next/head";
import Box from "@material-ui/core/Box";
import Layout, { siteTitle } from "../components/layout";
import { VFC } from "react";
import { differenceInCalendarDays } from "date-fns";

const Home: VFC<{}> = () => {
  const today = new Date();
  const warDay = new Date(2022, 1, 24);
  const warDaysCount = differenceInCalendarDays(today, warDay);
  const warDays = [];
  let i = 0;

  do {
    i = i + 1;
    warDays.push(i);
  } while (i < warDaysCount);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box
        sx={{
          bgcolor: "yellow",
          color: "blue",
          display: "inline",
        }}
      >
        {warDays.map((wD) => (
          <small key={wD}>
            <strong>Day {wD}.</strong> Stop Putin! Stop War! Free Ukraine! {` `}
          </small>
        ))}
      </Box>
    </Layout>
  );
};

export default Home;
