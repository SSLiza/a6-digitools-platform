import React from 'react'

import { RiErrorWarningFill } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";





export default function Empty() {
    return (
        <div className='p-10 space-y-10 mx-auto'>
            
            <HiOutlineShoppingCart
 className='mx-auto text-6xl' />

            <h1 className='text-6xl'>Your cart is empty</h1>
    
        </div>
    )
}