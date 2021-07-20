import React from "react";
import {
    Typography, 
    Card, 
    CardActionArea, 
    Avatar, 
    CardMedia, 
    CardContent, 
    CardActions,
    Button } from "@material-ui/core";
import moment from "moment"
import { AiFillDelete, AiFillHeart } from 'react-icons/ai';
import styles from '../styles/Feed.module.css';

export default function Feed() {

  return (
    <div>
      <div className={styles.center}>
        <Card className={styles.root}>
          <CardActionArea>
            <CardMedia
              className={styles.media}
              image="https://res.cloudinary.com/practicaldev/image/fetch/s--yu7IJWqw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/y25pmk3wa67d3m7m5eu3.png"
              title="devops lover"
            />
            <CardContent style={{paddingBottom: "0"}}>
              <div className={styles.row}>
                <Avatar sizes="small"/>
                <Typography
                  style={{ marginLeft: "5px", marginTop: "0px" }}
                  gutterBottom
                >
                DevOps
                </Typography>
              </div>
              
              <Typography variant="body2"> {moment('2021-07-19 00:23:43.165809').fromNow()}  </Typography>
                  
              <Typography variant="h5" color="primary" component="h5" >
               DevOps
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary"><AiFillHeart fontSize="small" /> Like 1 </Button>
            <div className={styles.right}>
                <AiFillDelete/>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
