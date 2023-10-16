import { useTheme } from "@emotion/react";
import { Avatar, Box, Divider, IconButton, Stack, Switch, styled } from "@mui/material";
import React, { useState } from "react";
import { faker } from '@faker-js/faker';
import { Gear } from "phosphor-react";
import { Outlet } from "react-router-dom";


import Logo from "../../assets/Images/logo.ico"
import { Nav_Buttons } from "../../data";
import useSettings from "../../hooks/useSettings";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 20,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(12px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius:8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);
  console.log(theme);

  const {onToggleMode} = useSettings();

  return (
    <>
      <Box
        p={2}    // 2 means 2 * 8 = 16 px
        sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)", height: "100vh", width: 100 }} >
        <Stack direction="column" alignItems={"center"} sx={{ height: "100%" }} spacing={3} justifyContent={"space-between"}>
              {/* Spacing 4 means 4 * 8 = 32px */}
          <Stack alignItems={"center"} spacing={4}>    
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt={"Logo"} />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="center"
              spacing={3}
            >
              {Nav_Buttons.map((e) => (
                e.index === selected ?
                  <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5, }}>
                    <IconButton
                      // onClick={() => {setSelected(e.index)}}
                      sx={{ width: "max-content", color: "#fff" }}
                      key={e.index}
                    >
                      {e.icon}
                    </IconButton>
                  </Box>
                  :
                  <IconButton
                    onClick={() => { setSelected(e.index) }}
                    sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
                    key={e.index}
                  >
                    {e.icon}
                  </IconButton>
              ))}

              <Divider sx={{ width: "48px" }} />
              {
                selected === 3 ?
                  <Box p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}>

                    <IconButton sx={{ width: "max-content", color: "#fff" }}>
                      <Gear size={32} />
                    </IconButton>
                  </Box>
                  :
                  <IconButton onClick={() => setSelected(3)} 
                    sx={{width:"max-content",color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
                  >
                    <Gear size={32} />
                  </IconButton>
              }

            </Stack>
          </Stack>
          <Stack spacing={4}>
              {/* switch */}
              <AntSwitch 
                onChange={() => {
                  onToggleMode();
                }}
              defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>

      <Outlet />
    </>
  );
};

export default DashboardLayout;
