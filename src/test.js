import React from 'react'
import { Link } from 'react-router-dom';

export default function Product() {
     return (
          <div className='Menu'>
               <h3>wfasdasdsadasdad</h3>
               <nav className='tab'>
                    <ul>
                         <li><Link to={`menu`}>ALL</Link></li>
                         <li><Link to={`kid`}>Kid</Link></li>
                         <li><Link to={`men`}>Men</Link></li>

                         {/* <button className="tabLinks" ><Link to="/product/men">Men</Link></button> */}
                    </ul>
               </nav>
          </div>

     )
}