import React, { useState } from 'react';
import { AppBar, Menu, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useMediaQuery, useTheme, makeStyles, Paper, Link, MenuItem } from '@material-ui/core';
import DrawerCom from './DrawerCom';
import { Box, color, typography } from '@mui/system';


const useStyle = makeStyles({
menu: {
  color: '#fff',
  fontSize: '20px',
  marginLeft: '5px',
  marginTop: '8px'
}, 
menuitem: {
  marginLeft: '35px'
},
boxback: {
  backgroundColor: '#ccc'
},
title: {
  fontSize: '25px',
  color: '#fff'
},
title2: {
  fontSize: '15px',
  color: '#fff',
  textAlign: 'center',
  margin:'0'
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
  
    <Paper sx={{ flexGrow: 1}} style={{background: '#ccc'}}>
      <AppBar style={{ background: '#2E3B55' }} >
        <Toolbar>
        {/* <img src='https://sopranohair.com/wig/DESTINYLOGO1.png' alt='DESTINYLOGO' srcSet=''/> */}
        <Box>
        <Typography className={cla.title} >Destiny Wig Promotion </Typography>
        <Typography className={cla.title2}>Beauty Elements(Oct 18 - 29 2021) </Typography>
        </Box>
{isMatch ? <DrawerCom /> : (
<>
<div className={cla.menu}>
<Tabs
      className={cla.tabsletter}
      onChange={handleClickTab} 
      indicatortColor='secondary'
      aria-label="secondary tabs example" 
      value={value}>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Brazilian Wet n Wavy</a></tab>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Brazilian Lace Wig</a></tab>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Brazilian Wig</a></tab>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Lace Wig</a></tab>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Human Hair Wig</a></tab>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Green Wig</a></tab>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Wig</a></tab>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Pop n Go</a></tab>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Draw String</a></tab>
<tab label='Brazilian Wet n Wavy'><a href="#" className={cla.menuitem}>Dome</a></tab>


</Tabs>
</div>
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
    </Paper>
  
  );
}