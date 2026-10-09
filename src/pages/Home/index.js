import React from 'react'
import OurServices from '../../pages/Home/OurServices'
import HeroSection from '../../pages/Home/HeroSection'
import ProductTab from './ProductTab'
import TopProducts from './TopProducts'
import DailySales from './DailySales'
import OurNews from './OurNews'
import Populated from './Populated'
import Testimonials from './Testimonials'
import MarqueeRunning from '../../components/MarqueeRunning'
import Brand from './Brand'

const data = {
  id: '1',
  name: 'American Journey Landmark Chicken',
  description:
    'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
  category: { name: 'Food' },
  brand: 'Whole Hearted',
  dimensions: { weight: 8 },
  available: 200,
  price: 20,
}

function Home() {
  return (
    <div>
      <HeroSection />
      <TopProducts data={data} />
      <MarqueeRunning />
      <ProductTab />
      <OurNews />
      <DailySales />
      <Populated />
      <OurServices id="widget__home" />
      <Testimonials />
      {/* <Modal
        showProductModal={showProductModal}
        handleProductModal={handleProductModal}
      >
        <ProductQuickview
          data={data}
          handleChangeQuantity={handleChangeQuantity}
          value={refQuantity.current}
          errors={errors}
          handleProductModal={handleProductModal}
        />
      </Modal> */}
      <Brand />
    </div>
  )
}

export default Home
