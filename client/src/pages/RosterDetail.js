import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Tooltip,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Star as StarIcon,
} from '@mui/icons-material';

// Mock data for a roster with player details
const mockRosterData = {
  id: 1,
  name: "Tuesday Night Raiders",
  type: "Raid",
  description: "Casual raid team focusing on Heroic progression",
  members: [
    {
      id: 1,
      character: {
        name: "Lightbringer",
        realm: "Stormrage",
        class: "Paladin",
        role: "Tank",
        spec: "Protection",
      },
      raiderIO: {
        score: 2850,
        rank: "Elite",
        weeklyBest: 22,
      },
      warcraftLogs: {
        median: 95,
        best: 99,
        recentLogs: [98, 95, 93, 97, 94],
      },
      note: "Main tank, available all raid nights",
      isBackup: false,
    },
    {
      id: 2,
      character: {
        name: "Shadowmend",
        realm: "Stormrage",
        class: "Priest",
        role: "Healer",
        spec: "Discipline",
      },
      raiderIO: {
        score: 2650,
        rank: "Master",
        weeklyBest: 20,
      },
      warcraftLogs: {
        median: 88,
        best: 95,
        recentLogs: [88, 92, 85, 90, 87],
      },
      note: "Raid leader, handles healing assignments",
      isBackup: false,
    },
    {
      id: 3,
      character: {
        name: "Arcaneblast",
        realm: "Stormrage",
        class: "Mage",
        role: "DPS",
        spec: "Fire",
      },
      raiderIO: {
        score: 2750,
        rank: "Elite",
        weeklyBest: 21,
      },
      warcraftLogs: {
        median: 92,
        best: 98,
        recentLogs: [92, 94, 91, 98, 93],
      },
      note: "Backup raider, available on weekends",
      isBackup: true,
    },
  ],
};

// Helper function to get class color
const getClassColor = (className) => {
  const colors = {
    Paladin: '#F58CBA',
    Priest: '#FFFFFF',
    Mage: '#69CCF0',
    // Add more classes as needed
  };
  return colors[className] || '#FFFFFF';
};

const RosterDetail = () => {
  const { id } = useParams();
  const [noteDialogOpen, setNoteDialogOpen] = useState(false);
  const [addMemberDialogOpen, setAddMemberDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [newNote, setNewNote] = useState('');
  const [newMember, setNewMember] = useState({
    name: '',
    realm: '',
    class: '',
    role: '',
    spec: '',
    isBackup: false,
  });

  // WoW classes and their specs
  const classSpecs = {
    'Death Knight': ['Blood', 'Frost', 'Unholy'],
    'Demon Hunter': ['Havoc', 'Vengeance'],
    'Druid': ['Balance', 'Feral', 'Guardian', 'Restoration'],
    'Hunter': ['Beast Mastery', 'Marksmanship', 'Survival'],
    'Mage': ['Arcane', 'Fire', 'Frost'],
    'Monk': ['Brewmaster', 'Mistweaver', 'Windwalker'],
    'Paladin': ['Holy', 'Protection', 'Retribution'],
    'Priest': ['Discipline', 'Holy', 'Shadow'],
    'Rogue': ['Assassination', 'Outlaw', 'Subtlety'],
    'Shaman': ['Elemental', 'Enhancement', 'Restoration'],
    'Warlock': ['Affliction', 'Demonology', 'Destruction'],
    'Warrior': ['Arms', 'Fury', 'Protection'],
  };

  const handleOpenNoteDialog = (member) => {
    setSelectedMember(member);
    setNewNote(member.note || '');
    setNoteDialogOpen(true);
  };

  const handleCloseNoteDialog = () => {
    setNoteDialogOpen(false);
    setSelectedMember(null);
    setNewNote('');
  };

  const handleSaveNote = () => {
    // TODO: Implement actual note saving
    console.log('Saving note for member:', selectedMember?.id, newNote);
    handleCloseNoteDialog();
  };

  const handleOpenAddMemberDialog = () => {
    setAddMemberDialogOpen(true);
  };

  const handleCloseAddMemberDialog = () => {
    setAddMemberDialogOpen(false);
    setNewMember({
      name: '',
      realm: '',
      class: '',
      role: '',
      spec: '',
      isBackup: false,
    });
  };

  const handleAddMemberChange = (e) => {
    const { name, value } = e.target;
    setNewMember(prev => ({
      ...prev,
      [name]: value,
    }));

    // Auto-select role based on spec
    if (name === 'spec') {
      const role = 
        value.includes('Tank') || value === 'Protection' || value === 'Guardian' || value === 'Brewmaster' || value === 'Blood' || value === 'Vengeance'
          ? 'Tank'
          : value.includes('Heal') || value === 'Restoration' || value === 'Holy' || value === 'Discipline' || value === 'Mistweaver'
          ? 'Healer'
          : 'DPS';
      setNewMember(prev => ({
        ...prev,
        role,
      }));
    }
  };

  const handleAddMember = () => {
    // TODO: Implement actual member addition
    console.log('Adding new member:', newMember);
    handleCloseAddMemberDialog();
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {mockRosterData.name}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {mockRosterData.type}
        </Typography>
        <Typography variant="body1" paragraph>
          {mockRosterData.description}
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ mb: 2 }}
          onClick={handleOpenAddMemberDialog}
        >
          Add Member
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Character</TableCell>
              <TableCell>Role/Spec</TableCell>
              <TableCell>Raider.IO</TableCell>
              <TableCell>Warcraft Logs</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockRosterData.members.map((member) => (
              <TableRow 
                key={member.id}
                sx={{ 
                  backgroundColor: member.isBackup ? 'rgba(0, 0, 0, 0.04)' : 'inherit'
                }}
              >
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {member.isBackup && (
                      <Tooltip title="Backup Member">
                        <StarIcon sx={{ mr: 1, fontSize: 'small', color: 'warning.main' }} />
                      </Tooltip>
                    )}
                    <Typography
                      sx={{
                        color: getClassColor(member.character.class),
                        fontWeight: 'bold',
                      }}
                    >
                      {member.character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      {member.character.realm}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={`${member.character.role} - ${member.character.spec}`}
                    size="small"
                    color={
                      member.character.role === 'Tank' ? 'primary' :
                      member.character.role === 'Healer' ? 'success' : 'info'
                    }
                  />
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography variant="body2">
                      Score: {member.raiderIO.score}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.raiderIO.rank} (M+{member.raiderIO.weeklyBest})
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography variant="body2">
                      Best: {member.warcraftLogs.best}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Median: {member.warcraftLogs.median}%
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ 
                    maxWidth: 200,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                    {member.note || 'No notes'}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton 
                    size="small"
                    onClick={() => handleOpenNoteDialog(member)}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Member Dialog */}
      <Dialog open={addMemberDialogOpen} onClose={handleCloseAddMemberDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Character Name"
            type="text"
            fullWidth
            value={newMember.name}
            onChange={handleAddMemberChange}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            name="realm"
            label="Realm"
            type="text"
            fullWidth
            value={newMember.realm}
            onChange={handleAddMemberChange}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Class</InputLabel>
            <Select
              name="class"
              value={newMember.class}
              label="Class"
              onChange={handleAddMemberChange}
            >
              {Object.keys(classSpecs).map((className) => (
                <MenuItem key={className} value={className}>{className}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Specialization</InputLabel>
            <Select
              name="spec"
              value={newMember.spec}
              label="Specialization"
              onChange={handleAddMemberChange}
              disabled={!newMember.class}
            >
              {newMember.class && classSpecs[newMember.class].map((spec) => (
                <MenuItem key={spec} value={spec}>{spec}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={newMember.role}
              label="Role"
              onChange={handleAddMemberChange}
            >
              <MenuItem value="Tank">Tank</MenuItem>
              <MenuItem value="Healer">Healer</MenuItem>
              <MenuItem value="DPS">DPS</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              name="isBackup"
              value={newMember.isBackup}
              label="Status"
              onChange={(e) => setNewMember(prev => ({
                ...prev,
                isBackup: e.target.value,
              }))}
            >
              <MenuItem value={false}>Main Roster</MenuItem>
              <MenuItem value={true}>Backup</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddMemberDialog}>Cancel</Button>
          <Button 
            onClick={handleAddMember}
            variant="contained"
            disabled={!newMember.name || !newMember.realm || !newMember.class || !newMember.spec || !newMember.role}
          >
            Add Member
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={noteDialogOpen} onClose={handleCloseNoteDialog}>
        <DialogTitle>
          Edit Note for {selectedMember?.character.name}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Note"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNoteDialog}>Cancel</Button>
          <Button onClick={handleSaveNote} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default RosterDetail; 