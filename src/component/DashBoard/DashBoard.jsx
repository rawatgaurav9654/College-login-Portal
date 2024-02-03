import React from "react";
import Sidebar from "../dashboard_sidebar/DashBoard_sidebar";
import Footer from "../Footer/Footer"
import Header from "../dashboard-topbar/Dashboard_topbar";
import user_icon from "../assessts/images/th.jpg";
import Grid from "@mui/material/Grid";
import {
  Stack,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";

import { Box, Typography, Button } from "@mui/material";

const DashBoard = () => {
  return (
    <>
      <Sidebar />

      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to you Account" />
        </Box>
      </Box>

      <Box>
        <Grid ml={8} mr={8}>
          <Stack spacing={7} direction="row">
            <Grid item xs={4}>
              <Card sx={{ width: 400, height: 400 }}>
                <Typography>My Profile</Typography>
                <CardMedia sx={{ height: 200, width: 200 }} image={user_icon} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gaurav singh Rawat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    CU
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    2002429
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={8}>
              <Card sx={{ width: 900, height: 400 }}>
                <Card sx={{ width: "100%", height: "100%" }}>
                  <Typography>Announcement</Typography>
                  <CardMedia
                    component="iframe"
                    height="100%"
                    controls
                    src="https://ptu.ac.in/"
                  />
                </Card>
              </Card>
            </Grid>
          </Stack>

          {/******************* 2 ROW **************/}


          <Box height={20} />


          <Stack  spacing={2} direction="row" >
          
            <Grid item xs={4} >
              <Card sx={{ width: 440, height: 400 }}>
                <Card sx={{ width: "100%", height: "100%" }}>
                  <Typography>old question paper</Typography>
                  <CardMedia
                    component="iframe"
                    height="100%"
                    controls
                    src="https://ptu.ac.in/"
                  />
                </Card>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ width: 440, height: 400 }}>
                <Card sx={{ width: "100%", height: "100%" }}>
                  <Typography>Document</Typography>
                  <CardMedia
                    component="iframe"
                    height="100%"
                    controls
                    src="https://ptu.ac.in/"
                  />
                </Card>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ width: 440, height: 400 }}>
                <Card sx={{ width: "100%", height: "100%" }}>
                  <Typography>GPA</Typography>
                  <CardMedia
                    component="iframe"
                    height="100%"
                    controls
                    src="https://ptu.ac.in/"
                  />
                </Card>
              </Card>
            </Grid>
          
          </Stack>
          <Box height={20} />
        </Grid>
      </Box>
      <Footer/>
    </>
  );
};

export default DashBoard;
