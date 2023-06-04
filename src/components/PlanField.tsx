import React from 'react'
interface PlanFieldProps {
  register: any
  label: string
  value: string
  img: string
  price: string
  isMonthly: boolean
}

const PlanField: React.FC<PlanFieldProps> = ({ register, label, value, img, price, isMonthly }) => {
  return (
    <li className="mb-3">
      <input type="radio" id={label} {...register} value={value} className="hidden peer" required />
      <label htmlFor={label} className="inline-flex items-center justify-between w-full py-[14px] px-[16px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-blue-600  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex gap-4 items-center">
          <img src={img} />
          <div>
            <div className="w-full text-lg font-bold text-sky-950 capitalize">{value}</div>
            <div className="w-full mb-[3px]">{price}</div>
            {!isMonthly && <p className="text-xs text-sky-950">2 months free</p>}
          </div>
        </div>
      </label>
    </li>
  )
}

export default PlanField
