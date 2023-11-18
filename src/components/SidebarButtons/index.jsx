import { Box, Button, ListItem, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const SidebarButtons = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    navigate('/login');
  };
  return (
    <>
      <Box>
        {['Personal account'].map((text) => (
          <Button
            fullWidth
            variant="contained"
            key={text}
            // onClick={() => changeTag(index)}
            sx={{
              borderRadius: 4,
            }}
          >
            <ListItem disablePadding>
              <AccountCircleIcon sx={{ marginRight: 0.1 }} />
              <ListItemText primary={text} />
            </ListItem>
          </Button>
        ))}
      </Box>

      <Button
        fullWidth
        variant="contained"
        key={'Logout'}
        onClick={() => handleLogout()}
        sx={{
          borderRadius: 4,
        }}
      >
        <ListItem disablePadding>
          <LogoutIcon sx={{ marginRight: 0.1 }} />
          <ListItemText primary={'Logout'} />
        </ListItem>
      </Button>
    </>
  );
};

export default SidebarButtons;
