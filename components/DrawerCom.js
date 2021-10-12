import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { height } from '@mui/system';



const useStyles = makeStyles({
    menuIconContainer: {
        marginLeft: '10px', 
        fontSize: 'medium',
       
    },
    iconButtonContainer: {
        marginLeft: 'auto',
        height: '800px'
      },
  
      menuIconToggle: {
        fontSize: '3rem',
        color: '#fff'
      },
      menuIconContainer: {
          marginLeft: '25px'
      },
     menu: {
         color: '#fff'
      },
    })

function DrawerCom() {
    const [openDrawer, setOpenDrawer] =  useState(false)
    const cla = useStyles();
    const theme = createMuiTheme({
        palette: {
            type: 'dark'
        }
    })
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Paper>
            <Drawer
            open={openDrawer}
            onClose={()=> setOpenDrawer(false)}
            anchor='left'
            className={cla.drawerContainer}
            >            <List>
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./brazilianwwlwig'} underline='none'>Brazilian Wet n Wavy</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./brazilianlacewig'} color='#fff'>Brazilian Lace Wig</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./brazilianwig'}>Brazilian Wig</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./lacewig'}>Lace Wig</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./humanwig'}>Human Hair Wig</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./greenwig'}>Green Wig</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./wig'}>Wig</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./popngo'}>Pop n Go</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./drawstring'}>Draw String</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button>
                    <ListItemIcon>
                        <ListItemText>
                            <Link href={'./dome'}>DOME</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
            </List>  
            </Drawer>
            </Paper>
            </ThemeProvider>
            <IconButton onClick={setOpenDrawer} className={cla.menuIconContainer}>
                <MenuIcon className={cla.menuIconToggle}/>
            </IconButton>
        </div>   
    )
}

export default DrawerCom
