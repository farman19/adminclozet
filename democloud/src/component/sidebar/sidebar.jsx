import React,{useState} from "react";
import './sidebar.css'
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Sidebar = ()=>{
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleDropmenu, setIsToggleDropmenu] = useState(false)

const isOpenDropmenu = (index)=>{
  setActiveTab(index);
  setIsToggleDropmenu(!isToggleDropmenu)
}
    return(
        <>
        <div className="sidebar-section">
          <ul>
            <li>
              <Link>
               <Button>
                    <span className="side-icon"><MdDashboard/></span>
                    Dashboard
                    <span className="arrow"><IoIosArrowForward/></span>
                </Button>
                </Link>
            </li>
            
            <li>
            
               <Button className={`${activeTab===1  ? 'active':""}`} onClick={()=>isOpenDropmenu(1)}>
                    <span className="side-icon"><MdDashboard/></span>
                  Seller Section
                    <span className="arrow"><IoIosArrowForward/></span>
                </Button>
                <div className={`dropmenuwraper  ${activeTab===1 && isToggleDropmenu===true  ? 'colapse': 'colapsed'}`}>
                      <ul className="dropmenu">
                        <li><Link to="/addnewseller">Add New Seller</Link></li>
                        <li><Link to="sellerlist">Seller list</Link></li>
                       
                      </ul>
                      </div>
                
            </li>
           

          
          </ul>
        </div>
        </>
    )
}

export default Sidebar;