import React from 'react'
import { Link } from 'react-router-dom'
import food_image1 from '../foodimage/food1.png'
import food_image2 from '../foodimage/food2.png'
import food_image3 from '../foodimage/food3.png'

export default function Home() {

  return (
    <div>
      <div className="container">

        <div id='cf4a'>

          <img src={food_image1} width="100%" />
          <img src={food_image2} width="100%" />
          <img src={food_image3} width="100%" />
        </div>

        <div className="top-left">
          <h1 style={{ letterSpacing: '4px' }}>หิวเเล้วใช่ไหม ? </h1>
          <Link to={`menus`}><button style={{ marginLeft: '50px' }}>สั่งเลยตอนนี้</button></Link>
        </div>


      </div>
      <div className="flex-container">
        <div className="flex-item-left">
          <img src="https://assets.bonappetit.com/photos/606cdd1ea56a3b6925ed48dc/5:7/w_1785,h_2499,c_limit/Cook-This-Book-Molly-Baz-Steak.jpg" height="800px" width="100%" />
          <div className="section-brand">
            <h3>รสชาติของเนื้อ</h3>
            <p>สเต๊กที่หอม หวาน นุ่มพร้อมละลายในปาก คงไม่พ้นเนื้อริบอายที่นำเข้าจากประเทศออสเตรเลีย
              เสิร์ฟพร้อมซอสแพนครีมสไตล์ฝรั่งเศส ให้รสชาติที่เข้ากันได้อย่างลงตัว</p>

          </div>
        </div>
        <div className="flex-item-right">
          <img src="https://www.kitchensanctuary.com/wp-content/uploads/2021/09/How-to-cook-the-perfect-steak-square-FS.jpg" height="800px" width="100%" />
          <div className="section-brand">
            <h3>ความสุกแบบมีระดับ</h3>
            <p>แท้จริงแล้วระดับที่ชวนให้เนื้อของสเต๊กนุ่มละมุน ไม่แห้งและไม่เหนียว เป็นแบบ medium well ซึ่งทางร้านได้เลือกทำเพื่อความสุขในการรับประทานของทุกคน</p>

          </div>
        </div>
      </div>
    </div>
  )
}
