import React,{ useState } from "react";
import { FaBars } from "react-icons/fa"
import { Dashboard, Info, Analytics, Home } from '@mui/icons-material';
import { NavLink } from "react-router-dom"; 
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import TimelineIcon from '@mui/icons-material/Timeline';

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => !setIsOpen(!isOpen)
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<Home/>
        },
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<Dashboard/>
        },
        {
            path:"/about",
            name:"About",
            icon:<Info/>
        },
        {
            path:"/salary",
            name:"Salary",
            icon:<Analytics/>
        },
        {
            path:"/leave-portal",
            name:"Leave Portal",
            icon:<TimelineIcon/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<ContactPhoneIcon/>
        }
    ]
  return (
  <div className="container">
      <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
          <div className="top_section">
              <h1 style={{display: isOpen ? "block" : "none"}}className="logo">Zoom</h1>
              <div style={{marginLeft: isOpen ? "50px" : "0px"}}className="bars">
                  <FaBars onClick={toggle}/>
              </div>
          </div>
          {
               menuItem.map((item,index)=>(
                  <NavLink to={item.path} key={index} className="link" activeclassName="active">
                      <div className="icon">{item.icon}</div>
                      <div style={{display: isOpen ? "block" : "none"}}className="link_text">{item.name}</div>
                  </NavLink>
              ))
          }
      </div>
      <main>{children}</main>
    </div>
    )
};
export default  Sidebar;