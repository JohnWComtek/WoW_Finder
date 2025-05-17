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
  Group as GroupIcon,
  PersonAdd as PersonAddIcon,
  Assignment as AssignmentIcon,
  Notes as NotesIcon,
  History as HistoryIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ManageRosters = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <GroupIcon />,
      title: 'Team Organization',
      description: 'Create and manage multiple teams with customizable roles and positions.',
    },
    {
      icon: <PersonAddIcon />,
      title: 'Member Management',
      description: 'Add players with their characters, specs, and roles. Track main and backup status.',
    },
    {
      icon: <AssignmentIcon />,
      title: 'Performance Tracking',
      description: 'Monitor team and individual performance with integrated Raider.IO and Warcraft Logs data.',
    },
    {
      icon: <NotesIcon />,
      title: 'Notes & Feedback',
      description: 'Keep detailed notes on player performance, attendance, and improvement areas.',
    },
    {
      icon: <HistoryIcon />,
      title: 'Attendance Tracking',
      description: 'Track attendance and participation history for all roster members.',
    },
  ];

  return (
    <Container>
      <Box sx={{ pt: 6, pb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Manage Rosters
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Streamline your team management with our comprehensive roster system.
          Whether you're running a Mythic raid team, a Mythic+ push group, or
          a casual social guild, our tools help you organize and track your
          team effectively.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/rosters')}
          sx={{ mt: 2 }}
        >
          View Rosters
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
          Key Features
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <GroupIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Flexible Team Structure"
              secondary="Create multiple teams and rosters, perfect for managing main and backup raiders, Mythic+ groups, or PvP teams."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AssignmentIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Performance Insights"
              secondary="Get detailed performance metrics for your entire roster, helping you make informed decisions about team composition."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <NotesIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Comprehensive Notes"
              secondary="Keep detailed records of player performance, attendance, and areas for improvement with our note-taking system."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default ManageRosters; 