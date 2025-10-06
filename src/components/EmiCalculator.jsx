import React, { useEffect, useState } from 'react'

// EMI Calculator (Light/Dark theme adaptive)
export default function EmiCalculator({ carPrice = 500000 }) {
  const maxPrice = Number(carPrice) || 500000
  const [downPayment, setDownPayment] = useState(0)
  const [months, setMonths] = useState(36)
  const [rate, setRate] = useState(9.5)

  useEffect(() => {
    if (Number(downPayment) > maxPrice) setDownPayment(maxPrice)
  }, [downPayment, maxPrice])

  const principal = Math.max(0, maxPrice - Number(downPayment))
  const monthlyRate = Number(rate) / (12 * 100)
  const N = Number(months) || 1

  let emi = 0
  if (principal <= 0) emi = 0
  else if (monthlyRate === 0) emi = principal / N
  else {
    const num = principal * monthlyRate * Math.pow(1 + monthlyRate, N)
    const den = Math.pow(1 + monthlyRate, N) - 1
    emi = den ? num / den : 0
  }

  const totalPayment = emi * N
  const totalInterest = totalPayment - principal

  return (
    <div
      id="emi"
      className="mt-6 card p-6 rounded-2xl 
                 bg-white dark:bg-slate-800 
                 shadow-md dark:shadow-lg 
                 border border-gray-200 dark:border-gray-700 
                 transition-all duration-500"
    >
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        EMI Calculator
      </h4>

      <div className="text-sm space-y-4">
        {/* Car Price */}
        <div
          className="p-3 rounded-md 
                     bg-gray-100 dark:bg-slate-900 
                     border border-gray-300 dark:border-gray-700 
                     flex justify-between items-center"
        >
          <div className="text-gray-700 dark:text-gray-300">Car Price</div>
          <div className="font-bold text-gray-900 dark:text-teal-300">
            ₹{maxPrice.toLocaleString()}
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <div className="flex justify-between mb-1">
            <div className="text-gray-700 dark:text-gray-300">Down Payment</div>
            <div className="text-gray-900 dark:text-teal-300 font-semibold">
              ₹{Number(downPayment).toLocaleString()}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={maxPrice}
            step="500"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full accent-teal-500 cursor-pointer"
          />
        </div>

        {/* Tenure & Rate */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="flex justify-between mb-1">
              <div className="text-gray-700 dark:text-gray-300">
                Tenure (months)
              </div>
              <div className="text-gray-900 dark:text-teal-300 font-semibold">
                {months}
              </div>
            </div>
            <input
              type="range"
              min="6"
              max="120"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-teal-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <div className="text-gray-700 dark:text-gray-300">
                Interest % (annual)
              </div>
              <div className="text-gray-900 dark:text-teal-300 font-semibold">
                {rate}%
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-teal-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Result */}
        <div
          className="p-4 rounded-md text-center 
                     bg-gray-100 dark:bg-slate-900 
                     border border-gray-300 dark:border-gray-700 
                     transition-colors duration-500"
        >
          <div className="text-sm text-gray-700 dark:text-gray-300">
            Loan Principal
          </div>
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-300 mt-1">
            ₹{Math.round(principal).toLocaleString()}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Monthly EMI:{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              ₹{Math.round(emi).toLocaleString()}
            </span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Total Interest: ₹{Math.round(totalInterest).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}
