import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types'

export default function useOrder() {
   const [order, setOrder] = useState<OrderItem[]>([])

   const addItem = (item:MenuItem) => {
      const itemExist = order.find(orderItem => orderItem.id === item.id)
      if(itemExist) {
         // ya existe y y ano lo agrega

         // buscamos el item seleccionado e incrementamos su quantity
         const updateOrder = order.map(orderItem => orderItem.id === item.id 
            ? {...orderItem, quantity: orderItem.quantity + 1} 
            : orderItem)
            setOrder(updateOrder)
      } else {
         // no existe y lo agrega
         const newItem = {...item, quantity: 1}
         setOrder([...order, newItem])
      }

   }

   return {
      addItem,
      order,
   }
}