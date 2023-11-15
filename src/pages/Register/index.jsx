import SInput from '../../components/Custom/SInput'
import SButton from '../../components/Custom/SButton'
import "./styles.css"
import "../Login/styles.css"
import { Box, Link } from '@mui/material';
import {Apple, Email, Google, Password} from "@mui/icons-material"


const styles = {
    signup: {
        text: "Create account",
        bgColor: "#187b87",
        hoverColor: "#609aa5",
        color:"#fff",
        icon:""
    },

    signup_w_gg: {
        text: "Sign up with Google",
        bgColor: "#fff",
        hoverColor: "#e6e6e6",
        color: "#000000",
        icon: <Google fontSize='inherit'/>
    },
    signup_w_apple: {
        text: "Sign up with Apple",
        bgColor: "#000000",
        hoverColor: "#333333",
        color:"#fff",
        icon: <Apple fontSize='inherit' />
    }
}

function Register({Name, Email, Password, onNameChange, onEmailChange, onPasswordChange, onRegister}) {
    return (
        <div className="login_background">
            <div className="login_wrapper">
                <Box
                    className="login_form"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { marginBlock: 1 },
                    }}
                    noValidate
                    autoComplete="off"

                >
                    <h2 style={{ textAlign: 'center' }}>Create account</h2>
                    <SInput
                        label={"Name"} value={Name} onInputChange={onNameChange}
                    />
                    <SInput
                        label={"Email"} value={Email} onInputChange={onEmailChange}
                    />
                    <SInput
                        label={"Password"} type={'password'} value={Password} onInputChange={onPasswordChange}
                    />
                    <div style={{ marginTop: '10px', fontSize: '12px' }}>
                        <SButton styles={styles.signup} onButtonClick={onRegister} />
                    </div>
                    <div style={{ marginTop: '10px', textAlign: 'left', fontSize: '10px', color: '#acacab' }}>
                        Already have an account? &nbsp;
                        <Link href="#" color="#000000" fontSize={'10px'} fontWeight={'500'}>
                            Log in
                        </Link>
                    </div>
                    <div style={{ marginTop: '30px', fontSize: '11px' }}>
                        <SButton styles={styles.signup_w_apple} />
                    </div>
                    <div style={{ marginTop: '10px', fontSize: '11px' }}>
                        <SButton styles={styles.signup_w_gg}/>
                    </div>
                </Box>
                <div className="login_image">
                    <img src="./login_bg.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Register;