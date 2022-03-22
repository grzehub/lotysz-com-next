import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Head from "next/head";
import { useState, VFC } from "react";

const MuiGridCard: VFC<{ content: string; at: string }> = ({ content, at }) => {
  const [selected, setSelected] = useState(false);
  const handleSelect = () => setSelected((s) => !s);
  return (
    <Grid item lg={4} md={6} xs={12}>
      <Box
        onClick={handleSelect}
        sx={{
          background: selected ? "violet" : "white",
          p: 1,
          borderRadius: 0.2,
          height: "80px",
          cursor: "pointer",
        }}
      >
        <Typography variant='body1'>{content}</Typography>
        <Typography variant='subtitle2'>{at}</Typography>
      </Box>
    </Grid>
  );
};

const MuiBio: VFC<{}> = () => {
  return (
    <>
      <Head>
        <title>Mui Bio</title>
      </Head>
      <Box sx={{ background: "#c4c4c4", minHeight: "100vh" }}>
        <Grid container spacing={8} sx={{ p: 8 }}>
          <Grid item md={8} xs={12}>
            <Typography variant='h1'>I. MUI Studio</Typography>
            <Typography variant='subtitle1'>
              Helped launch the first version of MUI Studio.
            </Typography>

            <Typography variant='h1' sx={{ pt: 4 }}>
              1.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              You helped the team structure the initial product strategy (who
              are we optimizing for, what are the differentiators, pricing
              model).
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Product Vision Workshops' at='BLDR' />
              <MuiGridCard content='Product Canvas' at='BLDR' />
              <MuiGridCard content='Empathy Map' at='BLDR' />
              <MuiGridCard content='User Journeys' at='BLDR' />
              <MuiGridCard content='User Story Mapping' at='BLDR' />
              <MuiGridCard content='Business Development' at='Pasieka' />
              <MuiGridCard content='Business Development' at='The Codeine' />
              <MuiGridCard content='Business Development' at='SHU' />
            </Grid>

            <Typography variant='h1' sx={{ pt: 4 }}>
              2.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              You conducted the branding work, understanding how we want to
              communicate, market, and generally promote the product out there.
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Creative & Art Director' at='The Codeine' />
              <MuiGridCard content='Art Director' at='SHU' />
              <MuiGridCard content='Art Director' at='IIZT' />
            </Grid>

            <Typography variant='h1' sx={{ pt: 4 }}>
              3.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              You understood and designed the UI for the product, sorting the
              numerous hard interactions to pull off that enable faster UI
              building.
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Squarespace' at='BLDR' />
              <MuiGridCard content='Webflow' at='BLDR' />
              <MuiGridCard content='Figma' at='BLDR' />
              <MuiGridCard content='Sketch' at='BLDR' />
              <MuiGridCard content='React' at='BLDR' />
              <MuiGridCard content='Persona' at='The Codeine' />
              <MuiGridCard content='Adobe' at='The Codeine' />
            </Grid>

            <Typography variant='h1' sx={{ pt: 4 }}>
              4.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              You guided the team on a larger vision, helping everyone see what
              the v2, v3, so on and so forth could look like.
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Product Vision Workshops' at='BLDR' />
              <MuiGridCard content='FCPD' at='BLDR' />
              <MuiGridCard content='Lean' at='BLDR' />
              <MuiGridCard content='MVP' at='BLDR' />
              <MuiGridCard content='PMF' at='BLDR' />
              <MuiGridCard content='Scaling' at='BLDR' />
              <MuiGridCard content='MUI Studio as Figma' at='Mui :)' />
            </Grid>

            <Typography variant='h1' sx={{ pt: 8 }}>
              II. MUI X
            </Typography>
            <Typography variant='subtitle1'>Helped MUI X grow.</Typography>

            <Typography variant='h1' sx={{ pt: 4 }}>
              1.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              Through a bunch of prototyping and testing, you and the team
              doubled the number of components released.
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Frontend Prototypes' at='BLDR' />
              <MuiGridCard content='Figma Prototypes' at='Personal' />
              <MuiGridCard content='Sketch Prototypes' at='BLDR' />
              <MuiGridCard content='Mobile Prototypes' at='The Codeine' />
            </Grid>

            <Typography variant='h1' sx={{ pt: 4 }}>
              2.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              You helped the team figure out and promote a new pricing model.
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Business Development' at='Pasieka' />
              <MuiGridCard content='Business Development' at='The Codeine' />
              <MuiGridCard content='Business Development' at='SHU' />
            </Grid>

            <Typography variant='h1' sx={{ pt: 4 }}>
              3.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              You contributed to upgrading the documentation overall marketing
              of it.
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Prisma DS' at='BLDR' />
              <MuiGridCard content='Unifonic DS' at='BLDR' />
              <MuiGridCard content='Boldare DS' at='BLDR' />
            </Grid>

            <Typography variant='h1' sx={{ pt: 8 }}>
              III. MUI
            </Typography>
            <Typography variant='subtitle1'>
              Supported the design org growth.
            </Typography>

            <Typography variant='h1' sx={{ pt: 4 }}>
              1.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              You helped establish design rituals and overall product culture.
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Chapter Designers' at='BLDR' />
              <MuiGridCard content='Creative Direction' at='The Codeine' />
            </Grid>

            <Typography variant='h1' sx={{ pt: 4 }}>
              2.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              You helped me with bringing more designers.
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Chapter Designers' at='BLDR' />
              <MuiGridCard content='Hire Me' at='The Codeine' />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MuiBio;
