import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../Components/Home'
import ProductDetail from '../Components/ProductDetail'
import AddCart from '../Components/AddCart'
import Address from '../Components/Address'

export default function Routes() {
    const routes=createBrowserRouter([
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/product/:id',
          element:<ProductDetail/>
        },
        {
          path:'/cart',
          element:<AddCart/>
        },
        {
          path:'/delivery',
          element:<Address/>
        }
    ])
  return (
    <div>
        <RouterProvider router={routes} />
        
      
    </div>
  )
}
