import React from 'react';
import { useTheme, Menu, Button, useMediaQuery, menuList, makeStyles, menuItem, AppBar, Toolbar, Typography, Box, Tabs, Tab } from '@material-ui/core';
import DrawerCom from './DrawerCom';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';
import nav from './Navbar.module.css'


function Navbar() {
  
    return (
        <div>
            <AppBar color='tranparent'>
                <Toolbar>
                  
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
