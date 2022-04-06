import React from 'react';
import { Link } from 'react-router-dom';

const Menus = ({ menus, onDelete }) => {
    const MenuList = menus.map(e => {
        return (
            </*Link to={`${e.food_id}`} */>
                <Link to={`${e.food_id}`}>
                    <div key={e.food_id} className='card'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                <div style={{ display: 'flex' }}>
                                    <h3 className='flex4' style={{ fontSize: '25px' }}>{e.food_name} </h3>
                                    <span onClick={(event) => onDelete(e.food_id, event)}>
                                        <i className='fa-solid fa-trash-can righttext flex1' style={{ paddingTop: '30px', color: '#264143' }}></i>
                                    </span>
                                </div>
                                <p style={{ fontSize: '20px' }}>{e.food_detail}</p>
                            </div>
                            <h4 className='cardprice'>{e.food_price}฿</h4>
                        </div>
                    </div>
                </Link>
            </>
        );
    });

    return (
        <>
            {/* style={{ marginLeft: '50px' }} */}
            <div className='Menu'>
                <h1>ร้านเจ๊โสเมืองทอง</h1>
                <h1 style={{ fontSize: '25px', marginBottom: '30px' }}>รายการอาหาร</h1>
                {MenuList.length !== 0 ? MenuList : <p style={{ fontSize: '30px', color: 'rgba(222, 84, 153, 0.5)', textAlign: 'center' }}>ไม่มีรายการอาหาร</p>}
            </div>
        </>
    )
}

export default Menus;