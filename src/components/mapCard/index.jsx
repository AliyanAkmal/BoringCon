import React from 'react';
// import {
//   Timeline,
//   TimelineConnector,
//   TimelineContent,
//   TimelineDot,
//   TimelineItem,
//   TimelineSeparator,
// } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { data } from './data';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';

const MapCard = () => {
  return (
    <Timeline position="alternate">
      {data &&
        data.map(({ phase, title, description, id }, index) => (
          <React.Fragment key={id} style={{ width: '380px' }}>
            {index % 2 === 0 ? (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      '&.MuiTimelineDot-root': {
                        backgroundColor: '#fff',
                      },
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      '&.MuiTimelineConnector-root': {
                        background: '#fff',
                      },
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        background: '#e4d2ba',
                        border: '1.284px solid #FFF',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: {
                          lg: '429px',
                          md: '429px',
                          sm: '300px',
                          xs: '240px',
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#5f3a19',
                          fontSize: '19px',
                          fontWeight: 400,
                          fontFamily: 'Chewy',
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#685843',
                          fontSize: '14px',
                          fontWeight: '400',
                          fontFamily: 'Chewy',
                        }}
                      >
                        {description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        background: 'transparent',
                        padding: '10px',
                        borderRadius: '0px 50px 50px 0px',
                        display: 'flex',
                        alignItems: 'center',
                        height: '50px',
                        position: 'relative',
                        top: 15,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '50px',
                          fontWeight: 700,
                          color: '#fff',
                          width: '80px',
                        }}
                      >
                        {phase}
                      </Typography>
                    </Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ) : (
              <TimelineItem>
                <TimelineSeparator
                  sx={{
                    background:
                      'var(--Linear, linear-gradient(99deg, #FF50C5 1.24%, #0C4381 99.12%))',
                  }}
                >
                  {/* <TimelineDot /> */}
                  <TimelineConnector
                    sx={{
                      '&.MuiTimelineConnector-root': {
                        background: '#7879F1',
                      },
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        background: 'transparent',
                        padding: '10px',
                        borderRadius: '50px 0px 0px 50px',
                        display: 'flex',
                        alignItems: 'center',
                        height: '50px',
                        position: 'relative',
                        top: 15,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '50px',
                          fontWeight: 700,
                          color: '#fff',
                          width: '80px',
                        }}
                      >
                        {phase}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        background: '#D2B48C',
                        border: '1.284px solid #FFF',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        width: {
                          lg: '429px',
                          md: '429px',
                          sm: '300px',
                          xs: '240px',
                        },
                        textAlign: 'start',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#5f3a19',
                          fontSize: '19px',
                          fontWeight: 400,
                          fontFamily: 'Chewy',
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#685843',
                          fontSize: '14px',
                          fontWeight: '400',
                          fontFamily: 'Chewy',
                        }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            )}
          </React.Fragment>
        ))}
    </Timeline>
  );
};

export default MapCard;
