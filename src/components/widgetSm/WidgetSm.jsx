import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility"
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods.js"

export default function WidgetSm() {
  const [ users , setUsers ] = useState([]);

  useEffect(()=> {
    const getUsers = async () => {

      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data)
        
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, [])


  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) =>(
        <li className="widgetSmListItem">
          <img
            src={user.img || "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>

        ))}
      </ul>
    </div>
  );
}
