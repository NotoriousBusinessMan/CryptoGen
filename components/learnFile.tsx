import Image from 'next/image'
import FirstImage from '../assets/svg/one.svg'
import SecondImage from '../assets/svg/two.svg'
import ThirdImage from '../assets/svg/three.svg'


export default function learnFile(){
    return (
        <>
            <section className="bg-white px-20 py-20 ">
                <div className="top flex justify-center items-center mb-20">
                    <h2 className="text-black font-semibold text-4xl">Learn More About <b className="font-black border-b-4 border-stone-950">CRYPTO</b></h2>
                </div>

                <div className="bottom">
                    <div className="item flex justify-between items-center py-20">
                        <div className="left-contents w-1/2">
                            <h1 className='text-black text-2xl mb-8 font-black '>What are Crypto Currencies ?</h1>
                            <p className='text-black text-base'>Cryptocurrencies are digital or virtual currencies that use cryptographic techniques for secure transactions on a decentralized technology called blockchain. Unlike traditional currencies, cryptocurrencies operate independently of central authorities, offering transparency and security. Bitcoin, introduced in 2009, paved the way for a variety of digital currencies. They enable peer-to-peer transactions globally without intermediaries, serving as alternative investments and sparking discussions about their impact on the future of finance.</p>
                        </div>
                        <div className="right-contents w-1/2 flex justify-center items-center">
                            <Image src={ThirdImage} alt='first one' width={300} height={300}/>
                        </div>
                    </div>

                    <div className="item flex flex-row-reverse justify-between items-center py-20">
                        <div className="left-contents w-1/2 text-right">
                            <h1 className='text-black text-2xl mb-8 font-black '>How to choose best Crypto ?</h1>
                            <p className='text-black text-base'>Choosing the best cryptocurrency involves careful consideration of various factors. Investors often assess a digital asset's underlying technology, team expertise, and market reputation. Evaluating the project's purpose, use case, and potential for long-term growth is crucial. Security features, community support, and regulatory compliance are also key considerations. Keeping an eye on market trends, staying informed about industry developments, and seeking advice from reputable sources can help navigate the dynamic landscape of cryptocurrencies. Ultimately, a well-informed decision, aligned with individual investment goals and risk tolerance, is vital for selecting the best crypto assets.</p>
                        </div>
                        <div className="right-contents w-1/2 flex justify-start items-center">
                            <Image src={FirstImage} alt='first one' width={400} height={400}/>
                        </div>
                    </div>


                    <div className="item flex justify-between items-center py-20">
                        <div className="left-contents w-1/2">
                            <h1 className='text-black text-2xl mb-8 font-black '>Best Crypto Currencies</h1>
                            <p className='text-black text-base'>Identifying the best cryptocurrencies involves analyzing various aspects of each digital asset. Factors such as market performance, technological innovation, security features, and community support play pivotal roles in the evaluation process. Bitcoin, as the pioneering cryptocurrency, holds a prominent position, valued for its decentralized nature and adoption. Ethereum stands out for its smart contract capabilities and decentralized applications. Binance Coin and Cardano have gained recognition for their unique features and scalability. Additionally, factors like regulatory compliance, real-world applications, and overall market trends contribute to determining the best cryptocurrencies. Staying informed about each crypto's strengths and potential challenges aids investors in making well-informed decisions in this dynamic and evolving landscape.</p>
                        </div>
                        <div className="right-contents w-1/2 flex justify-end items-center">
                            <Image src={SecondImage} alt='first one' width={400} height={400}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}