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
  Search as SearchIcon,
  FilterList as FilterIcon,
  Chat as ChatIcon,
  Group as GroupIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const FindPlayers = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SearchIcon />,
      title: 'Advanced Search',
      description: 'Search for players based on role, experience, schedule, and more.',
    },
    {
      icon: <FilterIcon />,
      title: 'Smart Filters',
      description: 'Filter by Mythic+ rating, raid progress, PvP rating, and availability.',
    },
    {
      icon: <ChatIcon />,
      title: 'Direct Messaging',
      description: 'Connect directly with potential teammates through our messaging system.',
    },
    {
      icon: <GroupIcon />,
      title: 'Team Matching',
      description: 'Find groups that match your playstyle and goals.',
    },
    {
      icon: <StarIcon />,
      title: 'Favorite Players',
      description: 'Save and track players you want to team up with in the future.',
    },
  ];

  return (
    <Container>
      <Box sx={{ pt: 6, pb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Find Players
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Connect with the perfect teammates for your World of Warcraft journey.
          Whether you're looking for raiders, Mythic+ pushers, or PvP partners,
          our advanced player finding system helps you build the perfect team.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/find-players')}
          sx={{ mt: 2 }}
        >
          Start Searching
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
          How It Works
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SearchIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="1. Set Your Criteria"
              secondary="Specify what kind of players or teams you're looking for, including role, experience level, and schedule."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FilterIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="2. Browse Matches"
              secondary="View detailed profiles of players and teams that match your criteria, including their experience and achievements."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChatIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="3. Connect"
              secondary="Reach out through our messaging system to discuss joining forces and achieving your goals together."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default FindPlayers; 