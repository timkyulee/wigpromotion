import { colors, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useState } from 'react';


const useStyles = makeStyles(theme => ({
    menuIconContainer: {
        marginLeft: '500%', 
        colors: 'white',
        fontSize: 'large'
    }
}))

function DrawerCom() {
    const [openDrawer, setOpenDrawer] =  useState(false)
    const cla = useStyles();
    return (
        <div>
            <Drawer
                anchor='leftt'
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <List>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton className={cla.menuIconContainer} onClick={() =>setOpenDrawer(!openDrawer)}>
             <MenuIcon/>
            </IconButton>
        </div>
    )
}

export default DrawerCom
