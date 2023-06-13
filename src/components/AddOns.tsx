import BottomNav from './shared/BottomNav'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Card from './shared/Card'
import Form from './shared/Form'
import Heading from './shared/Heading'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setOnlineService, setLargerStorage, setCustomProfile, setAAA } from '../rootSlice'
import AddOnField from './shared/AddOnField'
import { store } from '../store'
const addOns = [
  { name: 'Online service', label: 'onlineService', description: 'Access to multiplayer games', monthlyCost: 1, anuallyCost: 10 },
  { name: 'Larger storage', label: 'largerStorage', description: 'Extra 1TB of cloud save', monthlyCost: 2, anuallyCost: 20 },
  { name: 'Customizable profile', label: 'customizableProfile', description: 'Custom theme on your profile', monthlyCost: 2, anuallyCost: 20 },
]
const AddOnes = () => {
  const dispatch = useDispatch()
  const onlineService = useSelector((state) => state.onlineService.isChosen)
  const largerStorage = useSelector((state) => state.largerStorage.isChosen)
  const customizableProfile = useSelector((state) => state.customizableProfile.isChosen)
  const isMonthly = useSelector((state) => state.isMonthly)
  const { register, handleSubmit } = useForm({ defaultValues: { onlineService, largerStorage, customizableProfile } })
  const navigate = useNavigate()
  return (
    <Card>
      <Heading title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data)

          dispatch(setOnlineService(data.onlineService))
          dispatch(setLargerStorage(data.largerStorage))
          dispatch(setCustomProfile(data.customizableProfile))

          // navigate('/summary')
        })}
      >
        {addOns.map((addon) => (
          <AddOnField key={addon.label} register={register(addon.label)} label={addon.label} title={addon.name} description={addon.description} cost={isMonthly ? `+${addon.monthlyCost}/mo` : `+${addon.anuallyCost}/yr`} />
        ))}

        <BottomNav singleItem={false}>
          <Link to="/plan">Go Back</Link>

          <button className="bg-sky-950 text-white text-sm px-4 py-3 rounded-md" type="submit">
            Next Step
          </button>
        </BottomNav>
      </Form>
    </Card>
  )
}

export default AddOnes
