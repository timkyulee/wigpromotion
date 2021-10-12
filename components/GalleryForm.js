import { Card, CardContent, CardHeader, CardActions, Avatar, IconButton, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Image from 'next/dist/client/image';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Carousel, { CarouselItem} from '../comp/Carousel';
import { Box, height } from '@mui/system';
import { Link, stepClasses } from '@mui/material';

<link rel="preconnect" href="https://fonts.googleapis.com"></link>

const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 600,
      },
     
     img: {
        
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '2px',
        objectFit: 'cover',
        height: '800px'
      },
      card: {
          margin: '10px',
          display: 'flex',
          flexDirection: 'column',
          
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
       width: '100px',
       height: '34px',
       objectFit: 'contain',
       marginLeft: '7px'
      },
      title: {
        color: 'red'
      },
      header: {
        backgroundColor: '#424242',
        fontWeight: 'bold'
      },
      headbox: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        height: '35px'
      },
      headletter: {
        
        fontSize: '1rem',
        fontFamily: 'arial',
        marginLeft: 'auto',
        marginTop: '5px',
        fontWeight: 'bolder',
        color: 'white'
      },
      headletter2: {
        fontSize: '0.8rem',
        marginLeft: 'auto',
        marginRight: '10px',
        marginTop: '8px',
        fontWeight: 'bolder',
        color: 'white'
      },
      headsub: {
        color: 'white'
      },
      zoom: {
         transform: 'scale(1.5)',
      },
      
}));

function GalleryForm(props) {
   const cla = useStyles();
 
    return (
        <div>
          <Card className={cla.card}  >
           
          <Box className={cla.headbox}>
          {/* <img src='https://sopranohair.com/wig/DESTINY2.png' alt='t' className={cla.avatar}/> */}
          <Typography className={cla.headletter}>{props.category}</Typography>
          <Typography className={cla.headletter2}>Page {props.page}</Typography>
          </Box>
          <Link href={props.img} target='_blank' >
          <Image src={props.img} alt='tt' width='580px' height='780px'objectFit='contain'/> </Link>
           
          </Card>
        </div>
    )
}

export default GalleryForm
