import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useMediaQuery, useTheme, makeStyles } from '@material-ui/core';
import DrawerCom from './DrawerCom';
import { Box, color } from '@mui/system';

const useStyle = makeStyles({
  tabsletter: {
    marginLeft: '80px',
    fontWeight: 'bolder'
  },
  letter: {
   
  }
 
});

export default function Navbar2() {
  const cla = useStyle();
  const [ value, setValue] = useState(0);

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  }
 const theme = useTheme();
 const isMatch = useMediaQuery(theme.breakpoints.down('md')); 
  return (
    <Box sx={{ flexGrow: 1}} className={cla.boxback}>
      <AppBar className={cla.letter}>
        <Toolbar>
          <img src='https://sopranohair.com/wig/DESTINYLOGO1.png' alt='DESTINYLOGO' />

      {isMatch ? <DrawerCom /> : (
      <>
         <Tabs
            className={cla.tabsletter}
            onChange={handleClickTab} 
            indicatortColor='secondary'
            aria-label="secondary tabs example" 
            value={value}>
            <Tab label='Brazilian Wet n Wavy'></Tab>
            <Tab label='Brazilian Lace Wig'></Tab>
            <Tab label='Brazilian Wig'></Tab>
            <Tab label='Lace Wig'></Tab>  <br/>
            <Tab label='Human Hair Wig'></Tab>
            <Tab label='Green Wig'></Tab>
            <Tab label='Wig'></Tab>
            <Tab label='Pop n Go'></Tab>
            <Tab label='Draw String'></Tab>
            <Tab label='Dome'></Tab>
          </Tabs>
      </>
 )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}