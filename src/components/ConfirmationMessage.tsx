import React from 'react'
import Card from './shared/Card'
import Icon from '../assets/icon-thank-you.svg'

const ConfirmationMessage = () => {
  return (
    <div className="flex flex-col items-center py-[79px]">
      <img src={Icon} alt="" className="mb-6" />
      <h1 className="text-2xl font-bold text-sky-950 mb-[9px]">Thank you!</h1>
      <p className="text-center leading-8 text-gray-500">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default ConfirmationMessage
