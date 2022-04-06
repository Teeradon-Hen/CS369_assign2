import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png'

export default function Header() {
     const location = useLocation()
     useEffect(() => {
          let tabLinks = document.getElementsByClassName("tab");

          if (location.pathname.match('/menus')) {
               tabLinks[0].className = tabLinks[0].className.replace(" active", "");
               tabLinks[2].className = tabLinks[2].className.replace(" active", "");
               tabLinks[1].className += " active";
          }
          else if (location.pathname == '/add-menu') {
               tabLinks[0].className = tabLinks[0].className.replace(" active", "");
               tabLinks[1].className = tabLinks[1].className.replace(" active", "");
               tabLinks[2].className += " active";
          }
          else if(location.pathname == '/') {
               tabLinks[0].className += " active";
               tabLinks[1].className = tabLinks[1].className.replace(" active", "");
               tabLinks[2].className = tabLinks[2].className.replace(" active", "");
          }
     }, [location])

     return (
          <>
               <div className='header'>
                    <img src={logo} />
               </div>
               <ul className='nav-bar'>
                    <li className='tab active' ><Link to="/">หน้าหลัก</Link></li>
                    <li className='tab' ><Link to="/menus">รายการอาหาร</Link></li>
                    <li className='tab' ><Link to="/add-menu">เพิ่มรายการอาหาร</Link></li>
               </ul>
          </>
     )
}
