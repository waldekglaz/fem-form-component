interface FormFieldProps {
  error?: string
  register: any
  inputType: string
  fieldName: string
  placeholder: string
  label: string
}

const FormField: React.FC<FormFieldProps> = ({ error, register, inputType, fieldName, placeholder, label }) => {
  return (
    <div className="mb-6">
      <label htmlFor={fieldName} className=" mb-2 text-sm font-medium text-gray-900 flex justify-between">
        {label}
        {error && <span className="text-red-500">{error}</span>}
      </label>

      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type={inputType} placeholder={placeholder} {...register} />
    </div>
  )
}

export default FormField
