import { useNavigate } from 'react-router-dom'
import Card from './shared/Card'
import Heading from './shared/Heading'
import BottomNav from './shared/BottomNav'
import Form from './shared/Form'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ButtonNext from './shared/ButtonNext'
import PlanField from './PlanField'
import { useSelector, useDispatch } from 'react-redux'
import { setPlan, setIsMonthly } from '../rootSlice'

const plans = [
  { name: 'arcade', monthly: 9, anually: 90, logo: './src/assets/icon-arcade.svg' },
  { name: 'advanced', monthly: 12, anually: 120, logo: './src/assets/icon-advanced.svg' },
  { name: 'pro', monthly: 15, anually: 150, logo: './src/assets/icon-pro.svg' },
]

const Plan = () => {
  const dispatch = useDispatch()
  const plan = useSelector((state) => state.plan.name)
  const isMonthly = useSelector((state) => state.isMonthly)
  const { register, handleSubmit } = useForm({ defaultValues: { plan } })
  const navigate = useNavigate()
  const handleClick = () => {
    dispatch(setIsMonthly())
  }
  return (
    <Card>
      <Heading title="Select your plan" description="You have the option of monthly or yearly billing." />
      <Form
        onSubmit={handleSubmit((data) => {
          dispatch(setPlan(data.plan))
          navigate('/add-ons')
        })}
      >
        <ul>
          {plans.map((plan) => (
            <PlanField key={plan.name} register={register('plan')} label={`plan-${plan.name}`} value={plan.name} img={plan.logo} price={isMonthly ? `$${plan.monthly}/mo` : `$${plan.anually}/yr`} isMonthly={isMonthly} />
          ))}
        </ul>
        <label className="relative inline-flex items-center cursor-pointer">
          <input onClick={handleClick} type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
        </label>
        <BottomNav singleItem={false}>
          <Link to="/">Go Back</Link>

          <ButtonNext />
        </BottomNav>
      </Form>
    </Card>
  )
}

export default Plan
