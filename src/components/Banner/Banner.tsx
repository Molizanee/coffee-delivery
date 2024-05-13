import React from 'react'

import TimerRoundedIcon from '../../assets/timer-rounded-icon.svg'
import CoffeeRoundedIcon from '../../assets/coffee-rounded-icon.svg'
import ShoppingRoundedIcon from '../../assets/shopping-rounded-icon.svg'
import BoxRoundedIcon from '../../assets/box-rounded-icon.svg'
import CoffeeBrandImage from '../../assets/coffee.png'

const Banner = () => {
  return (
    <div className='flex items-center px-40 py-20 justify-between'>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-3xl'>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h3 className='text-regularL'>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </div>
        <div className='flex gap-10'>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center text-regularS text-base gap-3'>
              <img src={ShoppingRoundedIcon} alt='Timer' />
              <span>Compra simples e segura</span>
            </div>
            <div className='flex items-center text-regularS text-base gap-3'>
              <img src={TimerRoundedIcon} alt='Timer' />
              <span>Entrega rápida e rastreada</span>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center text-regularS text-base gap-3'>
              <img src={BoxRoundedIcon} alt='Timer' />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className='flex items-center text-regularS text-base gap-3'>
              <img src={CoffeeRoundedIcon} alt='Timer' />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
      </div>
      <img src={CoffeeBrandImage} alt='Coffee' width={476} />
    </div>
  )
}

export default Banner
