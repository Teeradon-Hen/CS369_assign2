import React, { useEffect, useState } from 'react'

export default function AddMenu(props) {

     const handleSubmit = e => {
          e.preventDefault();
          let food_id = props.newId,
               food_category = e.target.food_category.value,
               food_note = e.target.food_note.value,
               data = { food_id, food_name, food_price, food_detail, food_category, food_note }
          setFoodName('')
          setFoodPrice('')
          setFoodDetail('')
          props.onAddMenu(data)
     }
     useEffect(() => {
          var radio = document.getElementsByName('food_note')
          radio[0].setAttribute('checked', 'checked');
     }, [])

     const [food_name, setFoodName] = useState('')
     const [food_price, setFoodPrice] = useState('')
     const [food_detail, setFoodDetail] = useState('')
     const onFoodNameChange = e => {
          setFoodName(e.target.value)
     }
     const onFoodPriceChange = e => {
          setFoodPrice(e.target.value)

     }
     const onFoodDetailChange = e => {
          setFoodDetail(e.target.value)
     }
     return (
          <div className='AddMenu'>
               <h1>ร้านเจ๊โสเมืองทอง</h1>
               <h1 style={{ fontSize: '25px', marginBottom: '30px' }}>แก้ไขรายการอาหาร</h1>
               <form style={{ fontSize: '20px', fontWeight: '700' }} onSubmit={handleSubmit}>


                    <label>ชื่อรายการอาหาร</label> <br />
                    <input id="food_name" type="text" maxLength="25" placeholder='ใส่รายการอาหารที่นี่' value={food_name} onChange={onFoodNameChange} required /><br />

                    <label>ราคาอาหาร (บาท)*</label> <br />
                    <input id="food_price" type="number" placeholder='ใส่ราคาที่นี่' min='0' value={food_price} onChange={onFoodPriceChange} required /><br />

                    <label>รายละเอียดอาหาร (ถ้ามี ไม่เกิน 30 ตัวอักษร)</label> <br />
                    <input id="food_detail" type="text" maxLength="35" placeholder='ใส่รายละเอียดอาหารที่นี่' value={food_detail} onChange={onFoodDetailChange} /><br />

                    <label>หมวดหมู่</label> <br />
                    <select id="food_category" placeholder='asdasd' required >
                         <option value="" disabled selected hidden>เลือกหมวดหมู่</option>
                         <option name="food_category">เครื่องดื่ม</option>
                         <option name="food_category">ของทอด</option>
                         <option name="food_category">สเต๊ก</option>
                         <option name="food_category">ของทานเล่น</option>

                    </select>
                    <br />

                    <label>เพิ่มเติม</label> <br />
                    <input type="radio" name="food_note" id="food_note" value="0" /><label style={{ marginLeft: '10px', fontWeight: '400' }}>ไม่มี</label><br />
                    <input type="radio" name="food_note" id="food_note" value="1" /><label style={{ marginLeft: '10px', fontWeight: '400' }}>รายการอาหารแนะนำ</label><br />
                    <input type="radio" name="food_note" id="food_note" value="2" /><label style={{ marginLeft: '10px', fontWeight: '400' }}>รายการอาหารพิเศษ</label><br />

                    <button type="submit" >สร้างรายการอาหาร</button>

               </form>

          </div>
     )
}
