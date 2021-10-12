import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { IconButton, ListItemButton } from '@mui/material';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';




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
        color: '#3a3a3a'
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
            type: 'dark',
            color: 'white'
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
                <ListItem divider button component='a' href='./brazilianwwlwig'>
                    <ListItemIcon>
                        <ListItemText >
                            Brazilian Wet n Wavy
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button component='a' href='./brazilianlacewig'>
                    <ListItemIcon>
                        <ListItemText>
                            Brazilian Lace Wig
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button component='a' href='./brazilianwig'>
                    <ListItemIcon>
                        <ListItemText>
                            Brazilian Wig
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button component='a' href='./lacewig'>
                    <ListItemIcon>
                        <ListItemText>
                            Lace Wig
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button component='a' href='./humanwig'>
                    <ListItemIcon>
                        <ListItemText>
                            Human Hair Wig
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button component='a' href='./greenwig'>
                    <ListItemIcon>
                        <ListItemText>
                            Green Wig
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button component='a' href='./wig'>
                    <ListItemIcon>
                        <ListItemText>
                           Wig
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button component='a' href='./popngo'>
                    <ListItemIcon>
                        <ListItemText>
                            Pop n Go
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button component='a' href='./drawstring'>
                    <ListItemIcon>
                        <ListItemText>
                           Draw String
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>   
                <ListItem divider button component='a' href='./dome'>
                    <ListItemIcon>
                        <ListItemText>
                            DOME
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
