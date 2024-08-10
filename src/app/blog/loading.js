import React from 'react';
import { Container, Card, CardMedia, CardContent, Skeleton, Typography, Chip, Divider } from '@mui/material';

export default function LoadingSkeleton() {
  return (
    <Container className="mx-auto my-12 p-8 bg-neutral-950 rounded-3xl">
      {/* Cover Image Skeleton */}
      <Card className="mb-8 rounded-3xl overflow-hidden">
        <Skeleton variant="rectangular" className="h-96 w-full" animation="wave" />
      </Card>

      {/* Blog Content Skeleton */}
      <div className="text-white">
        {/* Title Skeleton */}
        <Skeleton variant="text" width="60%" height={56} className="mb-4" animation="wave" />

        {/* Author, Date, Last Edited Skeleton */}
        <div className="mb-6">
          <Typography variant="body1" className="text-gray-400">
            <Skeleton variant="text" width="40%" animation="wave" />
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            <Skeleton variant="text" width="30%" animation="wave" />
          </Typography>
        </div>

        {/* Topic Skeleton */}
        <div className="mb-8">
          <Chip
            label={<Skeleton variant="text" width={60} animation="wave" />}
            className="bg-zinc-800 text-white"
            style={{ width: '100px', height: '32px' }}
          />
        </div>

        {/* Content Skeleton */}
        <Card className="bg-neutral-900 p-6 rounded-3xl mb-4">
          <CardContent>
            <Typography variant="body1" component="div" className="text-white leading-7">
              {/* Multiple lines of skeleton text */}
              <Skeleton variant="text" width="90%" height={24} animation="wave" />
              <Skeleton variant="text" width="85%" height={24} animation="wave" />
              <Skeleton variant="text" width="80%" height={24} animation="wave" />
              <Skeleton variant="text" width="75%" height={24} animation="wave" />
              <Skeleton variant="text" width="70%" height={24} animation="wave" />
            </Typography>
          </CardContent>
        </Card>

        {/* Code Snippet Skeleton */}
        <Divider className="my-6" />
        <Typography variant="h6" component="h2" className="text-gray-300 mb-2">
          <Skeleton variant="text" width="20%" height={30} animation="wave" />
        </Typography>
        <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <Skeleton variant="rectangular" width="100%" height={60} animation="wave" />
        </pre>

        {/* Additional Image Skeleton */}
        <Divider className="my-6" />
        <Typography variant="h6" component="h2" className="text-gray-300 mb-2">
          <Skeleton variant="text" width="20%" height={30} animation="wave" />
        </Typography>
        <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />

        {/* More Content Skeleton */}
        <Divider className="my-6" />
        <Typography variant="body1" component="div" className="text-white leading-7">
          <Skeleton variant="text" width="90%" height={24} animation="wave" />
          <Skeleton variant="text" width="85%" height={24} animation="wave" />
          <Skeleton variant="text" width="80%" height={24} animation="wave" />
          <Skeleton variant="text" width="75%" height={24} animation="wave" />
        </Typography>
      </div>
    </Container>
  );
}
