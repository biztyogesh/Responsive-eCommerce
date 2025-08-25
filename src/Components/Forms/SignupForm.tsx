import { useForm } from "react-hook-form";
import { Button } from "semantic-ui-react";
import AuthInput from "../AuthInput/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import "./Forms.scss";
import backImg from "../../assets/images/back.png";

interface SignupFormProps {
  onSignup: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const validation = { required: true };

  const onSubmit = () => {
    onSignup();
    navigate("/home");
  };

  return (
    <div className="login-container flex flex-justify-center flex-align-center width-100 height-100 background-primary-color">
      <div className="login-card">
        <div className="login-left">
          <div className="login-box">
            <h2 className="login-title">Create New Account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group form-row">
                <AuthInput
                  className="width-48"
                  name="First Name"
                  register={register}
                  validation={validation}
                  errors={errors}
                  setValue={setValue}
                  trigger={trigger}
                  placeholder="First Name"
                />
                <AuthInput
                  className="width-48"
                  name="Last Name"
                  register={register}
                  validation={validation}
                  errors={errors}
                  setValue={setValue}
                  trigger={trigger}
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <AuthInput
                  name="Email"
                  register={register}
                  validation={validation}
                  errors={errors}
                  setValue={setValue}
                  trigger={trigger}
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <AuthInput
                  name="Password"
                  register={register}
                  type="password"
                  validation={validation}
                  errors={errors}
                  setValue={setValue}
                  trigger={trigger}
                  placeholder="Password"
                />
              </div>
              <Button className="login-btn" type="submit">
                Create Account
              </Button>
              <p className="signup-text">
                Already a member? <Link to="/auth/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="login-right">
          <img src={backImg} alt="Signup background" className="login-bg-img" />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;