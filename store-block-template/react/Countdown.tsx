import React, { useState } from 'react'

import axios from 'axios'



interface CountdownProps {}

const Countdown: StorefrontFunctionComponent<CountdownProps> = () => {

  const [ userId , setUserID ] = useState(null)
  const [ saldo, setSaldo ] = useState(null)

   axios.get('https://examplestore--dreamscape.myvtex.com/api/vtexid/pub/authenticated/user').then((response) => {
      setUserID(response.data.userId);
      console.log(JSON.stringify(response.data.userId))
    });

    axios.post('https://nes6120zw5.execute-api.sa-east-1.amazonaws.com/buscasaldo/999998')
    .then((response) => {
      setSaldo(response.data.Item.saldo);
      console.log(JSON.stringify(response.data.Item.saldo))
    });

  if (!userId || !saldo ) return (
    <div>
      <h1>Id do Usuario</h1>
      <h1>Erro</h1>
      <h1></h1>
    </div>
  )

  return (
    <div>
      <h1>Saldo</h1>
      <h1>{userId}</h1>
      <h1>{saldo}</h1>
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Countdown
