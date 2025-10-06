import React, { useState, useEffect } from 'react'

export default function PriceCalculator({ basePrice = 0 }) {
  const [invites, setInvites] = useState(0)
  const [duration, setDuration] = useState(0)
  const [result, setResult] = useState(0)

  useEffect(() => {
    const base = basePrice ? Math.round(basePrice * 0.01) : 0
    setResult(base + invites * 150 + duration * 500)
  }, [invites, duration, basePrice])

  return (
    <div
      className="card p-6 rounded-2xl mt-6 
                 bg-white dark:bg-slate-800 
                 shadow-md dark:shadow-lg 
                 border border-gray-200 dark:border-gray-700 
                 transition-all duration-500"
    >
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
        Price Calculator
      </h4>

      <div className="space-y-4 text-sm mt-4">
        {/* Number of Invites */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Number of Invites
          </label>
          <input
            type="number"
            value={invites}
            onChange={(e) => setInvites(Number(e.target.value))}
            className="w-full p-2 rounded-md 
                       bg-gray-100 dark:bg-slate-900 
                       border border-gray-300 dark:border-gray-700 
                       text-gray-900 dark:text-white 
                       focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Duration (hours)
          </label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full p-2 rounded-md 
                       bg-gray-100 dark:bg-slate-900 
                       border border-gray-300 dark:border-gray-700 
                       text-gray-900 dark:text-white 
                       focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Result */}
        <div
          className="p-4 rounded-md text-center 
                     bg-gray-100 dark:bg-slate-900 
                     border border-gray-300 dark:border-gray-700 
                     transition-colors duration-500"
        >
          <div className="text-gray-700 dark:text-gray-300">Calculated Value</div>
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-300 mt-1">
            ₹{result.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}
