import React from 'react'

export default function AddMenu(props) {

     const handleSubmit = e => {
          e.preventDefault();
          let food_id = props.newId,
               food_name = e.target.food_name.value,
               food_price = e.target.food_price.value,
               food_detail = e.target.food_detail.value,
               food_category = e.target.food_category.value,
               food_note = e.target.food_note.value,
               data = { food_id, food_name, food_price, food_detail, food_category, food_note }

          props.onAddMenu(data)
     }
     return (
          <div className='AddMenu'>
               <h1>ร้านเจ๊โสเมืองทอง</h1>
               <h1 style={{ fontSize: '25px', marginBottom: '30px' }}>แก้ไขรายการอาหาร</h1>
               <form style={{ fontSize: '20px', fontWeight: '700' }} onSubmit={handleSubmit}>


                    <label>ชื่อรายการอาหาร</label> <br />
                    <input id="food_name" type="text" maxLength="25" placeholder='ใส่รายการอาหารที่นี่' required /><br />

                    <label>ราคาอาหาร (บาท)*</label> <br />
                    <input id="food_price" type="number" placeholder='ใส่ราคาที่นี่' required /><br />

                    <label>รายละเอียดอาหาร (ถ้ามี ไม่เกิน 30 ตัวอักษร)</label> <br />
                    <input id="food_detail" type="text" maxLength="35" placeholder='ใส่รายละเอียดอาหารที่นี่' /><br />

                    <label>หมวดหมู่</label> <br />
                    <select id="food_category" required >
                         <option value='' disabled selected >เลือกหมวดหมู่</option>
                         <option>เครื่องดื่ม</option>
                         <option>ของทอด</option>

                    </select>
                    <br />

                    <label>เพิ่มเติม</label> <br />
                    <input type="radio" name="foodnote" id="food_note" value="ไม่มี" checked/><label style={{ marginLeft: '10px', fontWeight: '400' }}>ไม่มี</label><br />
                    <input type="radio" name="foodnote" id="food_note" value="รายการอาหารแนะนำ" /><label style={{ marginLeft: '10px', fontWeight: '400' }}>รายการอาหารแนะนำ</label><br />
                    <input type="radio" name="foodnote" id="food_note" value="รายการอาหารพิเศษ" /><label style={{ marginLeft: '10px', fontWeight: '400' }}>รายการอาหารพิเศษ</label><br />

                    <button type="submit" >สร้างรายการอาหาร</button>

               </form>

          </div>
     )
}
