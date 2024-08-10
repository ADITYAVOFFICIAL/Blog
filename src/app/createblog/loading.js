// components/ProfileSkeleton.js
import React from 'react';
import { Skeleton, Typography, Box } from '@mui/material';

const ProfileSkeleton = () => {
  return (
    <Box className="flex items-center justify-center h-screen p-4">
      <Box className="text-center">
        <Typography variant="h1" className="text-2xl font-bold mb-4">
          <Skeleton width="200px" />
        </Typography>
        <Box className="mt-8">
          <Skeleton variant="rectangular" width={400} height={300} />
        </Box>
        <Box className="mt-4">
          <Skeleton width={150} />
          <Skeleton width={100} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileSkeleton;
