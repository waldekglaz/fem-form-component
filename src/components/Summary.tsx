import { useState } from 'react'
import Card from './shared/Card'
import Heading from './shared/Heading'
import BottomNav from './shared/BottomNav'
import { Link } from 'react-router-dom'
import { store } from '../store'
import { addOns } from '../data'

const Summary = () => {
  const [confirmationMsg, setConfirmationMsg] = useState(false)
  const handleConfirm = () => {
    setConfirmationMsg(true)
  }
  const formData = store.getState()
  const { plan, isMonthly, customizableProfile, largerStorage, onlineService } = formData
  console.log(formData)
  return (
    <Card>
      <Heading title="Finishing up" description={`${formData.name} double-check  everything looks OK before confirming.`} />
      <div className="bg-sky-50 p-4">
        <div className="border-b pb-3 flex justify-between items-center">
          <div>
            <div className="text-sky-950  capitalize font-bold">
              {plan.name} ({isMonthly ? 'Monthly' : 'Yearly'})
            </div>
            <Link to="/plan" className="underline text-gray-500">
              Change
            </Link>
          </div>

          <div className="text-sky-950 font-bold">{isMonthly ? `$${plan.value}/mo` : `$${plan.value}/yr`}</div>
        </div>

        {customizableProfile.isChosen && (
          <p>
            Customizable Profile <span>{}</span>
          </p>
        )}
        {largerStorage.isChosen && (
          <p>
            Larger Storage <span>{}</span>
          </p>
        )}
        {onlineService.isChosen && (
          <p>
            Online Service <span>{}</span>
          </p>
        )}
      </div>
      <div>
        {`Total`} {(isMonthly ? plan.monthly : plan.anually) + 1}
      </div>

      <BottomNav singleItem={false}>
        <Link to="/add-ons">Go Back</Link>
        <button onClick={handleConfirm}>Confirm</button>
      </BottomNav>
    </Card>
  )
}

export default Summary
