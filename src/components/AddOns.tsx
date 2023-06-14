import { BottomNav, Card, Form, Heading, AddOnField, ButtonNext, BackButton } from './shared'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setOnlineService, setLargerStorage, setCustomProfile } from '../rootSlice'
import { addOns } from '../data'

interface RootState {
  onlineService: {
    isChosen: boolean
  }
  largerStorage: {
    isChosen: boolean
  }
  customizableProfile: {
    isChosen: boolean
    value: number
  }
  isMonthly: boolean
}

const AddOnes = () => {
  const dispatch = useDispatch()
  const onlineService = useSelector((state: RootState) => state.onlineService.isChosen)
  const largerStorage = useSelector((state: RootState) => state.largerStorage.isChosen)
  const customizableProfile = useSelector((state: RootState) => state.customizableProfile.isChosen)
  const isMonthly = useSelector((state: RootState) => state.isMonthly)
  const { register, handleSubmit } = useForm({ defaultValues: { onlineService, largerStorage, customizableProfile } })
  const navigate = useNavigate()

  const renderAddons = addOns.map((addon) => <AddOnField key={addon.label} register={register(addon.label)} label={addon.label} title={addon.name} description={addon.description} cost={isMonthly ? `+${addon.monthlyCost}/mo` : `+${addon.anuallyCost}/yr`} />)
  return (
    <Card>
      <Heading title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
      <Form
        onSubmit={handleSubmit((data) => {
          dispatch(setOnlineService({ isChosen: data.onlineService, value: isMonthly ? (data.onlineService ? addOns[0].monthlyCost : 0) : data.onlineService ? addOns[0].anuallyCost : 0 }))
          dispatch(setLargerStorage({ isChosen: data.largerStorage, value: isMonthly ? (data.largerStorage ? addOns[1].monthlyCost : 0) : data.largerStorage ? addOns[1].anuallyCost : 0 }))
          dispatch(setCustomProfile({ isChosen: data.customizableProfile, value: isMonthly ? (data.customizableProfile ? addOns[2].monthlyCost : 0) : data.customizableProfile ? addOns[2].anuallyCost : 0 }))

          navigate('/summary')
        })}
      >
        {renderAddons}

        <BottomNav singleItem={false}>
          <BackButton link="/plan" />

          <ButtonNext />
        </BottomNav>
      </Form>
    </Card>
  )
}

export default AddOnes
