import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useCssHandles } from 'vtex.css-handles'

interface PointcountProps {}

const CSS_HANDLES = ['pointcount']

const URLAPI = 'https://nes6120zw5.execute-api.sa-east-1.amazonaws.com';

const Pointcount: StorefrontFunctionComponent<PointcountProps> = () => {

  const [ userId , setUserID ] = useState(null)
  const [ userSaldo, setUSerSaldo ] = useState(0)

  useEffect(() => {
    axios.get('/no-cache/profileSystem/getProfile')
    .then((response) => {
      setUserID(response.data.UserId);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  });

  useEffect(() => {
    axios.post(URLAPI+'/buscasaldo/'+userId)
    .then((response) => {
      setUSerSaldo(response.data.Item.saldo);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  });

  const handles = useCssHandles(CSS_HANDLES)

  if(userId) {
    if(userSaldo) {
      return (
        <div className={`${handles.pointcount} db tc`}>
          <p>{`Saldo Atual: ${userSaldo}`}</p>
        </div>
      )
    } else {
      return (
        <div className={`${handles.pointcount} db tc`}>
          <p>Saldo Atual: 0</p>
        </div>
      )
    }
  }

  return (
    <div></div>
  )
}

Pointcount.schema = {
  properties: {},
}

export default Pointcount