import { MouseEventHandler } from 'react'
interface TogglerProps {
  handleClick: MouseEventHandler<HTMLInputElement>
  isMonthly: boolean
}

const Toggler: React.FC<TogglerProps> = ({ handleClick, isMonthly }) => {
  return (
    <div className="flex justify-center items-center">
      <span className={` text-sm font-medium ${isMonthly ? 'text-gray-900' : 'text-gray-500'}  mr-2`}>Monthly</span>
      <label className="relative inline-flex items-center cursor-pointer ">
        <input onClick={handleClick} type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-sky-950 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-700  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
        <span className={`text-sm font-medium ${isMonthly ? 'text-gray-500' : 'text-gray-900'} ml-2`}>Yearly</span>
      </label>
    </div>
  )
}

export default Toggler
