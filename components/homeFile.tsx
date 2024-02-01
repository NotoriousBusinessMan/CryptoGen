'use client'

import CryptoImage from '../assets/images/crypto-1.jpg'
import CryptoImage2 from '../assets/images/crypto-main-png.png'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
  

const FormSchema = z.object({
    cryptocoin: z
        .string({
            required_error: "Please select a crypto to convert.",
        }),
    amount: z.string()
})


interface CryptoData {
    name: string;
    priceUSD: string;
}

export default function homeFile(){
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coincap.io/v2/assets');
                const data = await response.json();

                if (data.data) {
                // Extracting relevant information (name and price in USD) for each cryptocurrency
                    const formattedData: CryptoData[] = data.data.map((crypto: any) => ({
                        name: crypto.name,
                        priceUSD: crypto.priceUsd,
                    }));
                    setCryptoData(formattedData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    
    //SESSION 111 ENDED********************************

    const [selectedCrypto, setSelectedCrypto] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [totalValue, setTotalValue] = useState<number | null>(null);


    //shadcn form
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          username: "",
        },
      })
     
      function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
      }


    const handleAmountValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputAmount = Number(event.target.value);
        setAmount(inputAmount);
    };
    
    const handleCryptoSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCrypto = event.target.value;
        setSelectedCrypto(selectedCrypto);
    };

    const calculateTotalValue = () => {
        const selectedCryptoData = cryptoData.find((crypto) => crypto.name.toLowerCase() === selectedCrypto);
        if (selectedCryptoData) {
          const value = Number(selectedCryptoData.priceUSD) * amount;
          // Use toLocaleString to format the number with commas
          const formattedValue = value.toLocaleString(); 
          setTotalValue(formattedValue);
        } else {
          // Handle the case where selected cryptocurrency data is not found
          setTotalValue(null);
        }
      };
    return (
        <>
            <section className="bg-slate-200 px-20 py-20 flex items-center">
                <div className="left w-2/4">
                    <div className="top-contents flex flex-col items-start mb-12">
                        <h1 className="text-black text-5xl mb-3 leading-tight font-extrabold">Understand the value of Crypto Currencies</h1>
                        <p className="text-black text-base mb-3.5">Just select the desired coin and exchange !!!</p>
                    </div>
                    <div className="center-contents flex items-center mb-12">
                        {/* <select value={selectedCrypto} onChange={handleCryptoSelection} id="cryptoSelect" name="cryptoSelect" className="px-4 rounded-lg bg-white py-4 text-black border-0 outline-0 mr-14">
                            <option>choose a crypto</option>
                            {cryptoData.map((crypto, index) => (
                                <option key={index} value={crypto.name.toLowerCase()}>
                                    {crypto.name}
                                </option>
                            ))}
                        </select> */}

                        {/* <Select value={selectedCrypto} onOpenChange={()=>handleCryptoSelection}>
                            <SelectTrigger className="w-[180px] h-[40px]">
                                <SelectValue placeholder="choose a bitcoin" />
                            </SelectTrigger>
                            <SelectContent>
                                {cryptoData.map((crypto, index) => (
                                    <SelectItem key={index} value={crypto.name.toLowerCase()}>
                                        {crypto.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>


                        <input value={amount} onChange={handleAmountValue} className="px-4 rounded-lg bg-white py-4 border-0 outline-0 text-black" type="number" name="value" id="value" placeholder="no-of-coins" style={{ appearance: 'textfield', WebkitAppearance: 'textfield' }}/> */}

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full space-y-6">
                            <div className="forms">
                                <FormField
                                    control={form.control}
                                    name="cryptocoin"
                                    render={({ field }) => (
                                        <>
                                            <FormItem>
                                                <FormLabel>Crypto</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="choose a bitcoin" />
                                                    </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {cryptoData.map((crypto, index) => (
                                                            <SelectItem key={index} value={crypto.name.toLowerCase()}>
                                                                {crypto.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>


                                            {/* <FormItem>
                                                <FormLabel>Amount</FormLabel> 
                                                <FormControl>
                                                    <Input placeholder="shadcn" {...field} />
                                                </FormControl>
                                                <FormMessage />                                      
                                            </FormItem> */}
                                        </>
                                    )}
                                />
                            </div>
                            <div className="button">
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                    </Form>
                    </div>
                    {/* <div className="bottom-contents">
                        <button onClick={calculateTotalValue} className="text-black border-0 outline-0 px-4 py-4 rounded-lg bg-neutral-950 text-white font-semibold">calculate</button>
                        <Button onClick={calculateTotalValue} variant="default">Calculate</Button>

                    </div> */}
                </div>

                <div className="right w-2/4 flex flex-col items-center">
                    <div className="img-container">
                        <Image className='rounded-lg' src={CryptoImage2} alt="CryptoImage" width={300} height={300} />
                    </div>
                    <div className="value-container">
                        {amount && selectedCrypto && (
                            <span className='text-black'>
                                {amount} {selectedCrypto} is equal to 
                            </span>
                        )}
                        <h2 className='text-black text-4xl font-black'>{totalValue !== null ? `$${totalValue}` : 'input an amount'}</h2>
                    </div>
                </div>
            </section>
        </>
    )
}