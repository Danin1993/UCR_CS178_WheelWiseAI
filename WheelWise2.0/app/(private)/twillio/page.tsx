import React from 'react'
import twilio from 'twilio'

export default async function Twillio() {
  const SID = 'AC0c4d517f2d1c459016fe70d12ce1b0f8'
  const AuthToken = '964f0372de8eda8da5f98d79a0282ed5'
  const client = twilio(SID, AuthToken)

  // Create phone
  //

  // SMS Service Create
  //const onboard = await client.messaging.v1.services.create({ friendlyName: 'ttt' })

  // Phone number add
  /*
  const addPhone = await client.messaging.v1
    .services(onboard.sid)
    .phoneNumbers.create({ phoneNumberSid: 'PN8db142be80dd86dc41a5db24fec69e17' })
    */

  //TODO SMS Service Id : MGc6318339db37a2c4eeb4729fbe0c4d1d

  // Send message

  // Region of phone https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource
  const Rlist = await client.availablePhoneNumbers('US').fetch()

  // Phone number
  const list = await client
    .availablePhoneNumbers('US')
    .local.list({ smsEnabled: true, mmsEnabled: true, voiceEnabled: true, areaCode: 480, limit: 5 })
  console.log(list.forEach((l) => console.log(l.friendlyName)))

  return <div>Twillio</div>
}
