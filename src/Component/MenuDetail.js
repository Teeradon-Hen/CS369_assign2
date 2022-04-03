import React from 'react'
import { useParams } from "react-router-dom";

export default function MenuDetail() {
     const params = useParams();

     console.log(params.id);
  return (
    <div>
         <h1>{params.id}</h1>
    </div>
  )
}
