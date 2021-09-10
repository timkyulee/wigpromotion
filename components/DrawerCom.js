import { colors, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';


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
                            <Link href="./braid"><a><ListItemText>BRAID </ListItemText></a></Link>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <Link href="./weaving"><a><ListItemText>WEAVE</ListItemText></a></Link>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <Link href="./fantasy" ><a><ListItemText>FANTASY</ListItemText></a></Link>
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
