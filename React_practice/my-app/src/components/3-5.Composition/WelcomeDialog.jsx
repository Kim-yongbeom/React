import React from 'react'
import CustomDialog from './CustomDialog'
// import Dialog from "./Dialog"
export default function WelcomeDialog() {
  // return (
  //   <Dialog>
  //     <h1>Welcom</h1>
  //     <h5>Thank you!</h5>
  //   </Dialog>
  // )
  return (
    <CustomDialog title={<button>Welcome</button>} description="Thanks"/>
  )
}
