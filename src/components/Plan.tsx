import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Card, Heading, BottomNav, Form, ButtonNext, BackButton } from './shared'
import Toggler from './Toggler'
import PlanField from './PlanField'
import { useSelector, useDispatch } from 'react-redux'
import { setPlan, setIsMonthly } from '../rootSlice'
import { plans } from '../data'

interface RootState {
  plan: {
    name: string
  }
  isMonthly: boolean
}

interface Plan {
  name: string
  logo: string
  monthly: number
  annually: number
}

const Plan = () => {
  const dispatch = useDispatch()
  const plan = useSelector((state: RootState) => state.plan.name)
  const isMonthly = useSelector((state: RootState) => state.isMonthly)
  const { register, handleSubmit } = useForm({ defaultValues: { plan } })
  const navigate = useNavigate()
  const handleClick = () => {
    dispatch(setIsMonthly())
  }

  const renderPlans = plans.map((plan: Plan) => <PlanField key={plan.name} register={register('plan')} label={`plan-${plan.name}`} value={plan.name} img={plan.logo} price={isMonthly ? `$${plan.monthly}/mo` : `$${plan.annually}/yr`} isMonthly={isMonthly} />)

  return (
    <Card>
      <Heading title="Select your plan" description="You have the option of monthly or yearly billing." />
      <Form
        onSubmit={handleSubmit((data) => {
          const activePlan = plans.find((plan) => plan.name === data.plan)
          const { name, monthly, annually } = activePlan!
          if (isMonthly) {
            dispatch(setPlan({ name, value: monthly }))
          } else {
            dispatch(setPlan({ name, value: annually }))
          }

          navigate('/add-ons')
        })}
      >
        <ul className="lg:flex lg:gap-4">{renderPlans}</ul>
        <div className="text-center mt-[20px] bg-blue-50 py-[13px] rounded-lg">
          <Toggler handleClick={handleClick} isMonthly={isMonthly} />
        </div>

        <BottomNav singleItem={false}>
          <BackButton link="/" />
          <ButtonNext />
        </BottomNav>
      </Form>
    </Card>
  )
}

export default Plan
