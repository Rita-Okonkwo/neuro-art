import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Hero from "../../components/Hero";
import { CssBaseline } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import barco from "../../static/Imagenbarco.jpg"
import styledBarco from "../../static/result_Imagenbarco.jpg"
import monet from "../../static/monet.jpg"

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  howItWorks: {
    background: "#bbdefb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "200px",
  },
  h3: {
    marginTop: theme.spacing(3),
  },
  card: {
    margin: theme.spacing(2),
  },
  media: {
    height: 180,
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <>
      <Hero />
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12}>
            <Typography variant={"h3"} className={classes.h3}>
              How it works
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  // image="../../static/Imagenbarco.jpg"
                  image={monet}
                  title="Monet Painting"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    1.Pick a style
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Select among some of the most famous artists around the
                    world. Their style will be transfered.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={"/showcase"}
                >
                  Showcase
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  // image="../../static/Imagenbarco.jpg"
                  image={barco}
                  title="Ciudad del Carmen, Campeche, MX."
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    2. Upload your picture
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Our Machine Learning model will transfer the artist style to
                    your picture.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={"/about"}
                >
                  About
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  // image="../../static/Imagenbarco.jpg"
                  image={styledBarco}
                  title="Styled Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    3. You're an artist!
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    It might take a couple of minutes, because #GPU but... hey,
                    It looks like an actual classical painting.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={"/canvas"}
                >
                  TRY NOW
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
