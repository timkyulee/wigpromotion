import React, { useState } from 'react';
import { AppBar, Button, Menu, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useMediaQuery, useTheme, makeStyles, Paper, Link, MenuItem } from '@material-ui/core';
import DrawerCom from './DrawerCom';
import { Image } from 'next/image';
import { Box, color, height, typography } from '@mui/system';


const useStyle = makeStyles({

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
  backgroundColor: '#7e7d7b',
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
      <AppBar style={{ background:'#424242', opacity:'0.92'}} >
        <Toolbar>       
        
{isMatch ?  < > <div>
  <a href='https://destinywig.info' className={cla.logosmall}>DESTINY Wig</a>
<p className={cla.sublogosmall}>PROMOTION, OCT 18-29 </p></div>
<DrawerCom />
   </>  : (
<><div className={cla.logopart}>
<a href='https://destinywig.info' className={cla.logo}>DESTINY Wig</a>
<p className={cla.sublogo}>PROMOTION, OCT 18-29 </p>
</div>
<div className={cla.menu}>
  <Stack direction='row' spacing={2}>
  <button className={cla.button} ><Link href="/brazilianwwlwig" className={cla.link}>Brazilian Wet n Wavy</Link></button>
    <button className={cla.button} ><Link  href="/brazilianlacewig" className={cla.link}>Brazilian Lace Wig</Link></button>
    <button  className={cla.button}><Link href="/brazilianwig" className={cla.link}>Brazilian Wig</Link></button>
    <button  className={cla.button}><Link href="/lacewig" className={cla.link}>Lace Wig</Link></button>
    <button  className={cla.button}><Link href="/humanwig" className={cla.link}>Human Hair Wig</Link></button>
    <button  className={cla.button}><Link href="/greenwig" className={cla.link}>Green Wig</Link></button>
    <button  className={cla.button}><Link href="/wig" className={cla.link}>Wig</Link></button>
    <button  className={cla.button}><Link href="/popngo"className={cla.link}>Pop n Go</Link></button>
    <button  className={cla.button}><Link href="/drawstring" className={cla.link}>Draw String</Link></button>
    <button  className={cla.button}><Link href="/dome" className={cla.link}>Dome</Link></button>
    <button  className={cla.button}><Link href="/rule" className={cla.link}>RULE</Link></button>
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