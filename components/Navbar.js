import React from 'react';
import { useTheme, Menu, Button, useMediaQuery, menuList, makeStyles, menuItem, AppBar, Toolbar, Typography, Box, Tabs, Tab } from '@material-ui/core';
import DrawerCom from './DrawerCom';
import { useState } from 'react';
import Link from 'next/link';
const useStyles = makeStyles(theme => ({
    icons:{
        fontSize: '1.4rem',
    },
    iconLogo: {
        color: 'yellow',
        fontSize: '3rem'
    },
    accountButton: {
        margin: 'auto',
        '&:hover': {
            background: 'green'
        },
    },
    tabposition: {
      marginLeft: '600px'
        
    }
}));

    

function Navbar() {
    const cla = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(0);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleClickTab = (e, newValue) => {
        setValue(newValue);
    }
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div>
            <AppBar color='tranparent'>
                <Toolbar>
                    <Typography>
                        Beauty Elements
                    </Typography>
                    {isMatch ? <DrawerCom />:
                      <div>
                      <Tabs
                      indicatorColor="primary"
                      textColor="primary"
                      className={cla.tabposition}
                      centered
                    >
                     <Link href="/braid"><a> <Tab label="BRAID STYLE" /></a></Link>
                     <Link href="/weaving"><a><Tab label="WEAVE STYLE" /></a></Link>
                     <Link href="/fantasy"><a><Tab label="FANTASY STYLE" /></a></Link>
                    </Tabs>
                    </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
