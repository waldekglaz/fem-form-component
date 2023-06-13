import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setName, setEmail, setPhoneNumber, setAAA } from '../rootSlice'

import Card from './shared/Card'
import Heading from './shared/Heading'
import Form from './shared/Form'
import FormField from './shared/FormField'
import BottomNav from './shared/BottomNav'
import ButtonNext from './shared/ButtonNext'

const Home = () => {
  const dispatch = useDispatch()
  const name = useSelector((state) => state.name)
  const email = useSelector((state) => state.email)
  const phone = useSelector((state) => state.phoneNumber)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name, email, phone } })

  const navigate = useNavigate()
  return (
    <Card>
      <Heading title="Personal info" description="Please provide your name, email address, and phone number." />
      <Form
        onSubmit={handleSubmit((data) => {
          dispatch(setName(data.name))
          dispatch(setEmail(data.email))
          dispatch(setPhoneNumber(data.phone))
          dispatch(setAAA({ ...data }))
          navigate('/plan')
        })}
      >
        <FormField error={errors.name?.message} register={register('name', { required: 'This field is required', validate: { matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v) || 'Invalid name' } })} inputType="text" fieldName="name" placeholder="e.g. Stephen King" label="Name" />
        <FormField error={errors.email?.message} register={register('email', { required: 'This field is required', validate: { matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid email address' } })} inputType="email" fieldName="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />
        <FormField error={errors.phone?.message} register={register('phone', { required: true })} inputType="tel" fieldName="phone" placeholder="e.g. +1 234 567 890" label="Phone Number" />

        <BottomNav singleItem={true}>
          <ButtonNext />
        </BottomNav>
      </Form>
    </Card>
  )
}

export default Home
