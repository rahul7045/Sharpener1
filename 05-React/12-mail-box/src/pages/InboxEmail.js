import React from 'react'
import { useSelector } from 'react-redux';

import MailData from '../components/MailData';

 const InboxEmail = () => {

    const mails = useSelector((state)=>state.mail.mailData)
    const email = localStorage.getItem("email")
    const inboxMail = mails.filter(mail=>mail.to === email )

    const mailItem = inboxMail.map(mail=>(
        <MailData key={mail.id} mail={mail} toorFrom='From' />
    ))

  return (
    <div>
    {mailItem}
    </div>
  )
}

export default InboxEmail;
