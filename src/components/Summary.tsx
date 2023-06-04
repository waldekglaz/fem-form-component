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
  const { plan, isMonthly, customizableProfile } = formData
  console.log(formData)
  return (
    <Card>
      <Heading title="Finishing up" description={`${formData.name} double-check  everything looks OK before confirming.`} />
      <div>
        <div>
          <div className="text-sky-950">
            {plan.name} ({isMonthly ? 'Monthly' : 'Yearly'})
          </div>
          <Link to="/plan">Change</Link>
        </div>
        <div>{isMonthly ? `$${plan.monthly}/mo` : `$${plan.anually}/yr`}</div>
        <hr />
        {customizableProfile && (
          <p>
            Customizable Profile <span>{}</span>
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
