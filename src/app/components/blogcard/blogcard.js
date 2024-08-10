import React from 'react';
import Link from 'next/link';
import { Grid, Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

export default function Blogcard() {
  const cards = [
    // Add your blog card data here
    {
      title: 'Blog Post 1',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 1.',
      author: 'Author 1',
      link: '/blog',
    },
    {
      title: 'Blog Post 2',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 2.',
      author: 'Author 2',
      link: '/blog',
    },
    {
      title: 'Blog Post 3',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 3.',
      author: 'Author 3',
      link: '/blog',
    },
    {
      title: 'Blog Post 4',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 4.',
      author: 'Author 4',
      link: '/blog',
    },{
      title: 'Blog Post 1',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 1.',
      author: 'Author 1',
      link: '/blog',
    },
    {
      title: 'Blog Post 2',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 2.',
      author: 'Author 2',
      link: '/blog',
    },
    {
      title: 'Blog Post 3',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 3.',
      author: 'Author 3',
      link: '/blog',
    },
    {
      title: 'Blog Post 4',
      image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
      description: 'This is a description for Blog Post 4.',
      author: 'Author 4',
      link: '/blog',
    },
  ];

  return (
    <main className="p-6 sm:p-12 md:p-24">
      <div className="container mx-auto" id='blog'>
        {/* Title Section */}
        <div className="mb-8 md:mb-12">
          <Typography variant="h4" component="h2" className="text-3xl md:text-4xl font-bold text-gray-400">
            Latest Blogs
          </Typography>
          <div className="border-b-2 border-gray-400 w-20 md:w-24 mt-2" />
        </div>

        {/* Blog Cards */}
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className='rounded-2xl bg-neutral-950 shadow-white'>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt={card.title}
                  className="object-cover"
                />
                <CardContent className='bg-neutral-950 '>
                  <Typography variant="h6" component="div" className='text-white'>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" className='text-white mt-2'>
                    {card.description}
                  </Typography>
                  <Typography variant="body2" className='text-gray-400 mt-2'>
                    <strong>Author:</strong> {card.author}
                  </Typography>
                </CardContent>
                <CardActions className='bg-neutral-950 text-white mt-1 mb-3 ml-2'>
                  <Link href={card.link} passHref>
                    <Button 
                      variant="contained" 
                      className="bg-transparent hover:bg-transparent font-semibold hover:text-sm transition-all duration-300 ease-in-out"
                      size="small" 
                      endIcon={<EastIcon />}
                    >
                      Read More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}
