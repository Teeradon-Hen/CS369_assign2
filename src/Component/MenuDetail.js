import React from 'react'
import { useParams, useNavigate } from "react-router-dom";


export default function MenuDetail(props) {
    const params = useParams();

    console.log(params.id);
    const navigate = useNavigate();
    const Menu = props.onDetail(params.id).map(e => {
        return (
            <>
                <form style={{ fontSize: '20px', fontWeight: '700' }}>
                    <label>ชื่อรายการอาหาร</label> <br />
                    <input id="food_name" type="text" maxLength="25" value={e.food_name} required disabled /><br />

                    <label>ราคาอาหาร (บาท)*</label> <br />
                    <input id="food_price" type="number" value={e.food_price} required disabled /><br />

                    <label>รายละเอียดอาหาร (ถ้ามี ไม่เกิน 30 ตัวอักษร)</label> <br />
                    <input id="food_detail" type="text" maxLength="35" value={e.food_detail} disabled /><br />

                    <label>หมวดหมู่</label> <br />
                    <select id="food_category" required disabled>
                        <option value='' disabled >เลือกหมวดหมู่</option>
                        <option selected>เครื่องดื่ม</option>
                        <option>ของทอด</option>
                    </select>
                    <br />

                    <label>เพิ่มเติม</label> <br />
                    <input type="radio" id="food_note" value="ไม่มี" checked /><label style={{ marginLeft: '10px', fontWeight: '400' }}>ไม่มี</label><br />
                    <input type="radio" id="food_note" value="รายการอาหารแนะนำ" disabled /><label style={{ marginLeft: '10px', fontWeight: '400' }}>รายการอาหารแนะนำ</label><br />
                    <input type="radio" id="food_note" value="รายการอาหารพิเศษ" disabled /><label style={{ marginLeft: '10px', fontWeight: '400' }}>รายการอาหารพิเศษ</label><br />

                </form>

                <button onClick={() => navigate(-1)}>ย้อนกลับ</button>
            </>
        );
    })



    return (
        <div className='MenuDetail'>
            <h1>ร้านเจ๊โสเมืองทอง</h1>
            <h1 style={{ fontSize: '25px', marginBottom: '30px' }}>รายการอาหาร</h1>
            {Menu}

        </div>
    )
}
