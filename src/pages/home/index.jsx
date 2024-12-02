import { Box } from '@mui/material';
import React from 'react';
import RoadMap from '../../components/roadMap';
import RoadMapEffect from '../../components/RoadMapEffect';
import MapCard from '../../components/mapCard';

const Home = () => {
  return (
    <Box mt={90}>
      <Box
        sx={{
          padding: '30px 0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <RoadMapEffect />
      </Box>

      <Box>
        <MapCard />
      </Box>
    </Box>
  );
};

export default Home;
