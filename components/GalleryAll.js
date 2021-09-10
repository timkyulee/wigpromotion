import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import GalleryForm from './GalleryForm';
import Data from '../data/galleryData.json';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },  
}))


function GalleryAll() {
    const cla = useStyles();
    return (
  
    <div>
         <Grid className={cla.root}>
            {Data.map(item => (
                <GalleryForm  
                    Photo
                    key = {item.id}
                    category = {item.category}
                    country = {item.country}
                    img = {item.Image} 
                    name = {item.name}
                />
            ))}
        </Grid> 
     </div>
    )
}

export default GalleryAll
