import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
  Chip,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
} from '@mui/material';

const roles = ['Tank', 'Healer', 'DPS'];
const activities = ['Raid', 'Mythic+', 'PvP', 'Social'];
const experience = ['Beginner', 'Intermediate', 'Advanced', 'Elite'];

const PlayerFinder = () => {
  const [filters, setFilters] = useState({
    role: '',
    activity: '',
    experience: '',
    schedule: '',
  });

  const [players] = useState([
    {
      id: 1,
      username: 'LegendaryTank',
      role: 'Tank',
      activity: 'Mythic+',
      experience: 'Elite',
      raiderIO: 2500,
      schedule: 'Evenings EST',
      characters: [
        { name: 'Tankmaster', class: 'Warrior', realm: 'Stormrage' },
      ],
    },
    // Add more mock players here
  ]);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const filteredPlayers = players.filter((player) => {
    if (filters.role && player.role !== filters.role) return false;
    if (filters.activity && player.activity !== filters.activity) return false;
    if (filters.experience && player.experience !== filters.experience) return false;
    return true;
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Find Players
      </Typography>

      <Paper sx={{ p: 2, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                name="role"
                value={filters.role}
                onChange={handleFilterChange}
                input={<OutlinedInput label="Role" />}
              >
                <MenuItem value="">Any</MenuItem>
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Activity</InputLabel>
              <Select
                name="activity"
                value={filters.activity}
                onChange={handleFilterChange}
                input={<OutlinedInput label="Activity" />}
              >
                <MenuItem value="">Any</MenuItem>
                {activities.map((activity) => (
                  <MenuItem key={activity} value={activity}>
                    {activity}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Experience</InputLabel>
              <Select
                name="experience"
                value={filters.experience}
                onChange={handleFilterChange}
                input={<OutlinedInput label="Experience" />}
              >
                <MenuItem value="">Any</MenuItem>
                {experience.map((exp) => (
                  <MenuItem key={exp} value={exp}>
                    {exp}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              name="schedule"
              label="Schedule"
              value={filters.schedule}
              onChange={handleFilterChange}
              placeholder="e.g., Evenings EST"
            />
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        {filteredPlayers.map((player) => (
          <Grid item xs={12} sm={6} md={4} key={player.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {player.username}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip label={player.role} color="primary" sx={{ mr: 1 }} />
                  <Chip label={player.activity} color="secondary" sx={{ mr: 1 }} />
                  <Chip label={player.experience} />
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Raider.IO Score: {player.raiderIO}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Schedule: {player.schedule}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Characters:
                </Typography>
                {player.characters.map((char, index) => (
                  <Typography key={index} variant="body2" color="text.secondary">
                    {char.name} - {char.class} ({char.realm})
                  </Typography>
                ))}
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Profile
                </Button>
                <Button size="small" color="primary">
                  Send Message
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PlayerFinder; 