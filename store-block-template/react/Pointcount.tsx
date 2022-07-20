import React, { useEffect, useState } from "react";
import axios from 'axios';

interface PointcountProps {}

const URLAPI = 'https://nes6120zw5.execute-api.sa-east-1.amazonaws.com';

const Pointcount: StorefrontFunctionComponent<PointcountProps> = () => {

  const [ userId , setUserID ] = useState(null)
  const [ userSaldo, setUSerSaldo ] = useState(0)

  useEffect(() => {
    axios.get('/api/vtexid/pub/authenticated/user').then((response) => {
      setUserID(response.data.userId);
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

  if(userId) {
    if(userSaldo) {
      return (
        <div>
          <p>Saldo Atual: {userSaldo}</p>
        </div>
      )
    } else {
      return (
        <div>
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