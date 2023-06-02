import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Card from './shared/Card'
import Heading from './shared/Heading'
import Form from './shared/Form'
import FormField from './shared/FormField'
import BottomNav from './shared/BottomNav'

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
        <FormField error={errors.name?.message} register={register('name', { required: 'This field is required', validate: { matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v) || 'Invalid name' } })} inputType="text" fieldName="name" placeholder="e.g. Stephen King" label="Name" />
        <FormField error={errors.email?.message} register={register('email', { required: 'This field is required', validate: { matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid email address' } })} inputType="email" fieldName="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />
        <FormField error={errors.phone?.message} register={register('phone', { required: true })} inputType="tel" fieldName="phone" placeholder="e.g. +1 234 567 890" label="Phone Number" />

        <BottomNav singleItem={true}>
          <button className="bg-sky-950 text-white text-sm px-4 py-3 rounded-md" type="submit">
            Next Step
          </button>
        </BottomNav>
      </Form>
    </Card>
  )
}

export default Home
