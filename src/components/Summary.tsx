import { useState } from 'react'
import { Card, Heading, BottomNav } from './shared'
import { Link } from 'react-router-dom'
import { store } from '../store'
import ConfirmationMessage from './ConfirmationMessage'

const Summary = () => {
  const [confirmationMsg, setConfirmationMsg] = useState<boolean>(false)
  const handleConfirm = () => {
    setConfirmationMsg(true)
  }
  const formData = store.getState()
  const { plan, isMonthly, customizableProfile, largerStorage, onlineService } = formData
  return (
    <Card>
      {!confirmationMsg && (
        <>
          <Heading title="Finishing up" description={`${formData.name} double-check  everything looks OK before confirming.`} />
          <div className="bg-sky-50 p-4">
            <div className="border-b pb-3 flex justify-between items-center mb-3">
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
              <p className="text-gray-500 flex justify-between mb-3">
                Customizable Profile{' '}
                <span className="text-sky-900 ">
                  +${customizableProfile.value}/{isMonthly ? 'mo' : 'yr'}
                </span>
              </p>
            )}
            {largerStorage.isChosen && (
              <p className="text-gray-500 flex justify-between mb-3">
                Larger Storage{' '}
                <span className="text-sky-900">
                  +${largerStorage.value}/{isMonthly ? 'mo' : 'yr'}
                </span>
              </p>
            )}
            {onlineService.isChosen && (
              <p className="text-gray-500 flex justify-between mb-3">
                Online Service{' '}
                <span className="text-sky-900">
                  +${onlineService.value}/{isMonthly ? 'mo' : 'yr'}
                </span>
              </p>
            )}
          </div>
          <div className="mt-6 flex justify-between px-6 text-gray-500">
            {`Total`}
            {isMonthly ? ' (per month)' : ' (per year)'}
            <span className="text-blue-500 font-bold">
              ${plan.value + customizableProfile.value + largerStorage.value + onlineService.value}/{isMonthly ? 'mo' : 'yr'}
            </span>
          </div>

          <BottomNav singleItem={false}>
            <Link to="/add-ons">Go Back</Link>
            <button className="bg-blue-500 px-[22px] py-3 text-white rounded-lg" onClick={handleConfirm}>
              Confirm
            </button>
          </BottomNav>
        </>
      )}
      {confirmationMsg && <ConfirmationMessage />}
    </Card>
  )
}

export default Summary
