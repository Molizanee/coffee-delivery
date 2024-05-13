import React from 'react'
import LogoCoffeDelivery from '../../assets/coffee-delivery-logo.svg'
import LocationIcon from '../../assets/location-icon.svg'
import ShoppingIcon from '../../assets/shopping-icon.svg'

export const Header = () => {
  return (
    <div className='bg-base-white h-[6.5rem] flex items-center justify-between px-40'>
      <img src={LogoCoffeDelivery} alt='Coffee Delivery' />
      <div className='flex items-center gap-3'>
        <button className='bg-brand-purpleLight p-2 rounded-md text-brand-purpleDark text-regularS flex items-center gap-1'>
          <img src={LocationIcon} alt='Location' />
          Leme, SP
        </button>
        <button className='bg-brand-yellowWhite p-2 rounded-md text-regularS flex items-center gap-1'>
          <img src={ShoppingIcon} alt='Location' />
        </button>
      </div>
    </div>
  )
}
