import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)',
    // padding: theme.spacing(4),
  },
  title: {
    textAlign: 'center',
    // marginBottom: theme.spacing(6),
    color: '#01579B',
    fontWeight: 'bold',
  },
  timeline: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      width: 2,
      height: '100%',
      background: 'linear-gradient(180deg, #81D4FA 0%, #29B6F6 100%)',
    },
  },
  milestone: {
    // marginBottom: theme.spacing(8),
    position: 'relative',
  },
  milestoneContent: {
    // padding: theme.spacing(3),
    borderRadius: 16,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  milestoneIcon: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  },
  milestoneTitle: {
    fontWeight: 'bold',
    // marginBottom: theme.spacing(2),
    color: '#01579B',
  },
  milestoneCap: {
    fontWeight: 'bold',
    color: '#0288D1',
    // marginBottom: theme.spacing(1),
  },
  milestonePoint: {
    display: 'flex',
    alignItems: 'flex-start',
    // marginBottom: theme.spacing(1),
  },
  pointBullet: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#4FC3F7',
    // marginRight: theme.spacing(1),
    marginTop: 6,
  },
  shovelGraphic: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 100,
    height: 100,
    opacity: 0.7,
  },
  coinGraphic: {
    position: 'fixed',
    top: 20,
    left: 20,
    width: 80,
    height: 80,
    opacity: 0.7,
  },
}));
