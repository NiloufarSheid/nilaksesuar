
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function Cards() {
  // Data for six cards
  const cardData = [
    {
      image:"images/contemplative-reptile.jpg" ,
      title: 'Lizard 1',
      text: 'Lizard 1: Lizards are a widespread group of squamate reptiles, with over 6,000 species.',
    },
    {
      image: "images/kargadan.jpeg",
      title: 'Lizard 2',
      text: 'Lizard 2: Known for its vibrant colors and unique habitat.',
    },
    {
      image: '/static/images/cards/contemplative-reptile.jpg',
      title: 'Lizard 3',
      text: 'Lizard 3: Discover the fascinating behavior of these reptiles.',
    },
    {
      image: '/static/images/cards/contemplative-reptile.jpg',
      title: 'Lizard 4',
      text: 'Lizard 4: Adapted to a variety of climates and terrains.',
    },
    {
      image: '/static/images/cards/contemplative-reptile.jpg',
      title: 'Lizard 5',
      text: 'Lizard 5: Exhibiting remarkable agility and speed.',
    },
    {
      image: '/static/images/cards/contemplative-reptile.jpg',
      title: 'Lizard 6',
      text: 'Lizard 6: Known for their unique defense mechanisms and camouflage.',
    },
  ];
  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={`Image for ${card.title}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.text}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}