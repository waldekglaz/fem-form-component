import { UseFormRegister, FieldValue } from 'react-hook-form'
interface AddOnFieldProps {
  register: UseFormRegister<FieldValue>
  label: string
  title: string
  description: string
  cost: string
  value?: number
}

const AddOnField: React.FC<AddOnFieldProps> = ({ register, label, title, description, cost }) => {
  return (
    <div className="flex items-center pl-4 border border-gray-200 rounded-lg  pr-4 mb-3 gap-2 ">
      <input type="checkbox" value="" {...register} className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 roundedfocus:ring-blue-100  focus:ring-3 " />
      <div className="w-full py-4 ml-2 text-sm font-medium text-gray-900  ">
        <label htmlFor={label}>{title}</label>
        <p className="text-xs text-gray-500 font-normal">{description}</p>
      </div>

      <div className="text-xs text-blue-500">{cost}</div>
    </div>
  )
}

export default AddOnField
