import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import GalleryForm from './GalleryForm';
import Data from '../data/data.json';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },  
}))


function Gallery1() {
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
                    img1 = {item.image1}
                    img2 = {item.image2}
                    name = {item.title}
                    content = {item.content}  
                />
            ))}
        </Grid> 
        </div>
      
            
       
    )
}

export default Gallery1
