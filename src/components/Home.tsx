import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()
  return (
    <div className="w-80 mx-auto px-6 py-8 -mt-20 bg-white rounded-lg shadow-gray-600">
      <h1 className="text-2xl font-bold mb-2">Personal info</h1>
      <p className="mb-6">Please provide your name, email address, and phone number.</p>
      <form
        className=""
        onSubmit={handleSubmit((data) => {
          console.log(data)
          navigate('/plan')
        })}
      >
        <div className="mb-6">
          <label htmlFor="name" className=" mb-2 text-sm font-medium text-gray-900 flex justify-between">
            Name
            {errors.name && <span className="text-red-500">This field is required</span>}
          </label>

          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" placeholder="e.g. Stephen King" {...register('name', { required: 'ajgsjda' })} />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Email Address
            <input type="email" placeholder="e.g. stephenking@lorem.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...register('email', { required: 'ajgsjda' })} />
          </label>
        </div>

        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
          Phone Number
          <input type="tel" placeholder="e.g. +1 234 567 890" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...register('phone', { required: 'ajgsjda' })} />
        </label>
        <nav className="absolute bottom-0 w-full left-0 bg-white h-16 flex items-center justify-end px-6">
          <button className="bg-sky-950 text-white text-sm px-4 py-3 rounded-md" type="submit">
            Next Step
          </button>
        </nav>
      </form>
    </div>
  )
}

export default Home
