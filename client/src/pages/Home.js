import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box,
} from '@mui/material';
import {
  Group as GroupIcon,
  Assessment as AssessmentIcon,
  EmojiEvents as EmojiEventsIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <GroupIcon fontSize="large" />,
    title: 'Find Players',
    description: 'Connect with other players for raids, Mythic+, PvP, or social activities.',
    action: '/features/find-players',
  },
  {
    icon: <AssessmentIcon fontSize="large" />,
    title: 'Track Progress',
    description: 'Monitor your Raider.IO scores and Warcraft Logs performance.',
    action: '/features/track-progress',
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    title: 'Manage Rosters',
    description: 'Create and manage your teams with detailed player information.',
    action: '/features/manage-rosters',
  },
  {
    icon: <ScheduleIcon fontSize="large" />,
    title: 'Schedule Events',
    description: 'Organize raids, dungeons, and PvP events with your team.',
    action: '/features/schedule-events',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          pt: 8,
          pb: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          color="text.primary"
          gutterBottom
        >
          Welcome to WoW Community Hub
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Find players, track progress, and build your World of Warcraft community.
          Connect with players who share your goals and playstyle.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/find-players')}
            sx={{ mr: 2 }}
          >
            Find Players
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/register')}
          >
            Join Now
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2, color: 'primary.main' }}>{feature.icon}</Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                  size="small"
                  onClick={() => navigate(feature.action)}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 