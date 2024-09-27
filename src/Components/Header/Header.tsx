import { Popup } from "semantic-ui-react";
import Avatar from "../../assets/Avatar.png";
// import { ReactComponent as Logo } from "../../assets/DataDig.svg";
import { ReactComponent as Frame } from "../../assets/Frame.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="header flex flex-justify-between height-8 width-100">
      <div className="site-logo flex flex-align-center">
        <Frame className="margin-l-6 width-40 padding-b-1" />
      </div>
      <div className="avatar flex flex-align-center flex-justify-end">
        <Popup
          className="popup"
          trigger={<img className="" src={Avatar} alt="" />}
          on="click"
          content={
            <ul className="popup-content">
              <li>Logout</li>
            </ul>
          }
          position="bottom center"
        />
      </div>
    </div>
  );
}

export default Header;
