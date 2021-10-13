import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import GalleryForm from '../components/GalleryForm';
import Data from '../data/cover.json';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },  
}))


function Crule() {
    const cla = useStyles();
    return (
  
    <div>
         <Grid className={cla.root}>
            {Data.map(item => (
                <GalleryForm  
                    Photo
                    key = {item.id}
                    page = {item.id}
                    category = {item.category}
                    img = {item.Image} 
                />
            ))}
        </Grid> 
     </div>
    )
}

export default Crule;
