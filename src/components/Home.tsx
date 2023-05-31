import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Card from './shared/Card'
import Heading from './shared/Heading'
import Form from './shared/Form'
import FormField from './shared/FormField'

const defaultValues = {
  values: {
    name: '',
    email: '',
    phone: '',
  },
}

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(defaultValues)

  const navigate = useNavigate()
  return (
    <Card>
      <Heading title="Personal info" description="Please provide your name, email address, and phone number." />
      <Form
        onSubmit={handleSubmit((data) => {
          defaultValues.values = { ...data }
          navigate('/plan')
        })}
      >
        <FormField error={errors.name} register={register('name', { required: true })} inputType="text" fieldName="name" placeholder="e.g. Stephen King" label="Name" />
        <FormField error={errors.email} register={register('email', { required: true })} inputType="email" fieldName="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />
        <FormField error={errors.phone} register={register('phone', { required: true })} inputType="tel" fieldName="phone" placeholder="e.g. +1 234 567 890" label="Phone Number" />
        <nav className="absolute bottom-0 w-full left-0 bg-white h-16 flex items-center justify-end px-6">
          <button className="bg-sky-950 text-white text-sm px-4 py-3 rounded-md" type="submit">
            Next Step
          </button>
        </nav>
      </Form>
    </Card>
  )
}

export default Home
