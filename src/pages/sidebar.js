import { Outlet, Link,NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, SubMenu,Menu,menuClasses, MenuItem, useProSidebar , sidebarClasses, sidebarContent,sidebarHeader } from 'react-pro-sidebar';
import {
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaList,
  FaRegLaughWink,
  FaHear,
  FaMapMarkerAlt
  
} from 'react-icons/fa';

import Layout from "./Layout";
import Home from "./Home";

import Ho from './button';
import './side.css'

function Side() {
  const { collapseSidebar } = useProSidebar();
  const { collapsed } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '724px' }}>
      <Sidebar transitionDuration={1000} 
      image={"https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"}
      rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: 'rgb(0 33 67 / 79%)',
      height:'103%',
      color:'#adadad',
      
      
      
    },
  }}
  
  
  >   
  <sidebarHeader style={{ marginBottom: '24px', marginTop: '16px' }}>
  <Menu iconShape="circle">
  {(collapsed? <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={() => collapseSidebar()}
            ></MenuItem>  :  
            <MenuItem

            suffix={<FaAngleDoubleLeft />}
            onClick={() => collapseSidebar()}
            rootStyles={{
              ['.' + menuClasses.button]: {
                
                color: '#8ba1b7',
                '&:hover': {
                  backgroundColor: '#8ba1b700 !important',
                  color: 'white',
                  
                },
              },
            }}

          >
            <div
              style={{
                padding: '9px',
                textTransform: 'uppercase',
                fontWeight: '700',
                letterSpacing:'2px',
                fontSize: 20,
                letterSpacing: '1px',
                color:'rgb(0, 152, 229)'
              }}
            >
              ALAS
            </div>
          </MenuItem>)}
            
         

</Menu>
</sidebarHeader>
        <sidebarContent>
        <Menu iconShape="circle" rootStyles={{
            ['.' + menuClasses.button]: {
              
              color: '#8ba1b7',
              '&:hover': {
                backgroundColor: '#00458b',
                color: 'white',
                
              },
            },
          }}  >
           <Link   to="/home"> <MenuItem
            
            icon={<span style={{}} 
              className="child bounce ">
                <FaTachometerAlt  className="ico"/>
                </span>}
            suffix={<span className="badge red">NEW</span>}
            style={{textAlign:"initial"}}
            >Home</MenuItem></Link>
          {/* <MenuItem icon={<FaGem />}>Components </MenuItem> */}
          <Link to="/Alas" className="kk">
          <MenuItem icon={<span className="child bounce"><FaGem className="ico"/></span>} suffix={<span className="badge yellow">1</span>} style={{textAlign:"initial"}}   >
            Alas 
          </MenuItem></Link>
          <Link to="/Map" className="kk">
          <MenuItem icon={<span className="child bounce"><FaMapMarkerAlt className="ico"/> </span>} style={{textAlign:"initial"}}   >
            Maps 
          </MenuItem></Link>
          <Link to="/Alas" className="kk">
          <MenuItem icon={<span className="child bounce"><FaTachometerAlt className="ico"/></span>} style={{textAlign:"initial"}}   >
            Weather 
          </MenuItem></Link>
          
          {/* <SubMenu label={'Multi Level'} icon={<span className="child bounce"><FaList className="icon"/> </span>} style={{textAlign:"initial"}}>
            <MenuItem>Submenu 1 </MenuItem>
            <MenuItem>Submenu 2 </MenuItem>
            <SubMenu label={'Submenu 3'}>
              <MenuItem>Submenu 3.1 </MenuItem>
              <MenuItem>Submenu 3.2 </MenuItem>
            </SubMenu>
          </SubMenu> */}
        </Menu>
        </sidebarContent>
      </Sidebar>
      <Outlet/>
      <main>
        {/* <button onClick={() => collapseSidebar()}>Collapse</button> */}
      </main>
    </div>

  );
}

export default Side;

