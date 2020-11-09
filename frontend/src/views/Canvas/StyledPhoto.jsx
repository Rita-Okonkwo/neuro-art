import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Box from "@material-ui/core/Box";
function StyledPhoto({handleRatingChange}) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper>
          <img
            // style={{ display: "none" }}
            src={
              "https://www.latercera.com/resizer/kHLHjR6u3jIRC7-xl_1oXBzxWUE=/800x0/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/MEP3EKODIVGKPDXNMGNLB6ZN3A.jpg"
            }
            alt={"Monet"}
          />
        </Paper>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="rating"
            defaultValue={2}
            precision={1}
            onChange={handleRatingChange}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default StyledPhoto;