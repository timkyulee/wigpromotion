import React, { useState } from 'react';
import { AppBar, Menu, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useMediaQuery, useTheme, makeStyles, Paper, Link, MenuItem } from '@material-ui/core';
import DrawerCom from './DrawerCom';
import { Box, color } from '@mui/system';


const useStyle = makeStyles({
  tabsletter: {
    marginLeft: '80px',
    fontWeight: 'bolder'
  },
  logo: {
    width: '8 vw'
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
          <img src='https://sopranohair.com/wig/DESTINYLOGO1.png' alt='DESTINYLOGO' className={cla.logo}/>

      {isMatch ? <DrawerCom /> : (
      <>
      <Menu>
        <Link href='/'><MenuItem>Brazilian Wet n Wavy</MenuItem></Link>
        <Link href='/'><MenuItem>Brazilian Lace Wig</MenuItem></Link>
        <Link href='/'><MenuItem>Brazilian Wig</MenuItem></Link>
        <Link href='/'><MenuItem>Lace Wig</MenuItem></Link>
        <Link href='/'><MenuItem>Human Hair Wig</MenuItem></Link>
        <Link href='/'><MenuItem>Green Wig</MenuItem></Link>
        <Link href='/'><MenuItem>Wig</MenuItem></Link>
        <Link href='/'><MenuItem>Pop n Go</MenuItem></Link>
      </Menu>
         {/* <Tabs
            className={cla.tabsletter}
            onChange={handleClickTab} 
            indicatortColor='secondary'
            aria-label="secondary tabs example" 
            value={value}>
           <Link href='/'> <Tab label='Brazilian Wet n Wavy'></Tab></Link>
           <Link href='/'><Tab label='Brazilian Lace Wig'></Tab></Link>
           <Link href='/'><Tab label='Brazilian Wig'></Tab></Link>
           <Link href='/'><Tab label='Lace Wig'></Tab></Link>
           <Link href='/'><Tab label='Human Hair Wig'></Tab></Link>
           <Link href='/'> <Tab label='Green Wig'></Tab></Link>
           <Link href='/'><Tab label='Wig'></Tab></Link>
           <Link href='/'><Tab label='Pop n Go'></Tab></Link>
           <Link href='/'><Tab label='Draw String'></Tab></Link>
           <Link href='/'><Tab label='Dome'></Tab></Link>
          </Tabs> */}
      </>
 )}

        </Toolbar>
      </AppBar>
    </Box>
  
  );
}