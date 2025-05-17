import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { Add as AddIcon, Group as GroupIcon } from '@mui/icons-material';

// Mock data for rosters
const mockRosters = [
  {
    id: 1,
    name: "Tuesday Night Raiders",
    type: "Raid",
    description: "Casual raid team focusing on Heroic progression",
    memberCount: 12,
  },
  {
    id: 2,
    name: "Weekend M+ Push",
    type: "Mythic+",
    description: "Pushing high keys on weekends",
    memberCount: 5,
  },
];

const RosterManager = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [newRoster, setNewRoster] = useState({
    name: '',
    type: '',
    description: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewRoster({ name: '', type: '', description: '' });
  };

  const handleChange = (e) => {
    setNewRoster({
      ...newRoster,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateRoster = () => {
    // TODO: Implement actual roster creation
    console.log('Creating roster:', newRoster);
    handleClose();
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Roster Manager
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ mb: 2 }}
          onClick={handleClickOpen}
        >
          Create New Roster
        </Button>
      </Box>

      <Grid container spacing={3}>
        {mockRosters.map((roster) => (
          <Grid item xs={12} md={6} key={roster.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <GroupIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h6" component="h2">
                    {roster.name}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {roster.type}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {roster.description}
                </Typography>
                <Typography variant="body2">
                  Members: {roster.memberCount}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  onClick={() => navigate(`/rosters/${roster.id}`)}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Roster</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Roster Name"
            type="text"
            fullWidth
            value={newRoster.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              value={newRoster.type}
              label="Type"
              onChange={handleChange}
            >
              <MenuItem value="Raid">Raid</MenuItem>
              <MenuItem value="Mythic+">Mythic+</MenuItem>
              <MenuItem value="PvP">PvP</MenuItem>
              <MenuItem value="Social">Social</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={newRoster.description}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button 
            onClick={handleCreateRoster}
            variant="contained"
            disabled={!newRoster.name || !newRoster.type}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RosterManager; 