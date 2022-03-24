import { Grid, IconButton, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Head from "next/head";
import Dialog from "@mui/material/Dialog";
import { useState, VFC } from "react";
import Image from "next/image";
import Link from "../../components/link";
import ProductImg from "../../public/images/mui/TrueRate.png";
import BCanvas from "../../public/images/mui/BusinessCanvas.png";
import EmpathyMap from "../../public/images/mui/EmpathyMap.png";
import Personas from "../../public/images/mui/Persona.png";
import USM from "../../public/images/mui/USM.png";
import FINanse from "../../public/images/mui/FINanse.png";
import CodeinePricing from "../../public/images/mui/CodeinePricing.png";

interface MuiDialogProps {
  open: boolean;
  onClose: () => void;
  img: StaticImageData;
}

const MuiDialog: VFC<MuiDialogProps> = ({ open, onClose, img }) => {
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <Box borderBottom={1}>
        <Typography
          variant='body1'
          sx={{ paddingLeft: "8px", paddingRight: "8px", cursor: "pointer" }}
          onClick={onClose}
        >
          &#8592;
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          marginTop: "10vh",
          marginBottom: "10vh",
          cursor: "zoom-out",
        }}
        onClick={onClose}
      >
        <Image
          src={img}
          alt='Mui Bio Images'
          layout='fill'
          objectFit='contain'
        />
      </Box>
    </Dialog>
  );
};

const MuiGridCard: VFC<{
  content: string;
  at: string;
  more?: boolean;
  img?: StaticImageData;
  link?: string;
}> = ({ content, at, more, img, link }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);
  const handleSelect = () => setChecked((s) => !s);
  const handleHover = () => setHover((s) => !s);

  return (
    <Grid item lg={4} md={6} xs={12}>
      <Box
        onClick={handleSelect}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
        sx={{
          background: checked ? "Black" : hover ? "Black" : "WhiteSmoke",
          p: 1.5,
          borderRadius: 0.2,
          height: "90px",
          cursor: "pointer",
          color: checked ? "WhiteSmoke" : hover ? "WhiteSmoke" : "Gray",
        }}
      >
        <Typography variant='body1'>{content}</Typography>
        <Typography variant='subtitle2'>{at}</Typography>
        {more && (
          <Typography
            variant='subtitle2'
            onClick={handleClickOpen}
            textAlign='right'
            sx={{ color: checked ? "Violet" : hover ? "Violet" : "Gray" }}
          >
            &#8594;
          </Typography>
        )}
        {link && (
          <Typography
            variant='subtitle2'
            onClick={handleClickOpen}
            textAlign='right'
          >
            <Link
              href={link}
              target='_blank'
              sx={{
                color: checked ? "Violet" : hover ? "Violet" : "Gray",
                textDecoration: "none",
              }}
            >
              <a>&#8618;</a>
            </Link>
          </Typography>
        )}
      </Box>
      {img && <MuiDialog open={open} onClose={handleClose} img={img} />}
    </Grid>
  );
};

const MuiBio: VFC<{}> = () => {
  return (
    <>
      <Head>
        <title>Mui Bio</title>
      </Head>
      <Box sx={{ background: "#FFF", minHeight: "100vh" }}>
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
              <MuiGridCard
                content='Product Vision Workshops'
                at='BLDR'
                more
                img={ProductImg}
              />
              <MuiGridCard
                content='Product Vision Board'
                at='BLDR'
                link='https://app.mural.co/t/boldare5080/m/boldare5080/1615489677321/64766019f0a71227f0969a82e0405898c74b473f?sender=u7e28721fe050cf1ec28f1278'
              />
              <MuiGridCard
                content='Business Vision Canvas'
                at='BLDR'
                more
                img={BCanvas}
              />
              <MuiGridCard
                content='Target Personas'
                at='BLDR'
                more
                img={Personas}
              />
              <MuiGridCard
                content='Empathy Map'
                at='BLDR'
                more
                img={EmpathyMap}
              />
              <MuiGridCard content='User Journeys' at='BLDR' />
              <MuiGridCard
                content='User Story Mapping'
                at='BLDR'
                more
                img={USM}
              />
              <MuiGridCard
                content='Business Development'
                at='Pasieka'
                more
                img={FINanse}
              />
              <MuiGridCard
                content='Business Development'
                at='The Codeine'
                more
                img={CodeinePricing}
              />
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
              <MuiGridCard
                content='Creative & Art Director'
                at='The Codeine'
                link='http://thecodeine.com'
              />
              <MuiGridCard
                content='Art Director'
                at='SHU'
                link='https://lotysz.com/'
              />
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
              <MuiGridCard
                content='Squarespace'
                at='BLDR'
                link='https://www.newnormalworks.com/'
              />
              <MuiGridCard content='Webflow' at='BLDR' />
              <MuiGridCard content='Figma' at='BLDR' />
              <MuiGridCard content='Sketch' at='BLDR' />
              <MuiGridCard content='Zeplin' at='BLDR' />
              <MuiGridCard content='UXPin' at='The Codeine' />
              <MuiGridCard
                content='Framer'
                at='BLDR'
                link='https://www.framer.com/sites/'
              />
              <MuiGridCard content='React' at='BLDR' />
              <MuiGridCard
                content='Persona'
                at='Personal'
                link='https://lotysz.com/'
              />
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
              <MuiGridCard
                content='FCPD'
                at='BLDR'
                link='https://www.boldare.com/services/full-cycle-product-development/'
              />
              <MuiGridCard content='Lean Startup' at='BLDR' />
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
              <MuiGridCard content='Frontend Designer' at='BLDR' />
              <MuiGridCard content='Balsamiq' at='BLDR' />
              {/* <MuiGridCard content='Figma Prototypes' at='Personal' />
              <MuiGridCard content='Sketch Prototypes' at='BLDR' />
              <MuiGridCard content='Mobile Prototypes' at='The Codeine' /> */}
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
              <MuiGridCard
                content='Prisma DS'
                at='BLDR'
                link='https://storybook.service.prisma-capacity.cloud/'
              />
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
              <MuiGridCard
                content='Creative Direction'
                at='The Codeine'
                link='https://www.linkedin.com/posts/%C5%82otysz_polecam-graphicdesign-activity-6592888889571106817-46PN?utm_source=linkedin_share&utm_medium=member_desktop_web'
              />
              <MuiGridCard
                content='HFTH'
                at='Personal'
                link='https://files.slack.com/files-pri/T028UR9ME-F02SQJJKUKE/hfth-printeine-11.jpg'
              />
            </Grid>
            <Typography variant='h1' sx={{ pt: 4 }}>
              2.
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "75%" }}>
              You helped me with bringing more designers.
            </Typography>
            <Grid container spacing={1} sx={{ pt: 2 }}>
              <MuiGridCard content='Chapter Designers' at='BLDR' />
              <MuiGridCard content='Designers' at='The Codeine' />
              <MuiGridCard content='Hire Me' at='The Codeine' />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MuiBio;
