import React from 'react'
import cars from '../data/cars'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-slate-900 dark:via-gray-900 dark:to-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">
            Welcome to <span className="text-teal-500 dark:text-teal-400">Car Club</span>
          </h1>
          <p className="text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            Explore premium cars, interactive 360° previews, and calculate EMI on the fly.
          </p>
        </header>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map(car => (
            <div
              key={car.id}
              className="card p-4 rounded-2xl transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900"
            >
              <img
                src={car.images[0]}
                alt={car.model}
                className="w-full h-44 object-cover rounded-xl shadow-inner"
              />
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <h3 className="text-black dark:text-white font-bold">{car.model}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{car.year} • {car.mileage}</p>
                </div>
                <div className="text-right">
                  <div className="text-teal-500 dark:text-teal-400 font-extrabold">
                    ₹{car.price.toLocaleString()}
                  </div>
                  <Link
                    to={`/car/${car.id}`}
                    className="mt-3 inline-block px-4 py-2 rounded-lg text-sm text-white dark:text-black bg-teal-500 dark:bg-teal-400 hover:opacity-90 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
