import { useForm } from "react-hook-form";
import { Button, Modal } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthInput from "../AuthInput/AuthInput";
import "./Forms.scss";
import backImg from "../../assets/images/back.png";

interface LoginFormProps {
    onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const validation = { required: true };

    const {
        register,
        setValue,
        trigger,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data: any) => {
        if (data.Email?.toLowerCase() === "admin" && data.Password === "abcde") {
            onLogin();
            navigate("/home");
        } else {
            setOpen(true);
        }
    };

    return (
        <div className="login-container flex flex-justify-center flex-align-center width-100 height-100 background-primary-color">
            <div className="login-card flex width-60 overflow-hidden">
                <div className="login-left">
                    <div className="login-box">
                        <h2 className="login-title">Log In</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <AuthInput
                                    name="Email"
                                    register={register}
                                    validation={validation}
                                    errors={errors}
                                    setValue={setValue}
                                    trigger={trigger}
                                    placeholder="Your email"
                                    onChange={() => setOpen(false)}
                                />
                            </div>
                            <div className="">
                                <AuthInput
                                    name="Password"
                                    register={register}
                                    type="password"
                                    validation={validation}
                                    errors={errors}
                                    setValue={setValue}
                                    trigger={trigger}
                                    placeholder="Password"
                                    onChange={() => setOpen(false)}
                                />
                            </div>
                            <Button className="login-btn" type="submit">
                                Log In
                            </Button>
                            <div className="forgot">
                                <Link to="#">Forgot password?</Link>
                            </div>
                            <div className="divider">or</div>
                            <div className="social-login">
                                <Button className="google-btn">Google</Button>
                                <Button className="facebook-btn">Facebook</Button>
                            </div>
                            <p className="signup-text">
                                Don’t have an account? <Link to="/auth/signup">Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="login-right">
                    <img className="width-85 login-bg-img" src={backImg} alt="Login background" />
                </div>
            </div>
            <Modal dimmer open={open} onClose={() => setOpen(false)} size="mini">
                <Modal.Header>Incorrect Credentials</Modal.Header>
                <Modal.Content>
                    Incorrect username/password, please try again!
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={() => setOpen(false)}>
                        Okay
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
};

export default LoginForm;