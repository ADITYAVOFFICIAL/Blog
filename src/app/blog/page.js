"use client";
import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Chip, Divider, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Using a heart icon for claps
import LoadingSkeleton from './loading'; // Import the skeleton component

export default function BlogPage() {
  const [loading, setLoading] = useState(true);
  const [claps, setClaps] = useState(0); // State to track the number of claps

  const blogData = {
    coverImage: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
    title: 'The Art of Writing Clean Code',
    author: 'Jane Doe',
    date: 'August 10, 2024',
    lastEdited: 'August 12, 2024',
    topic: 'Programming',
    content: `
      Writing clean code is a skill that can take years to master. It requires not only knowledge of the programming language but also an understanding of good design principles, the ability to communicate with other developers, and a strong attention to detail. In this blog post, we'll cover key practices and examples to help you write cleaner, more maintainable code.
    `,
    codeSnippet: `
      // Example of a clean function
      function add(a, b) {
        return a + b;
      }
    `,
    additionalImage: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png',
    moreContent: `
      Code review is an essential part of the development process. It helps to ensure that code quality remains high and that best practices are followed. Engaging in regular code reviews and being open to feedback can significantly improve the quality of your code and your skills as a developer.
    `
  };

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate a 1.5-second load time

    return () => clearTimeout(timer);
  }, []);

  const handleClap = () => {
    setClaps(claps + 1); // Increment the clap count
  };

  if (loading) {
    return <LoadingSkeleton />; // Render the skeleton while loading
  }

  return (
    <Container className="mx-auto my-12 p-8 bg-neutral-950 rounded-3xl">
      {/* Cover Image */}
      <Card className="mb-8 rounded-3xl overflow-hidden">
        <CardMedia
          component="img"
          image={blogData.coverImage}
          alt={blogData.title}
          className="h-96 object-cover"
        />
      </Card>

      {/* Blog Content */}
      <div className="text-white">
        {/* Title */}
        <Typography variant="h2" component="h1" className="text-5xl font-bold mb-4">
          {blogData.title}
        </Typography>

        {/* Author, Date, Last Edited */}
        <div className="mb-6">
          <Typography variant="body1" className="text-gray-400">
            By <strong>{blogData.author}</strong> | Published on {blogData.date}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            Last edited on {blogData.lastEdited}
          </Typography>
        </div>

        {/* Topic */}
        <div className="mb-8">
          <Chip label={blogData.topic} className="bg-zinc-800 text-white" />
        </div>

        {/* Content */}
        <Card className="bg-neutral-900 p-6 rounded-3xl mb-4">
          <CardContent>
            <Typography variant="body1" component="p" className="text-white leading-7 mb-4">
              {blogData.content}
            </Typography>

            {/* Code Snippet */}
            <Divider className="my-6" />
            <Typography variant="h6" component="h2" className="text-gray-300 mb-2">
              Example Code
            </Typography>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-green-400">{blogData.codeSnippet}</code>
            </pre>

            {/* Additional Image */}
            <Divider className="my-6" />
            <Typography variant="h6" component="h2" className="text-gray-300 mb-2">
              Additional Image
            </Typography>
            <CardMedia
              component="img"
              image={blogData.additionalImage}
              alt="Additional Content"
              className="mb-4 rounded-lg"
            />

            {/* More Content */}
            <Divider className="my-6" />
            <Typography variant="body1" component="p" className="text-white leading-7">
              {blogData.moreContent}
            </Typography>
          </CardContent>
        </Card>

        {/* Claps */}
        <div className="flex items-center">
          <IconButton color="primary" onClick={handleClap}>
            <FavoriteIcon className="text-red-500" />
          </IconButton>
          <Typography variant="body1" className="text-white ml-2">
            {claps} {claps === 1 ? 'Clap' : 'Claps'}
          </Typography>
        </div>
      </div>
    </Container>
  );
}
