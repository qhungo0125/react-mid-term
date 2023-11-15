import SInput from '../../components/LoginInput'
import SButton from '../../components/LoginButtons'
import "./styles.css"
import { Box, Container, Link } from '@mui/material';
import { Apple, Google } from "@mui/icons-material"


const styles = {
    login_btn: {
        text: "Log in",
        bgColor: "#187b87",
        hoverColor: "#609aa5",
        color: "#fff",
        icon: ""
    },

    login_w_gg: {
        text: "Log in with Google",
        bgColor: "#fff",
        hoverColor: "#e6e6e6",
        color: "#000000",
        icon: <Google fontSize='inherit' />
    },
    login_w_apple: {
        text: "Log in with Apple",
        bgColor: "#000000",
        hoverColor: "#333333",
        color: "#fff",
        icon: <Apple fontSize='inherit' />
    }
}

function Login() {
    return (
        <div className="login_background">
            <div className="login_wrapper">
                <Box
                    className="login_form"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { marginBlock: 1 },
                        width: { xs: '100%', md: '50%' }
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <h2 style={{ textAlign: 'center' }}>Welcome back</h2>
                    <SInput
                        label={"Email"}
                    />
                    <SInput
                        label={"Password"}
                    />
                    <Box sx={{ textAlign: 'right' }}>
                        <Link href="#" color="inherit" sx={{ fontSize: '10px' }}>
                            Forgot Password?
                        </Link>
                    </Box>
                    <Box style={{ marginTop: '30px', fontSize: '12px' }}>
                        <SButton styles={styles.login_btn} />
                    </Box>
                    <Box sx={{ mt: '10px', textAlign: 'left', fontSize: '10px', color: '#acacab' }}>
                        Don't have an account? &nbsp;
                        <Link href="#" color="#187b87" fontSize={'10px'} fontWeight={'500'}>
                            Sign up
                        </Link>
                    </Box>
                    <Box sx={{ mt: '30px', fontSize: '11px' }}>
                        <SButton styles={styles.login_w_apple} />
                    </Box>
                    <Box sx={{ mt: '10px', fontSize: '11px' }}>
                        <SButton styles={styles.login_w_gg} />
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} className="login_image">
                    <img src="./login_bg.jpg" />
                </Box>
            </div>
        </div>
    );
}

export default Login;