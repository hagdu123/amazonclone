import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt='' />


        <div className="home__row">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={229.99}
            image="https://m.media-amazon.com/images/I/81O+GNdkzKL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />

        </div>

        <div className="home__row">
        <Product
           title="Samsung Galaxy Watch 6 Classic – Advanced Fitness Tracking, Sleep Coaching & Health Monitoring Smartwatch"
            price={199.99}
            image="https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
           title="Amazon Echo (3rd Gen) | Smart Speaker with Alexa and Premium Sound"
            price={98.99}
            image="https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            title="Apple iPad Pro (12.9-inch, M2 Chip, Liquid Retina XDR Display, 512GB Storage, Wi-Fi)"
            price={598.99}
            image="https://m.media-amazon.com/images/I/816ctt5WV5L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />

        </div>

        <div className="home__row">

          <Product
          title="Samsung 49-Inch Curved Gaming Monitor with Super Ultra-Wide Dual WQHD Display"
           price={1094.98}
           image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg"
           rating={4}
          />
        </div>

      </div>
    </div>
  )
}

export default Home