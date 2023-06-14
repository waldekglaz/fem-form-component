import { UseFormRegister } from 'react-hook-form'
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
      <label htmlFor={label} className="inline-flex items-center justify-between w-full pt-[14px] pb-6 px-[16px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-blue-600 peer-checked:bg-blue-50  hover:text-gray-600 hover:bg-gray-100 lg:w-[138px] lg:h-[203px] lg:pb-0">
        <div className="flex gap-4 items-center lg:flex-col lg:items-start lg:justify-between lg:h-full  lg:w-full lg:pb-10">
          <img src={img} />
          <div className="relative w-full">
            <div className="w-full text-base font-bold text-sky-950 capitalize">{value}</div>
            <div className="w-full mb-[3px] text-sm">{price}</div>
            {!isMonthly && <p className="text-xs text-sky-950 absolute min-w-[80px]">2 months free</p>}
          </div>
        </div>
      </label>
    </li>
  )
}

export default PlanField
