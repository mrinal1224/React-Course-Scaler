import React from 'react'
import { FamilyContext } from './FamilyContext'

import { useContext } from 'react'

function GrandDaughter() {

    const message = useContext(FamilyContext)
  return (
    <div className='gdaughter'>
        <h3>Grand Daughter {message.familyName}</h3>
    </div>
  )
}

export default GrandDaughter