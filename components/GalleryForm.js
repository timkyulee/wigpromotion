import { Card, CardContent, CardHeader, CardActions, Avatar, IconButton, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Link } from '@material-ui/core';
import Image from 'next/dist/client/image';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Caroucel from './Caroucel';



const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 345,
      },
      media: {
        height: '300px',
        width: '400px',
        display: 'flex'
       
      },
      media2: {
        height: '300px',
        width: '200px',
       
      },
      card: {
          margin: '12px'
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: 'red',
      },
}));

function GalleryForm(props) {
   const cla = useStyles();
 
    return (
        <div>
          <Card className={cla.card}>
              <CardHeader
               avatar={
                   <Avatar aria-label='coutry' className={cla.avatar}>
                      C
                   </Avatar>
               }
                subheader={props.country}
                title={props.category}
               
              >
              </CardHeader>
              <div className={cla.media}>
               
             <Caroucel />
             
            </div>
              <CardContent>
                <p>{props.name}</p>
              
                <p>{props.content}</p>
              
                
                <p><InstagramIcon/> <FacebookIcon/></p>
              </CardContent>
              <CardActions>

              </CardActions>
          </Card>
        </div>
    )
}

export default GalleryForm
