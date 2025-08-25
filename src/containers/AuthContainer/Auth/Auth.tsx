import { Outlet } from "react-router-dom";
import { ReactComponent as Bot } from "../../../assets/SVGs/Bot.svg";
import "./Auth.scss";

function Auth() {
    return (
        <div className="flex flex-column flex-justify-center flex-align-center height-100 width-100">
            <div className="flex flex-align-center height-80 width-100">
                <div className="auth-container  height-100">
                    <div className="flex title-container">
                        <Bot />
                        <p className="title">DataDig</p>
                    </div>
                    <div className="auth-outlet">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
