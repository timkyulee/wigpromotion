import React, { useState } from 'react';
import { AppBar, Button, Menu, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useMediaQuery, useTheme, makeStyles, Paper, Link, MenuItem } from '@material-ui/core';
import DrawerCom from './DrawerCom';
import { Image } from 'next/image';
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
  fontFamily: 'arial',
  color: '#3a3a3a'
},
title2: {
  fontSize: '14px',
  color: '#3a3a3a',
  textAlign: 'center',
  margin:'0'
},
title3: {
  fontSize: '20px',
  color: '#3a3a3a'
},
title4: {
  fontSize: '15px',
  color: '#3a3a3a',
  textAlign: 'center',
  margin:'0'
},
tabsletter: {
  fontFamily: 'arial',
  fontSize: '1rem',
  marginTop: '10px'
}
});

export default function Navbar2({children}) {
  const cla = useStyle();
 
 const theme = useTheme();
 const isMatch = useMediaQuery(theme.breakpoints.down('md')); 
  return (
  
    <Paper sx={{ flexGrow: 1}} >
      <AppBar style={{ background:'#fff', opacity:'0.95'}} >
        <Toolbar>       
        
{isMatch ?  <> <img src='https://sopranohair.com/wig/DESTINYLOGO.png' width={210} height={30} alt='destinylog'/>
  <DrawerCom /> </>: (
<>
<img src='https://sopranohair.com/wig/DESTINYLOGO-B.png' width={324} height={47} alt='destinylog-b'/>
<div className={cla.menu}>
  <Stack direction='row' spacing={2}>
    <Button variant='contained' color='secondary' href="/brazilianwwlwig" >Brazilian Wet n Wavy</Button>
    <Button variant='contained' color='secondary' href="/brazilianlacewig" >Brazilian Lace Wig</Button>
    <Button variant='contained' color='secondary' href="/brazilianwig" >Brazilian Wig</Button>
    <Button variant='contained' color='secondary' href="/lacewig" >Lace Wig</Button>
    <Button variant='contained' color='secondary' href="/humanwig" >Human Hair Wig</Button>
    <Button variant='contained' color='secondary' href="/greenwig" >Green Wig</Button>
    <Button variant='contained' color='secondary' href="/wig" >Wig</Button>
    <Button variant='contained' color='secondary' href="/popngo" >Pop n Go</Button>
    <Button variant='contained' color='secondary' href="/drawstring" >Draw String</Button>
    <Button variant='contained' color='secondary' href="/dome" >Dome</Button>
  
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