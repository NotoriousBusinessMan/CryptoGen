"use client"

import HeaderFile from "../../components/headerFile";
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Link from "next/link";

//7348258315ff4576b07e433f2a1089b0

interface Article {
    title: string;
    description: string;
    urlToImage: string;
    // Add other properties as needed
}

export default function blogs({searchParams}:{searchParams:{page:number}}){
    const [newsData, setNewsData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=7348258315ff4576b07e433f2a1089b0&page=${searchParams.page}&pageSize=4`);
        const data = await response.json();
        // Assuming the array of articles is in data.articles
        setNewsData(data.articles || []);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, []);
    return (
        <>
            <HeaderFile/>
            <section className="bg-white px-20 py-20 w-full">
                <div className="top flex justify-center items-center w-full mb-14">
                    <h2 className="text-black font-extrabold text-4xl">Our Blogs</h2>
                </div>
                <div className="bottom mb-14 px-2 py-2 flex justify-between flex-wrap w-full gap-1.5">
                    {newsData.map((article) => (
                        <div className="items bg-slate-200 w-1/5 px-4 py-4 mb-8 rounded-lg hover:shadow-2xl hover:bg-slate-300">
                            <Image className="mb-4 rounded-lg" src={article.urlToImage} alt={article.title} width={200} height={100}/>
                            <h3 className="text-black font-bold mb-4">{article.title}</h3>
                            <p className="text-black font-extralight text-sm">{article.description}</p>
                        </div>
                    ))}
                </div>
                <div className="button-container flex items-center justify-center">
                    <button className="mr-14 p-4 rounded-lg bg-black text-center flex justify-center items-center">
                        <a className="text-white" href={`/blogs?page=${Number(searchParams.page) - 1}`} rel="noopener noreferrer">
                            Prev page
                        </a>
                    </button>
                    <button className="p-4 rounded-lg bg-black text-center flex justify-center items-center">
                        <a className="text-white" href={`/blogs?page=${Number(searchParams.page) + 1}`} rel="noopener noreferrer">
                        Next page
                        </a>
                    </button>
                </div>
            </section>
        </>
    )
}



