

/*
CONECTANDO O BACK-END E O FRONT-END

import React, { useState } from 'react'
import { useQuery } from 'react-apollo'



import { useCssHandles } from 'vtex.css-handles'
import { useProduct } from 'vtex.product-context/useProduct'


import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'

import productReleaseDate from './graphql/productReleaseDate.graphql'


const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

interface CountdownProps {}

const CSS_HANDLES = ['countdown']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ }) => {

  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const handles = useCssHandles(CSS_HANDLES)



  //
  const { product } = useProduct()

  const { data, loading, error } = useQuery(productReleaseDate, {
    variables:{
      slug: product?.linkText
    },
    ssr: false
  })
  //

  // o product pode ser undefined, precisamos fazer o tratamento de erro
  if (!product) {
    return (
      <div>
        <span>There is no product context.</span>
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        <span>Erro!</span>
      </div>
    )
  }



  
  tick(data?.product?.releaseDate || DEFAULT_TARGET_DATE, setTime) // função que atualiza o nosso estado a cada um segundo


  return (
    <div className={`${handles.countdown} db tc`}>
      {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
    </div>
      
  );
};

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: { },
}

export default Countdown*/




// CONTADOR DE HORAS

import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'


const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

interface CountdownProps {
  targetDate: string
}

const CSS_HANDLES = ['countdown' ]

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate = DEFAULT_TARGET_DATE }) => {
    const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  
  const handles = useCssHandles(CSS_HANDLES)
  
  tick(targetDate, setTime) // função que atualiza o nosso estado a cada um segundo

  return (
    <div className={`${handles.countdown} db tc`}>
      {`Você possui ${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds} pontos`}
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