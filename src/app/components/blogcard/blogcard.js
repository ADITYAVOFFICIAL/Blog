import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

export default function Blogcard() {
  const cards = [
    {
      title: 'Blog Post 1',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 1.',
      author: 'Author 1',
    },
    {
      title: 'Blog Post 2',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 2.',
      author: 'Author 2',
    },
    {
      title: 'Blog Post 3',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 3.',
      author: 'Author 3',
    },
    {
      title: 'Blog Post 4',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 4.',
      author: 'Author 4',
    },{
      title: 'Blog Post 1',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 1.',
      author: 'Author 1',
    },
    {
      title: 'Blog Post 2',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 2.',
      author: 'Author 2',
    },
    {
      title: 'Blog Post 3',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 3.',
      author: 'Author 3',
    },
    {
      title: 'Blog Post 4',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 4.',
      author: 'Author 4',
    },
  ];

  return (
    <main className="p-24">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-12">
          <Typography variant="h4" component="h2" className="text-4xl font-bold text-gray-400">
            Latest Blogs
          </Typography>
          <div className="border-b-2 border-gray-400 w-24 mt-2" />
        </div>

        {/* Blog Cards */}
        <Grid container spacing={5}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className='rounded-2xl bg-neutral-950'>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent className='bg-neutral-950'>
                  <Typography variant="h5" component="div" className='text-white'>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" className='text-white'>
                    {card.description}
                  </Typography>
                  <Typography variant="body2" className='text-gray-400 mt-2'>
                    <strong>Author:</strong> {card.author}
                  </Typography>
                </CardContent>
                <CardActions className='bg-neutral-950 text-white mt-2 mb-4 ml-3'>
                  <Button variant="contained" className="bg-zinc-800 hover:bg-zinc-900" size="medium" endIcon={<EastIcon />}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}
