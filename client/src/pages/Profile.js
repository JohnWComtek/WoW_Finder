import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Tabs,
  Tab,
  TextField,
  Chip,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [tabValue, setTabValue] = useState(0);
  const [openCharacterDialog, setOpenCharacterDialog] = useState(false);
  const [characterForm, setCharacterForm] = useState({
    name: '',
    realm: '',
    class: '',
    role: '',
    mainCharacter: false,
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenCharacterDialog = () => {
    setOpenCharacterDialog(true);
  };

  const handleCloseCharacterDialog = () => {
    setOpenCharacterDialog(false);
    setCharacterForm({
      name: '',
      realm: '',
      class: '',
      role: '',
      mainCharacter: false,
    });
  };

  const handleCharacterFormChange = (e) => {
    setCharacterForm({
      ...characterForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCharacter = () => {
    // TODO: Implement character addition logic
    handleCloseCharacterDialog();
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h4" component="h1">
                {user?.username}'s Profile
              </Typography>
              <IconButton sx={{ ml: 2 }}>
                <EditIcon />
              </IconButton>
            </Box>
            <Typography variant="subtitle1" color="text.secondary">
              Battle.net Tag: {user?.battleTag}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <Tabs value={tabValue} onChange={handleTabChange} centered>
              <Tab label="Characters" />
              <Tab label="Achievements" />
              <Tab label="Settings" />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleOpenCharacterDialog}
                >
                  Add Character
                </Button>
              </Box>

              <Grid container spacing={2}>
                {user?.characters?.map((character, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="h6">
                            {character.name}
                            {character.mainCharacter && (
                              <Chip
                                label="Main"
                                color="primary"
                                size="small"
                                sx={{ ml: 1 }}
                              />
                            )}
                          </Typography>
                          <Box>
                            <IconButton size="small">
                              <EditIcon />
                            </IconButton>
                            <IconButton size="small" color="error">
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </Box>
                        <Typography color="text.secondary">
                          {character.class} - {character.role}
                        </Typography>
                        <Typography color="text.secondary">
                          {character.realm}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <Typography variant="h6">Achievements coming soon...</Typography>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <Typography variant="h6">Account Settings</Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Email"
                  value={user?.email}
                  disabled
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Battle.net Tag"
                  value={user?.battleTag}
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary">
                  Save Changes
                </Button>
              </Box>
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={openCharacterDialog} onClose={handleCloseCharacterDialog}>
        <DialogTitle>Add New Character</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Character Name"
            fullWidth
            value={characterForm.name}
            onChange={handleCharacterFormChange}
          />
          <TextField
            margin="dense"
            name="realm"
            label="Realm"
            fullWidth
            value={characterForm.realm}
            onChange={handleCharacterFormChange}
          />
          <TextField
            margin="dense"
            name="class"
            label="Class"
            fullWidth
            value={characterForm.class}
            onChange={handleCharacterFormChange}
          />
          <TextField
            margin="dense"
            name="role"
            label="Role"
            fullWidth
            value={characterForm.role}
            onChange={handleCharacterFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCharacterDialog}>Cancel</Button>
          <Button onClick={handleAddCharacter} variant="contained">
            Add Character
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Profile; 