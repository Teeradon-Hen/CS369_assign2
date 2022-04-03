import React from 'react'

export default function AddMenu(props) {

     const handleSubmit = e =>{
          e.preventDefault();
          let food_id = props.newId, 
          food_name = e.target.food_name.value, 
          food_price = e.target.food_price.value,
          food_detail = e.target.food_detail.value, 
          food_category = e.target.food_category.value,
          food_note = e.target.food_note.value,
          data = {food_id,food_name,food_price,food_detail,food_category,food_note}
         
          props.onAddMenu(data)
     }
     return (
          <div className='AddMenu'>
               <form onSubmit={handleSubmit}>

 
                    <label>ชื่อรายการอาหาร</label> <br />
                    <input id="food_name" type="text" required/><br />

                    <label>ราคาอาหาร (บาท)*</label> <br />
                    <input id="food_price" type="number"required/><br />

                    <label>รายละเอียดอาหาร (ถ้ามี ไม่เกิน 30 ตัวอักษร)</label> <br />
                    <input id="food_detail" type="text" maxLength="30"/><br />

                    <label>หมวดหมู่</label> <br />
                    <select id="food_category" required>
                         <option>เครื่องดื่ม</option>
                         <option>ของทอด</option>

                    </select>
                    <br />
                    <label>เพิ่มเติม</label> <br />
                    <input type="radio" id="food_note" name="age" value="ไม่มี"/><label for="age1">ไม่มี</label><br />
                    <input type="radio" id="food_note" name="age" value="รายการอาหารแนะนำ" /><label for="age1">รายการอาหารแนะนำ</label><br />

                    <input type="radio" id="food_note" name="age" value="รายการอาหารพิเศษ" /><label for="age1">รายการอาหารพิเศษ</label><br />

                    <button type="submit" >สร้างรายการอาหาร</button>

               </form>

          </div>
     )
}
