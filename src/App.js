import { Box } from '@mui/material';
import React from 'react';
import backImage from './assets/kennedytheairflow_An_underground_cartoon_tunnel_system_sprawlin (1).png';
import { RouterProvider } from 'react-router-dom';
import router from './routes/route';

const App = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('${backImage}')`,
        padding: '0rem 4rem',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
//////////////////////
