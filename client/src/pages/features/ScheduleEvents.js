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
  Schedule as ScheduleIcon,
  Event as EventIcon,
  Notifications as NotificationsIcon,
  People as PeopleIcon,
  Repeat as RepeatIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ScheduleEvents = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <EventIcon />,
      title: 'Event Creation',
      description: 'Create and manage raid nights, Mythic+ runs, PvP sessions, and social events.',
    },
    {
      icon: <PeopleIcon />,
      title: 'Attendance Tracking',
      description: 'Track RSVPs and manage roster assignments for each event.',
    },
    {
      icon: <NotificationsIcon />,
      title: 'Reminders',
      description: 'Automated notifications for upcoming events and schedule changes.',
    },
    {
      icon: <RepeatIcon />,
      title: 'Recurring Events',
      description: 'Set up regular raid nights and team activities with recurring schedules.',
    },
    {
      icon: <ScheduleIcon />,
      title: 'Calendar Integration',
      description: 'Sync events with your personal calendar and get timezone-adjusted schedules.',
    },
  ];

  return (
    <Container>
      <Box sx={{ pt: 6, pb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Schedule Events
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Coordinate your team activities with our powerful event scheduling system.
          From regular raid nights to impromptu Mythic+ runs, keep your team
          organized and informed about upcoming events.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/events')}
          sx={{ mt: 2 }}
        >
          View Calendar
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
          Scheduling Made Easy
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <EventIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Quick Event Creation"
              secondary="Create events in seconds with templates for different activity types and automatic roster assignments."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PeopleIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Smart Attendance"
              secondary="Track availability, manage signups, and automatically notify backup players when needed."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <NotificationsIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Stay Informed"
              secondary="Get notifications through Discord, email, or in-app alerts for upcoming events and changes."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default ScheduleEvents; 