import Menu from './menu.json';
import './App.css';
import logo from './Frame_2.png'
import Home from './Component/Home';
import Menus from './Component/Menus';
import AddMenu from './Component/AddMenu';
import MenuDetail from './Component/MenuDetail';


import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const float = {
  float: 'right',

}
function App() {
  const [menus, setMenu] = useState([])

  useEffect(() => {
    setMenu(Menu)

  }, [])
  console.log(menus)

  const onAddMenu = (newMenu) => {
    setMenu(oldMenu => [...oldMenu, newMenu]);
    console.log(menus)
  }

  const onDelete = (id, event) => {
    console.log("on Delete")
    console.log(id);
    let menu = menus.filter(e => {
      return e.food_id !== id;
    })
    setMenu(menu);
    event.stopPropagation();
    event.preventDefault();
  }

  const onDetail = (id) => {
    console.log("on Detail")
    console.log(id);
    let menu = menus.filter(e => {
      return e.food_id == id;
    })
    return menu;
  }

  return (
    <div >
      <BrowserRouter>

        <header>
          <div style={{ backgroundColor: '#EDDCD9' }}><img src={logo} /></div>
          <ul className='nav-bar'>
            <li><Link to="/">หน้าหลัก</Link></li>
            <li><Link to="/menus">รายการอาหาร</Link></li>
            <li><Link to="/add-menu">เพิ่มรายการอาหาร</Link></li>
          </ul>


          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='menus' element={<Menus menus={menus} onDelete={onDelete} />} />
            <Route path='menus/:id' element={<MenuDetail onDetail={onDetail} />} />

            <Route path='add-menu' element={<AddMenu onAddMenu={onAddMenu} newId={menus.length + 1} />} />
          </Routes>
        </header>
      </BrowserRouter>

    </div>
  );
}

export default App;
