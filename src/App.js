import menu from './menu.json';
import './App.css';
import Menu from './Menu';
import MenuList from './MenuList';
import AddMenu from './AddMenu';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const float = {
  float: 'right',

}
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(menu)
  }, [])

  const onAddMenu = (newData) => {
    setData(oldData => [...oldData, newData]);
  }


  return (
    <div >
      <BrowserRouter>

        <header>
          <ul className='nav-bar'>
            <li><Link to="/">หน้าหลัก</Link></li>
            <li><Link to="/menu">รายการอาหาร</Link></li>
            <li><Link to="/add-menu">เพิ่มรายการอาหาร</Link></li>


            {/*<li style={float}><a class="active" href="#about">About</a></li> */}

          </ul>
          <Routes>
            <Route path='/' element={<h3>Home</h3>} />
            <Route path='/add-menu' element={<AddMenu onAddMenu={onAddMenu} newId={data.length} />} />
            <Route path='/menu' element={<><Menu /><MenuList category='ALL' data={data} /></>} />
            <Route path='/menu/kid'  element={<><Menu /><MenuList category='Kid' data={data} /></>} />
            <Route path='/menu/men'  element={<><Menu /><MenuList category='Men' data={data} /></>} />
          </Routes>
        </header>
      </BrowserRouter>

    </div>
  );
}

export default App;
