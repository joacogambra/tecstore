import Image from "next/image";

import api from "./api";

/*Importando imagenes */
import logo from '../../public/FotoPerfil22.png'
import binance from '../../public/logos/binance.png'
import btc from '../../public/logos/btc.png'
import eth from '../../public/logos/eth.png'
import mercadopago from '../../public/logos/mercado-pago.png'
import transf from '../../public/logos/transf.png'
import usdt from '../../public/logos/USDT.png'


import * as React from "react"

export default async function Home() {
  const matches = await api.match.list()

  return (
   <>
      <div className="sidebar">
        <Image
          width={150}
          height={150}
          className="imagen-logo"
          alt="logo marca"
          src={logo}>
        </Image>

        <h2>TecStore</h2>
      </div>

      <div className="container-cards">


        {matches.map(({ date, team1, team2, goals1, goals2 }) => (
          <div className="card-product" key={date}>

            <div className="color-imagen">
              <Image
                width={150}
                height={150}
                className="imagen-producto-card"
                alt="Picture of the author"
                src={goals2}>
              </Image>
            </div>
            <div className="card-texto">
              <h4>{team1}</h4>
              <h5>{team2}</h5>
            </div>
          </div>))}


          <div className="footer">
        <h4>Todos los metodos de pago</h4>
        
        <div className="container-metodos">
            <div className="primeros-metodos">
                <Image
                width={120}
                height={120}
                className="cover"
                alt="Picture of the author"
                src={binance}/>
                <Image
                width={120}
                height={120}
                className="cover"
                alt="Picture of the author"
                src={btc}/>
                <Image
                width={120}
                height={90}
                className="cover"
                alt="Picture of the author"
                src={eth}/>                
            </div>

            <div className="segundos-metodos">
                <Image
                width={90}
                height={90}
                className="cover"
                alt="Picture of the author"
                src={mercadopago}/>
                <Image
                width={90}
                height={90}
                className="cover"
                alt="Picture of the author"
                src={transf}/>
                <Image
                width={60}
                height={60}
                className="cover"
                alt="Picture of the author"
                src={usdt}/>                
            </div>
        </div>
      </div>

      </div>
   </>
  );
}
