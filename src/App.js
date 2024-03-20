import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Grid, Card, CardContent, CardActions, Menu, MenuItem, DialogTitle, DialogContent, DialogActions, TextField, Dialog } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';

function App() {
  // State variables and how to set them up with React hooks
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [expandedCard, setExpandedCard] = useState(null);

  // Function for expanding and shrinking cards
  const handleCardExpand = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // username and password
    console.log('Username:', username);
    console.log('Password:', password);
    // For demo purpose, just close the dialog after login attempt
    setOpen(false);
  };


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (option) => {
    console.log(`Selected option: ${option}`);
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      {/* AppBar component containing a menu and a "Login" button */}
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material-UI Testing
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>Login</Button>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleMenuItemClick('Option 1')}>Option 1</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Option 2')}>Option 2</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Option 3')}>Option 3</MenuItem>
      </Menu>
      <Container>
        <Typography variant="h4" gutterBottom>
        Homepage
        </Typography>
        {/* Container component contains content such as cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Card 1
                </Typography>
                <Typography variant="body2">
                  Information on the first card
                </Typography>
              </CardContent>
              <CardActions>
                {/* More information button that expands the card */}
                <Button size="small" onClick={() => handleCardExpand(1)}>More information</Button>
                {/* Show additional information if the card is extended */}
                {expandedCard === 1 && (
                  <Typography variant="body2">
                    More information on the first card
                  </Typography>
                )}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Card 2
                </Typography>
                <Typography variant="body2">
                  Information on the second card
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleCardExpand(2)}>More information</Button>
                {expandedCard === 2 && (
                  <Typography variant="body2">
                    More information on the second card
                  </Typography>
                )}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Card 3
                </Typography>
                <Typography variant="body2">
                  information on the third card
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleCardExpand(3)}>More information</Button>
                {expandedCard === 3 && (
                  <Typography variant="body2">
                    More information on the third card
                  </Typography>
                )}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Card 4
                </Typography>
                <Typography variant="body2">
                  information on the fourth card
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleCardExpand(4)}>More information</Button>
                {expandedCard === 4 && (
                  <Typography variant="body2">
                    More information on the fourth card
                  </Typography>
                )}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* Login window */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          {/* Login cancel button and login button */}
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogin} variant="contained" color="primary">Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default App;
