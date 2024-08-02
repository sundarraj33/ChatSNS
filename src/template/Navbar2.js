const Navbar2 = ()=>{
    return(
        <>
            <div className="navbar2 h-full border-rose-950 border-2 sm:border-green-300 md:border-red-600 lg:border-sky-600 xl:border-purple-700 " >
                <h2 className="p-4 ">hello</h2>
            </div>
            <div className=" h-24 flex flex-row justify-center" style={{backgroundColor:'rgb(6,30,41)'}}>
                <p className="text-white p-4 text-center text-xl mx-2 my-4 xl:text-3xl">Latest Marketing Ideas & Hacks </p>
                <button className="bg-sky-500 text-lg h-14 mx-2 my-4 p-2 rounded-md">Subscribe for Weekly Ideas</button>                
            </div>
        </>
    )
}

export default Navbar2;