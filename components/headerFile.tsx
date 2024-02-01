export default function headerFile(){
    return (
        <>
            <header className="flex justify-between items-center px-20 py-4 bg-white">
                <div className="left">
                    <h1 className="font-bold text-3xl text-stone-950">CryptoGen</h1>
                </div>

                <div className="center">
                    <ul className="flex justify-between items-center">
                        <li className="text-stone-950 mr-10 hover:text-sky-950 py-1 px-1 rounded-lg"><a href="/">Home</a></li>
                        <li className="text-stone-950 mr-10 hover:text-sky-950 py-1 px-1 rounded-lg"><a href="#">Pricing</a></li>
                        <li className="text-stone-950 mr-10 hover:text-sky-950 py-1 px-1 rounded-lg"><a href="#">Services</a></li>
                        <li className="text-stone-950 hover:text-sky-950 py-1 px-1 rounded-lg"><a href="/blogs">Blogs</a></li>
                    </ul>
                </div>

                <div className="right flex justify-between items-center">
                    <a className="text-stone-950 not-special-button mr-10" href="/signin">Sign In</a>
                    <a className="text-black border-0 outline-0 px-4 py-4 rounded-lg bg-neutral-950 text-white font-semibold" href="/login">Log In</a>
                </div>
            </header>
        </>
    )
}