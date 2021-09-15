import { Card, CardContent, CardHeader, CardActions, Avatar, IconButton, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Image from 'next/dist/client/image';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Carousel, { CarouselItem} from '../comp/Carousel';



const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 400,
      },
      media: {
        height: '440px',
        width: '300px',
        display: 'flex'
      },
     img: {
        
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '2px',
        objectFit: 'cover'
      
      },
      card: {
          margin: '12px',
          height: '640px'
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
       height: '43px',
     
      },
      title: {
        color: 'red'
      }
}));

function GalleryForm(props) {
   const cla = useStyles();
 
    return (
        <div>
          <Card className={cla.card}  >
              <CardHeader
               avatar={
                   <Avatar aria-label='coutry' variant={'rounded'}  className={cla.avatar} src='https://sopranohair.com/gallery2/3xGhanalogo.png'>
                      P
                   </Avatar>
               }
                subheader={props.category}
                title={props.country}
              >
              </CardHeader>
              <div className={cla.media}>
              <Carousel>
              {props.img.map((pic) =>(
               
                 <CarouselItem key={props.key}><Image src={pic.Links} className={cla.img} width='300px' height='420px' alt={pic.Links}/></CarouselItem>
               
              ))}
                </Carousel>
            </div>
              <CardContent className={cla.content}>
                <Typography variant="h6">{props.name}</Typography>
                <Typography variant="h7">{props.content}</Typography>
                <p><InstagramIcon/> <FacebookIcon/></p>
              </CardContent>
              <CardActions>

              </CardActions>
          </Card>
        </div>
    )
}

export default GalleryForm
