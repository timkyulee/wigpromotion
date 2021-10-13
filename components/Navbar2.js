import React, { useState } from 'react';
import { AppBar, Button, Menu, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useMediaQuery, useTheme, makeStyles, Paper, Link, MenuItem } from '@material-ui/core';
import DrawerCom from './DrawerCom';
import { Image } from 'next/image';
import { Box, color, height, typography } from '@mui/system';


const useStyle = makeStyles({
menu: {
  
  
}, 
menuitem: {
  marginLeft: '35px'
},
boxback: {
  backgroundColor: '#ccc'
},
tabsletter: {
  fontFamily: 'arial',
  fontSize: '1rem',
  marginTop: '10px'
},
logo: {
  fontSize: '30px',
  fontFamily: 'arial',
  color: '#fff',
  marginRight: '15px',
  textDecoration: 'none'
},
logopart: {
  display: 'flex',
  flexDirection: 'column'
},
sublogo: {
  margin: '0',
  color: '#fff',
  fontWeight: 'bold'
},
logosmall: {
  fontSize: '28px',
  fontFamily: 'arial',
  color: '#fff',
  marginRight: '15px',
  textDecoration: 'none'
},
sublogosmall: {
  fontSize: '15px',
  margin: '0',
  color: '#fff',
  fontWeight: 'bold'
},
button: {
  backgroundColor: '#7e7d7b', /* Green */
  border: 'none',
  color: 'white',
  padding: '15px ',
  textalign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  height: '30px',
  padding: '7px 20px',
 borderRadius: '10px'
},
link: {
  textDecoration: 'none',
  color: 'white',
}
});

export default function Navbar2({children}) {
  
 
  const cla = useStyle();
 const theme = useTheme();
 const isMatch = useMediaQuery(theme.breakpoints.down('md')); 
  return (
  
    <Paper sx={{ flexGrow: 1}} >
      <AppBar style={{ background:'#424242', opacity:'0.95'}} >
        <Toolbar>       
        
{isMatch ?  < > <div>
  <a href='destinywig.info' className={cla.logosmall}>DESTINY Wig</a>
<p className={cla.sublogosmall}>PROMOTION, OCT 18-29 </p></div>
<DrawerCom />
   </>  : (
<><div className={cla.logopart}>
<a href='' className={cla.logo}>DESTINY Wig</a>
<p className={cla.sublogo}>PROMOTION, OCT 18-29 </p>
</div>
<div className={cla.menu}>
  <Stack direction='row' spacing={2}>
  <button className={cla.button} ><a href="/brazilianwwlwig" className={cla.link}>Brazilian Wet n Wavy</a></button>
    <button className={cla.button} ><a  href="/brazilianlacewig" className={cla.link}>Brazilian Lace Wig</a></button>
    <button  className={cla.button}><a href="/brazilianwig" className={cla.link}>Brazilian Wig</a></button>
    <button  className={cla.button}><a href="/lacewig" className={cla.link}>Lace Wig</a></button>
    <button  className={cla.button}><a href="/humanwig" className={cla.link}>Human Hair Wig</a></button>
    <button  className={cla.button}><a href="/greenwig" className={cla.link}>Green Wig</a></button>
    <button  className={cla.button}><a href="/wig" className={cla.link}>Wig</a></button>
    <button  className={cla.button}><a href="/popngo"className={cla.link}>Pop n Go</a></button>
    <button  className={cla.button}><a href="/drawstring" className={cla.link}>Draw String</a></button>
    <button  className={cla.button}><a href="/dome" className={cla.link}>Dome</a></button>
  </Stack>
{children}
</div>
</>
)}

        </Toolbar>
      </AppBar>
    </Paper>
  
  );
}