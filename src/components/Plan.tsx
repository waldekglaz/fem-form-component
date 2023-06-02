import { useNavigate } from 'react-router-dom'
import Card from './shared/Card'
import Heading from './shared/Heading'
import BottomNav from './shared/BottomNav'
import Form from './shared/Form'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ArcadeLogo from '../assets/icon-arcade.svg'
import AdvancedLogo from '../assets/icon-advanced.svg'
import ProLogo from '../assets/icon-pro.svg'
const defaultValues = {
  values: {
    plan: 'arcade',
  },
}
const Plan = () => {
  const { register, handleSubmit } = useForm(defaultValues)
  const navigate = useNavigate()
  return (
    <Card>
      <Heading title="Select your plan" description="You have the option of monthly or yearly billing." />
      <Form
        onSubmit={handleSubmit((data) => {
          defaultValues.values = { ...data }
          navigate('/add-ons')
        })}
      >
        <ul className="">
          <li className="mb-3">
            <input type="radio" id="plan-arcade" {...register('plan')} value="arcade" className="hidden peer" required />
            <label htmlFor="plan-arcade" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex gap-4 items-center">
                <img src={ArcadeLogo} />
                <div>
                  <div className="w-full text-lg font-semibold">Arcade</div>
                  <div className="w-full">$9/mo</div>
                </div>
              </div>
            </label>
          </li>
          <li className="mb-3">
            <input type="radio" id="plan-advanced" value="advanced" className="hidden peer" {...register('plan')} />
            <label htmlFor="plan-advanced" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex gap-4 items-center">
                <img src={AdvancedLogo} />
                <div>
                  <div className="w-full text-lg font-semibold">Advanced</div>
                  <div className="w-full">$12/mo</div>
                </div>
              </div>
            </label>
          </li>
          <li>
            <input type="radio" id="plan-pro" value="pro" className="hidden peer" {...register('plan')} />
            <label htmlFor="plan-pro" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex gap-4 items-center">
                <img src={ProLogo} />
                <div>
                  <div className="w-full text-lg font-semibold">Pro</div>
                  <div className="w-full">$15/mo</div>
                </div>
              </div>
            </label>
          </li>
        </ul>
        <BottomNav singleItem={false}>
          <Link to="/">Go Back</Link>

          <button className="bg-sky-950 text-white text-sm px-4 py-3 rounded-md" type="submit">
            Next Step
          </button>
        </BottomNav>
      </Form>
    </Card>
  )
}

export default Plan
