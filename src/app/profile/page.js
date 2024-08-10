"use client";
import React, { useState, useEffect } from 'react';
import { TextField, Button, Avatar, Typography, IconButton, Grid, Paper, Alert, AlertTitle } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    domain: 'johndoe.com',
    avatar: 'https://via.placeholder.com/150',
  });

  const [alert, setAlert] = useState({ message: '', severity: '' }); // State for alert messages

  useEffect(() => {
    // Automatically hide the alert after 2 seconds
    if (alert.message) {
      const timer = setTimeout(() => {
        setAlert({ message: '', severity: '' });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData({ ...profileData, avatar: event.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    // Simulate save action
    setAlert({ message: 'Profile updated successfully!', severity: 'success' });
  };

  return (
    <div className="p-12 flex justify-center items-center min-h-screen bg-neutral-950">
      <Paper elevation={3} className="p-6 w-full max-w-md bg-neutral-900 rounded-3xl">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Avatar src={profileData.avatar} alt="Profile Avatar" className="h-40 w-40 border-4 border-gray-700" />
            {isEditing && (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                className="absolute bottom-0 right-0 bg-black rounded-xl p-1"
              >
                <input hidden accept="image/*" type="file" onChange={handleAvatarChange} />
                <PhotoCamera className="text-white" />
              </IconButton>
            )}
          </div>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" className="text-center mb-4 text-white">
              Profile Information
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="name"
              label="Name"
              name="name"
              fullWidth
              value={profileData.name}
              onChange={handleChange}
              disabled={!isEditing}
              variant="outlined"
              InputProps={{
                className: 'bg-black text-black rounded-xl',
                sx: { '& .MuiOutlinedInput-root': { borderRadius: '9999px', backgroundColor: 'black' } },
              }}
              InputLabelProps={{
                className: 'text-black',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              label="Email"
              name="email"
              fullWidth
              value={profileData.email}
              onChange={handleChange}
              disabled={!isEditing}
              variant="outlined"
              InputProps={{
                className: 'bg-black text-black rounded-xl',
                sx: { '& .MuiOutlinedInput-root': { borderRadius: '9999px', backgroundColor: 'black' } },
              }}
              InputLabelProps={{
                className: 'text-black',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="phone"
              label="Phone Number"
              name="phone"
              fullWidth
              value={profileData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              variant="outlined"
              InputProps={{
                className: 'bg-black text-black rounded-xl',
                sx: { '& .MuiOutlinedInput-root': { borderRadius: '9999px', backgroundColor: 'black' } },
              }}
              InputLabelProps={{
                className: 'text-black',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="domain"
              label="Domain"
              name="domain"
              fullWidth
              value={profileData.domain}
              onChange={handleChange}
              disabled={!isEditing}
              variant="outlined"
              InputProps={{
                className: 'bg-black text-black rounded-xl',
                sx: { '& .MuiOutlinedInput-root': { borderRadius: '9999px', backgroundColor: 'black' } },
              }}
              InputLabelProps={{
                className: 'text-black',
              }}
            />
          </Grid>
          <Grid item xs={12} className="flex justify-center">
            <Button
              variant="contained"
              color="primary"
              startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
              onClick={() => {
                if (isEditing) {
                  handleSave();
                }
                handleEditToggle();
              }}
              className="bg-blue-500 hover:bg-blue-600 rounded-xl"
            >
              {isEditing ? 'Save' : 'Edit'}
            </Button>
          </Grid>
          {alert.message && (
            <Grid item xs={12} className="mt-4">
              <Alert severity={alert.severity}>
                <AlertTitle>{alert.severity === 'success' ? 'Success' : 'Error'}</AlertTitle>
                {alert.message}
              </Alert>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}
