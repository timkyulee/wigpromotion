import { Card, CardContent, CardHeader, CardActions, Avatar, IconButton, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Image from 'next/dist/client/image';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Carousel, { CarouselItem} from '../comp/Carousel';
import { Box, height } from '@mui/system';
import { Link, stepClasses } from '@mui/material';



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
          height: '800px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFF'
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
        backgroundColor: '#e1d9d9',
        fontWeight: 'bold'
      },
      headbox: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        height: '35px'
      },
      headletter: {
        
        fontSize: '1.3rem',
        marginLeft: '25px',
        marginTop: '5px',
        fontWeight: 'bolder',
        color: 'white'
      },
      headletter2: {
        fontSize: '1rem',
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
              {/* <CardHeader
               avatar={
                   <Avatar aria-label='coutry' variant={'rounded'}  className={cla.avatar} src='https://sopranohair.com/wig/DESTINY.png'>
                      P
                   </Avatar>
               }
                title='Brazilian Wet & Wavy Full Lace Wig'
               className={cla.header}
            
              >
              </CardHeader> */}
              {/* <CardMedia
                  component="img"
                  height="770px"
                  image="https://sopranohair.com/wig/13-1.jpg"
                  alt="green iguana"
                  className={cla.img}
                /> */}
          <Box className={cla.headbox}>
          <img src='https://sopranohair.com/wig/DESTINY.png' alt='t' className={cla.avatar}/>
          <Typography className={cla.headletter}>Brazilian Wet and Wavy Lace Wig</Typography>
          <Typography className={cla.headletter2}>Page 25</Typography>
          </Box>
          <Link href='https://sopranohair.com/wig/13-1.jpg' target='_blank' >
          <Image src='https://sopranohair.com/wig/13-1.jpg' alt='tt' width='580px' height='780px'objectFit='contain'/> </Link>
           
          </Card>
        </div>
    )
}

export default GalleryForm
