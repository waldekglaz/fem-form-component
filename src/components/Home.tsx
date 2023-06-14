import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setName, setEmail, setPhoneNumber } from '../rootSlice'
import { Card, Heading, Form, FormField, BottomNav, ButtonNext } from './shared'

interface RootState {
  name: string
  email: string
  phoneNumber: string
}

const Home = () => {
  const dispatch = useDispatch()
  const name = useSelector((state: RootState) => state.name)
  const email = useSelector((state: RootState) => state.email)
  const phone = useSelector((state: RootState) => state.phoneNumber)
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
          navigate('/plan')
        })}
      >
        <FormField error={errors.name?.message} register={register('name', { required: 'This field is required', validate: { matchPattern: (v) => /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(v) || 'Invalid name' } })} inputType="text" fieldName="name" placeholder="e.g. Stephen King" label="Name" />
        <FormField error={errors.email?.message} register={register('email', { required: 'This field is required', validate: { matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid email address' } })} inputType="email" fieldName="email" placeholder="e.g. stephenking@lorem.com" label="Email Address" />
        <FormField error={errors.phone?.message} register={register('phone', { required: 'This field is required', validate: { matchPattern: (v) => /^\+?\d{1,4}\s?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(v) || 'Invalid phone number' } })} inputType="tel" fieldName="phone" placeholder="e.g. +1 234 567 890" label="Phone Number" />

        <BottomNav singleItem={true}>
          <ButtonNext />
        </BottomNav>
      </Form>
    </Card>
  )
}

export default Home
