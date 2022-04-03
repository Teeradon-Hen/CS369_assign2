import React, { useEffect, useState } from 'react'

export default function MenuList(props) {
     const [data, setData] = useState([])
     // console.log("data", ...data)
     // console.log(typeof (data))

     // console.log("data", data)



     useEffect(() => {
          setData(props.data)
     }, [])


     return (
          <div className='MenuList'>
               <h2>MenuList {props.category}</h2>

               {data.map(i => 
                     <p>{i.food_id}:{i.food_name} ------ {i.food_price}฿</p>
               )}




          </div>
     )
}
