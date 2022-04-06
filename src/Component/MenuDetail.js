import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";


export default function MenuDetail(props) {
    const params = useParams();
    const navigate = useNavigate();

    const [menu, setMenu] = useState([])
    useEffect(() => {
        props.onDetail(params.id).map(e => {
            setMenu(e)
        })
    }, [])

    var radio = document.getElementsByName('food_note')
    radio.forEach(element => {
        if (menu.food_note == element.value)
            element.setAttribute('checked', 'checked');
        else
            element.setAttribute('disabled', 'disabled');
    })

    var option = document.getElementsByName('food_category')
    option.forEach(element => {
        if (menu.food_category == element.textContent)
            element.setAttribute('selected', 'selected');
        else
            element.setAttribute('disabled', 'disabled');
    })

    return (
        <div className='MenuDetail'>
            <h1>ร้านเจ๊โสเมืองทอง</h1>
            <h1 style={{ fontSize: '25px', marginBottom: '30px' }}>ข้อมูลรายการอาหาร</h1>

            <form style={{ fontSize: '20px', fontWeight: '700' }}>
                <label>ชื่อรายการอาหาร</label> <br />
                <input id="food_name" type="text" maxLength="25" value={menu.food_name} required disabled /><br />

                <label>ราคาอาหาร (บาท)*</label> <br />
                <input id="food_price" type="number" value={menu.food_price} required disabled /><br />

                <label>รายละเอียดอาหาร (ถ้ามี ไม่เกิน 30 ตัวอักษร)</label> <br />
                <input id="food_detail" type="text" maxLength="35" value={menu.food_detail} disabled /><br />

                <label>หมวดหมู่</label> <br />
                <select id="food_category" required disabled>
                    <option disabled >เลือกหมวดหมู่</option>
                    <option name="food_category">เครื่องดื่ม</option>
                    <option name="food_category">ของทอด</option>
                    <option name="food_category">สเต๊ก</option>
                    <option name="food_category">ของทานเล่น</option>
                </select>
                <br />

                <label>เพิ่มเติม</label> <br />
                <input type="radio" id="food_note" name="food_note" value="0" /><label style={{ marginLeft: '10px', fontWeight: '400' }}>ไม่มี</label><br />
                <input type="radio" id="food_note" name="food_note" value="1" /><label style={{ marginLeft: '10px', fontWeight: '400' }}>รายการอาหารแนะนำ</label><br />
                <input type="radio" id="food_note" name="food_note" value="2" /><label style={{ marginLeft: '10px', fontWeight: '400' }}>รายการอาหารพิเศษ</label><br />

            </form>

            <button onClick={() => navigate(-1)}>ย้อนกลับ</button>


        </div>
    )
}
