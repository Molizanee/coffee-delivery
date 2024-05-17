import React from 'react'
import CoffeImage from '../../assets/CoffeeImage.png'
import PlusIcon from '../../assets/plusIcon.svg'
import SubIcon from '../../assets/subIcon.svg'
import ShoppingBagIcon from '../../assets/ShoppingCartSimple.svg'

const CoffeeCard = () => {
  return (
    <div className='flex flex-col bg-base-card p-5 w-64 items-center rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md'>
      <div className='flex absolute -translate-y-10'>
        <img src={CoffeImage} alt='Café' style={{ height: '120px' }} />
      </div>
      <div className='flex flex-col items-center pt-24 h-full gap-5'>
        <span className='bg-brand-yellowWhite py-1 px-2 rounded-full font-semibold text-regularS text-brand-yellowDark'>
          Tradicional
        </span>
        <div className='flex flex-col items-center gap-1'>
          <span className='font-bold text-regularM text-base-subTitle'>
            Expresso Tradicional
          </span>
          <span className='text-regularS text-base-label'>
            O tradicional café feito com água quente e grãos moídos
          </span>
        </div>
        <div className='flex items-center justify-between w-full'>
          <span className='text-base-text'>
            R$ <span className='text-regularM font-bold'>9,90</span>
          </span>
          <div className='flex items-center gap-2'>
            <span className='flex items-center justify-center p-2 gap-1 bg-base-button rounded-md'>
              <img src={SubIcon} alt='Sub' />
              <span className='text-regularM font-bold'>1</span>
              <img src={PlusIcon} alt='Plus' />
            </span>
            <button className='bg-brand-purpleDark p-2 rounded-md'>
              <img src={ShoppingBagIcon} alt='Shopping Bag' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard
