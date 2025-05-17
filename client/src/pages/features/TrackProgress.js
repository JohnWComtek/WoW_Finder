import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  Assessment as AssessmentIcon,
  Timeline as TimelineIcon,
  TrendingUp as TrendingUpIcon,
  Compare as CompareIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TrackProgress = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <AssessmentIcon />,
      title: 'Performance Metrics',
      description: 'Track your Raider.IO scores, Warcraft Logs parses, and PvP ratings in one place.',
    },
    {
      icon: <TimelineIcon />,
      title: 'Progress History',
      description: 'View your progression over time with detailed historical data and trends.',
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Goal Setting',
      description: 'Set and track personal goals for raids, Mythic+, and PvP achievements.',
    },
    {
      icon: <CompareIcon />,
      title: 'Compare Stats',
      description: 'Compare your performance with guildmates or other players in your region.',
    },
    {
      icon: <NotificationsIcon />,
      title: 'Progress Alerts',
      description: 'Get notifications when you reach milestones or when new logs are uploaded.',
    },
  ];

  return (
    <Container>
      <Box sx={{ pt: 6, pb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Track Progress
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Keep track of your World of Warcraft achievements, performance metrics,
          and progression history. Our comprehensive tracking system integrates
          with Raider.IO and Warcraft Logs to give you detailed insights into
          your gameplay.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/profile')}
          sx={{ mt: 2 }}
        >
          View Your Stats
        </Button>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h2">
                    {feature.title}
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          What We Track
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <AssessmentIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Mythic+ Performance"
              secondary="Track your Raider.IO score, weekly best runs, and seasonal progression across all your characters."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TimelineIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Raid Performance"
              secondary="Monitor your Warcraft Logs parses, boss kill times, and overall raid progression for each tier."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TrendingUpIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="PvP Statistics"
              secondary="Keep track of your arena ratings, battleground statistics, and PvP achievements."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default TrackProgress; 