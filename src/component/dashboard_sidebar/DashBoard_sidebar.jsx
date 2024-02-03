import React, { useState } from "react";
import "./DashBoard_sidebar.css";
import { Drawer, Box, Typography, IconButton, MenuItem } from "@mui/material";
import user_icon from "../assessts/images/th.jpg";

import MenuIcon from "@mui/icons-material/Menu";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import AutoModeIcon from "@mui/icons-material/AutoMode";


export default function DashBoard() {
  const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem active={selected === title} onClick={() => setSelected(title)}>
        {icon}
        <Typography>{title}</Typography>
        <link to= {to} />
      </MenuItem>
    );
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selected, setSelected] = useState("dashBoard");

  return (
    <>
      <div className="root">
        <div className="drawer">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box role="presentation" p={2} width="400px" textAlign="center">
              <Typography variant="h6" component="div">
                My Account
              </Typography>
              <div className="underline-drawer"></div>
            </Box>
            {/* USER */}
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={user_icon}
                  alt=""
                  width="100px"
                  height="100px"
                  borderRadius="50%"
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h5" color="red" fontWeight="bold">
                  {" "}
                  Gaurav singh Rawat{" "}
                </Typography>

                <Typography variant="h6" color="">
                  {" "}
                  student{" "}
                </Typography>
              </Box>
            </Box>

            {/* MENU ITEM */}
            <div className="menu">
              <div className="box1">
                <Box paddingLeft="10%">
                  <Item
                    title="Announcement"
                    to="/Announcement"
                    icon={<CampaignIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Box>
              </div>
              <div className="box2">
                <Box paddingLeft="10%">
                  <Item
                    title="Student Documents"
                    to="/Document"
                    icon={<ArticleIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Box>
              </div>
              <div className="box3">
                <Box paddingLeft="10%">
                  <Item
                    title="Student Profile"
                    to="/MyProfile"
                    icon={<PersonIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Box>
              </div>
              <div className="box4">
                <Box paddingLeft="10%">
                  <Item
                    title="Old Question Paper"
                    to="/QuestionPaper"                   
                    icon={<FolderSharedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Box>
              </div>
              <div className="box5">
                <Box paddingLeft="10%">
                  <Item
                    title="Gpa calculator"
                    to="/Gpa"
                    icon={<AutoModeIcon />}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Box>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}
