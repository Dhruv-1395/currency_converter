import React from 'react'
import Data from './Data'

const Dropdown = ({currency,setcurrency}) => {
    
    
  return (
    <>
        <select value={currency} onChange={(e)=>setcurrency(e.target.value)}>
            {
                Data.map((item,index)=>{
                    return(
                        <option key={item.country} value={item.value}>{item.country}</option>
                    );
                })
            }
        </select>
    </>
  )
}

export default Dropdown