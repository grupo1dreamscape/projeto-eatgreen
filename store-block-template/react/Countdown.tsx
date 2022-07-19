import React, { useState } from 'react'

import apiAws from './service/apiAws'
import apiVtex from './service/apiVtex'


interface CountdownProps {}

const Countdown: StorefrontFunctionComponent<CountdownProps> = () => {

  const [ userId , setUserID ] = useState(null)
  const [ saldo, setSaldo ] = useState(null)

  apiVtex.getUser().then((response) => {
      setUserID(response.data.userId);
      //console.log(JSON.stringify(response.data.userId))
    });

    apiAws.getSaldo("999998").then((response) => {
      setSaldo(response.data.Item.saldo);
      //console.log(JSON.stringify(response.data.Item.saldo))
    });

  if (!userId || !saldo ) return (
    <div>
      <p>Id do Usuario</p>
      <p>Erro</p>
      <p></p>
    </div>
  )

  return (
    <div className={`fw3 w-100 c-muted-1 db tc`}>
      <p><strong>Saldo:</strong>{saldo}</p>
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


// CONTADOR DE HORAS
/*
import React, { useState, useEffect } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import api from './service/api'

import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'


const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

interface CountdownProps {
  targetDate: string
}

const CSS_HANDLES = ['countdown' ]

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate = DEFAULT_TARGET_DATE }) => {
    
  const [timeRemaining, setTime] = useState<TimeSplit>({hours: '00',minutes: '00',seconds: '00',});
  const handles = useCssHandles(CSS_HANDLES)

  const [saldo, setSaldo] = useState<number>(0)

  const getSaldo = async () => {
    const data = await api.post("/buscasaldo/999998")
    setSaldo(1)
    console.log(data)
  }
  
  tick(targetDate, setTime) // função que atualiza o nosso estado a cada um segundo
  
  useEffect(() => {
    // CONECTAR A API DE PONTOS USANDO AXIOS
    getSaldo()
    console.log("TESTE CAMILA")
  }, []);

  return (
    <div className={`${handles.countdown} db tc`}>
      {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}${saldo}`}
    </div>
    
  );
};
  
Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data final',
      description: 'Data final utilizada no contador',
      type: 'string',
      default: null,
    }
  },
}

export default Countdown
*/