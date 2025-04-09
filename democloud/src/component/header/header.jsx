import React, { useContext } from "react"; 
import './header.css'
import { Button } from "@mui/material";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

import { MyContext } from "../../home/home";

const Header = ()=>{
  const context = useContext(MyContext);
  
    return(
        <>
      <div className="header-section">
      <div className="sidebar-btn">
                <Button
                  onClick={() => context.setSidebardrop(!context.sidebardrop)}
                >
                  {context.sidebardrop === false ? (
                    <MdMenuOpen />
                  ) : (
                    <MdOutlineMenu />
                  )}
                </Button>
              </div>
      </div>
        </>
    )
}

export default Header;