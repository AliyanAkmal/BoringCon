import { Typography, Box } from '@mui/material';

const RoadMapEffect = () => {
  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography
          variant="h1"
          style={{
            color: '#FFDAB9 ',
            fontSize: '70px',
            fontWeight: 700,
            lineHeight: '127.37px',
            fontFamily: 'Chewy',
          }}
        >
          The Boring Coin:&nbsp;
        </Typography>

        <Typography
          style={{
            color: '#E6E6FA',
            fontSize: '70px',
            fontWeight: 600,
            lineHeight: '127.37px',
            fontFamily: 'Chewy',
          }}
        >
          Roadmap to... Mediocrity
        </Typography>
      </Box>
    </>
  );
};
export default RoadMapEffect;
