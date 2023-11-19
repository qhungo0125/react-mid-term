import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const btnStyle = {
  minWidth: '100px',
  margin: '0 10px',
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <img className="background" loading="lazy" src="./login_bg.jpg" />
      <div className="items">
        <h1 className="welcome">Welcome to React-Mid-Term!</h1>
        <div className="links">
          <Button
            sx={btnStyle}
            variant="contained"
            onClick={(e) => navigate('/login')}
          >
            login
          </Button>

          <Button
            sx={btnStyle}
            variant="contained"
            onClick={(e) => navigate('/register')}
          >
            register
          </Button>
          <Button
            sx={btnStyle}
            variant="contained"
            onClick={(e) => navigate('/dashboard')}
          >
            dashboard
          </Button>
        </div>
      </div>
    </>
  );
}
