import React from 'react'
import { useParams, Link } from 'react-router-dom'
import cars from '../data/cars'
import Carousel from '../components/Carousel'
import View360 from '../components/View360'
import PriceCalculator from '../components/PriceCalculator'
import EmiCalculator from '../components/EmiCalculator'

export default function CarDetails() {
  const { id } = useParams()
  const car = cars.find(c => c.id === Number(id))

  if (!car)
    return (
      <div className="p-8 text-gray-900 dark:text-white">
        Car not found <Link to="/" className="text-teal-500 underline">Home</Link>
      </div>
    )

  return (
    <div className="min-h-screen pt-24 pb-12 
                    bg-gray-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-gray-900 dark:to-black 
                    text-gray-900 dark:text-white 
                    transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/" className="text-sm text-teal-600 dark:text-teal-400 underline hover:opacity-80">
          ← Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Left side */}
          <div>
            <Carousel images={car.images} />
            <View360 carId={car.id} framesCount={9} />
          </div>

          {/* Right side */}
          <aside className="flex flex-col gap-6">
            {/* Car Info */}
            <div className="rounded-2xl p-6 
                            bg-white dark:bg-slate-800 
                            shadow-md dark:shadow-xl 
                            border border-gray-200 dark:border-gray-700
                            transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{car.model}</h2>
              <p className="text-gray-600 dark:text-gray-400">{car.year} • {car.mileage}</p>
              <div className="text-3xl font-extrabold text-teal-600 dark:text-teal-300 mt-4">
                ₹{car.price.toLocaleString()}
              </div>
            </div>

            {/* Price Calculator */}
            <PriceCalculator basePrice={car.price} />

            {/* EMI Calculator */}
            <EmiCalculator carPrice={car.price} />
          </aside>
        </div>
      </div>
    </div>
  )
}
