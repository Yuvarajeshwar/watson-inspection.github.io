import React from 'react';
import { Grid } from '@mui/material';
import Overview from './components/Overview'
import ImageViewer from './components/ImageViewer'
import Header from './header';
import { useLocation } from 'react-router-dom';
// import { ReviewQuestions } from './components/ReviewQuestions'

// import { Container } from '@mui/material';

export function ReviewPage () {
  const location = useLocation();
  const selectedRowData = location.state
  console.log(selectedRowData)
  return (
    <div>
      <span>{location.state}</span>
      {/* Assuming Header, Overview, and ImageViewer are components */}
      <Header />
      <Grid container spacing={0}>
        <Grid item xs={4}>
          {/* Pass selectedRowData as a prop to Overview */}
          <Overview selectedRowData={selectedRowData} />
        </Grid>
        <Grid item xs={8}>
          <ImageViewer />
        </Grid>
      </Grid>
    </div>
  );
};
