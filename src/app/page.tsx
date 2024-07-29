import Image from "next/image";

import api from "./api";

/*Importando imagenes */
import logo from '../../public/FotoPerfil22-removebg-preview.png'
import binance from '../../public/logos/binance.png'
import btc from '../../public/logos/btc.png'
import eth from '../../public/logos/eth.png'
import mercadopago from '../../public/logos/mercado-pago.png'
import transf from '../../public/logos/transf.png'
import usdt from '../../public/logos/USDT.png'

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

        {/* <h2>TecStore</h2> */}
      </div>

      <div className="carrusel">
        <h2>Productos PlayStation</h2>
        <Carousel className="carousel">
          <CarouselContent className="-ml-1">

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://atacadogames.com/imagem/controles/controle-sony-dualsense-para-ps5-wireless-branco/2/141673.jpg?pfdrid_c=true"></Image>
                      <span className="text-lg font-semibold">$100</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://storage.googleapis.com/shopping-china/vvi9n7sqndpsmwr517a6y0hz1ro1?GoogleAccessId=gcs-rails-active-storage%40shopping-china-prod.iam.gserviceaccount.com&Expires=1722212927&Signature=Imm4xQ9nRNfSwkF3gT%2FMPDsdq2Lv7ySloFKctKbFS8hr9uCAwJjANEW4uy0aop%2Bnf0yz9D24rlbW2w85TGB8VP5dOUTg30Noy0KugMIXjMQrBeORMQTMh0Gb2mO%2BDtZCdt2GF5Wc26GlxIWBaQna3HhkWBMqF9mySaxKVTaGP4MNMGXIOL3WaPYvYPNsYdcfru9pBIyAo61W81wI9FEYt9RgRrA5TWSwbCejxanpyNBfce2NgA0hN13mqai%2F8%2B8drrgzAQ2bF46GtyeEkExEtDjeOgtkoEo6c5LSnnPoARLZCquPyqalAboTNBYcDxeCoHPvMKCQ3%2BkknYtCqrEkJg%3D%3D&response-content-disposition=inline%3B+filename%3D%22889435.jpg%22%3B+filename%2A%3DUTF-8%27%27889435.jpg&response-content-type=image%2Fjpeg"></Image>
                      <span className="text-lg font-semibold">$785</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://storage.googleapis.com/shopping-china/hficlr765jlzebgx1y59ot4nwh58?GoogleAccessId=gcs-rails-active-storage%40shopping-china-prod.iam.gserviceaccount.com&Expires=1722212880&Signature=CwpwW0QTWFs2DTtcl7F%2BdaSjy9qaZX6j8n4MAwzvvaxP35yTreM2QqRiKuxrUFk8Z2sdRyF0gZ3ZXxF8DkrpBcBPr7h1kGaJbXAurB54i2p3VOT7kNPLF%2BlodZk4Hdr3vZAx5nHwk0QI4OWWokGFqzYXTT0o2MjsXipRivrzXsIvZXK3dHRX9fnGuPbf%2BIFojXBrrTgJn%2Bc4fxJ6ez56Z6oOEFMz0vRKYf6wYapfGxPNyCI1IT%2FJSRb2VP%2BJnqGVlnpf84uAQP0jQDz4LbAFCsy41fFFxZVrpEtMyq200EJk8mPjOFjtUvXaxaZRl5qKT8yzcBZmS1426ViM%2BNEixg%3D%3D&response-content-disposition=inline%3B+filename%3D%22889781_1.jpg%22%3B+filename%2A%3DUTF-8%27%27889781_1.jpg&response-content-type=image%2Fjpeg"></Image>
                      <span className="text-lg font-semibold">$455</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://atacadogames.com/imagem/playstation/console-sony-playstation-5-slim-call-of-duty-modern-warfare-iii-bundle-cfi-2015a-8k-1tb-ssd/2/204940.jpg?pfdrid_c=true"></Image>
                      <span className="text-lg font-semibold">$785</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://atacadogames.com/imagem/playstation/console-sony-playstation-4-cuh-2200ab01-500gb-ssd-japao/2/198944.jpg?pfdrid_c=true"></Image>
                      <span className="text-lg font-semibold">$395</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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

      </div>

      <div className="carrusel">
        <h2>Productos destacados</h2>
        <Carousel className="carousel">
          <CarouselContent className="-ml-1">

          <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://www.atacadogames.com/imagem/fones-de-ouvido/fone-de-ouvido-apple-airpods-2-mv7n2am-a-branco/2/10275.jpg?pfdrid_c=true"></Image>
                      <span className="text-lg font-semibold">$145</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://www.atacadogames.com/imagem/notebooks/apple-macbook-air-2020-mgn93bz-a-13-3-chip-m1-256gb-ssd-8gb-ram-prata/2/175283.jpg?pfdrid_c=true"></Image>
                      <span className="text-lg font-semibold">$840</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://storage.googleapis.com/shopping-china/9j3yy3v9wablh161geiir9nc05fx?GoogleAccessId=gcs-rails-active-storage%40shopping-china-prod.iam.gserviceaccount.com&Expires=1722221873&Signature=JuOPYxCiNpTymKBCqWLH0Ak3OAzvpt%2B2RnEwssGRmkrh9sJ%2B4EUJdAioNjpByk%2FTU0iUqJNCUTH3BRdct7Gh8e8xbhpJGoXQIGqaZ9yqt5bEaU45MsCE3ZzRWqOaKD%2FLTl1WEz4reeCzNDub46Z5iTzgHjro6M%2FmMbDfbmDH6JKNj8mcA%2BS8QBGxBGqKDD9Dk7j3XssAoWcVz6Xpm4BP12LamSBsZ%2FQxIlNNJCF4ZAOZ9oLpgZAQhq8r5Nfghae%2BvyGjNK7pdRjUGydt0nRK1%2BLw4ZO8MhRTqSoVGP6Yqps7UOeEXH4VIxI0g50aJFNs212fq3AVxDdXBFg2mPZOKA%3D%3D&response-content-disposition=inline%3B+filename%3D%22892341.jpg%22%3B+filename%2A%3DUTF-8%27%27892341.jpg&response-content-type=image%2Fjpeg"></Image>
                      <span className="text-lg font-semibold">$108</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://www.atacadogames.com/imagem/placas-de-video/placa-de-video-msi-ventus-2x-xs-oc-nvidia-geforce-rtx-3050-8gb-gddr6-912-v809-4266/2/188489.jpg?pfdrid_c=true"></Image>
                      <span className="text-lg font-semibold">$350</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
                      <Image
                      width={250}
                      height={250}
                      className="imagen-producto-card"
                      alt="Picture of the author"
                      src="https://www.atacadogames.com/imagem/smartphones/smartphone-xiaomi-redmi-note-13-4g-global-128gb-6gb-ram-dual-sim-tela-6-67-dourado-lacre-pequeno/1/1099409"></Image>
                      <span className="text-lg font-semibold">$205</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="footer">
          <h4>Todos los metodos de pago</h4>

          <div className="container-metodos">
            <div className="primeros-metodos">
              <Image
                width={120}
                height={120}
                className="cover m-query-metodos"
                alt="Picture of the author"
                src={binance} />
              <Image
                width={120}
                height={120}
                className="cover m-query-metodos"
                alt="Picture of the author"
                src={btc} />
              <Image
                width={120}
                height={90}
                className="cover m-query-metodos"
                alt="Picture of the author"
                src={eth} />
            </div>

            <div className="segundos-metodos">
              <Image
                width={90}
                height={90}
                className="cover m-query-metodos"
                alt="Picture of the author"
                src={mercadopago} />
              <Image
                width={90}
                height={90}
                className="cover m-query-metodos"
                alt="Picture of the author"
                src={transf} />
              <Image
                width={60}
                height={60}
                className="cover usdt"
                alt="Picture of the author"
                src={usdt} />
            </div>
          </div>
        </div>


    </>
  );
}
