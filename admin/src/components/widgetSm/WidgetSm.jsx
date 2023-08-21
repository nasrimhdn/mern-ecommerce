import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {user1Request} from "../../redux/requestMethods";

export default function WidgetSm() {

  const [users1, setUsers1] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await user1Request.get("users1/?new=true");
        setUsers1(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users1.map((user1) => (
          <li className="widgetSmListItem" key={user1._id}>
            <img
              src={
                user1.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser1">
              <span className="widgetSmUser1name">{user1.user1name}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}