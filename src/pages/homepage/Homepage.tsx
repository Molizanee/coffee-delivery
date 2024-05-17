import React from 'react'
import { Header } from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard'

export const Homepage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className='p-10'>
        <CoffeeCard />
      </div>
    </>
  )
}
