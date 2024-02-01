"use client"


import React, { useEffect, useState } from 'react';

interface CardData {
    symbol: string;
    name: string;
    priceUsd: string;
    changePercent24Hr:string;
    supply:string;
    maxSupply:string;
    explorer:string;
    // Add other properties as needed
}

export default function leading(){
    const [cardData, setCardData] = useState<CardData[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await fetch('https://api.coincap.io/v2/assets');
            const data = await response.json();
            // Assuming the array of cards is in data.data
            const trimmedData = data.data ? data.data.slice(0, 15) : [];
            setCardData(trimmedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <>
            <section className="bg-implemented px-20 py-14 ">
                <div className="top flex justify-center items-center mb-20">
                    <h2 className="text-black font-semibold text-4xl">Some best Crypto Currencies !!!</h2>
                </div>
                <div className="bottom w-full text-black flex flex-wrap justify-between">
                    {cardData.map((card)=>(
                    <div className="px-8 py-8 rounded-lg bg-zinc-300 card w-1/4 mb-20 flex flex-col items-center mr-20">
                        <div className="top w-2/4 flex justify-center items-center mb-4">
                            <div className="symbol flex justify-center items-center bg-white" style={{width:'80px', height:'80px',borderRadius:'50%'}}>
                                <h5 className='font-bold'>{card.symbol}</h5>
                            </div>
                        </div>
                        <div className="center flex flex-col items-center mb-2">
                            <h3 className='font-extrabold'>{card.name}</h3>
                            <h4>current price : <b> ${parseFloat(card.priceUsd).toFixed(0)}</b></h4>
                            <h4>price change : <b>{parseFloat(card.changePercent24Hr).toFixed(2)}%</b></h4>
                        </div>
                        <div className="sub-center flex flex-col items-center mb-2">
                            <h4>supply : <b>{parseFloat(card.supply).toFixed(1)}</b></h4>
                            {typeof card.maxSupply === 'string' && (
                                <h4>maxsupply: <b>{parseFloat(card.maxSupply).toFixed(1)}</b></h4>
                            )}
                            {typeof card.maxSupply != 'string' && (
                                <h4>maxsupply: <b>infinity</b></h4>
                            )}
                        </div>
                        <div className="bottom">
                            <a href={card.explorer} target='_blank' className='text-black font-semibold underline underline-offset-2'>charts & more</a>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </>
    )
}