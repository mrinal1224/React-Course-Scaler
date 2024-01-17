import React from 'react'
import GrandDaughter from './GrandDaughter'
import GrandSon from './GrandSon'
import { FamilyContext } from './FamilyContext'

import { useContext } from 'react'

function Child() {
    const message = useContext(FamilyContext)
  return (
    <div className='children'>
        <h1>Child {message.familyName}</h1>
        <GrandDaughter/>
        <GrandSon />
    </div>
  )
}

export default Child