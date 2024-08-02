const Main = ()=>{
    return(
        <>
        <main style={{backgroundColor:'#04151d',height:'100%'}}>
            <div className="container mx-auto ">
                <div className="main-navbar justify-between">                
                    <ul className="container flex flex-row justify-between text-1xl">  
                        <li className="p-1 my-3 text-xl">Tags:</li>                      
                        <li className="rounded-xl border-2 border-greens p-1 my-3 hover:bg-greens hover:text-black">ChatGPT</li>
                        <li className="rounded-lg border-2 border-greens p-1 my-3 hover:bg-greens hover:text-black">Brainstorming</li>
                        <li className="rounded-lg border-2 border-greens p-1 my-3 hover:bg-greens hover:text-black">Marketing</li>
                        <li className="rounded-lg border-2 border-greens p-1 my-3 hover:bg-greens hover:text-black">Social Media</li>
                        <li className="rounded-lg border-2 border-greens p-1 my-3 hover:bg-greens hover:text-black">content Creation</li>
                    </ul>
                </div>

            <div className="cardbox">
                <div className="card box1 ">
                    <div className="imageset">

                    </div>
                    <div className="syntex">

                    </div>
                </div>
            </div>                
            </div>
        </main>
        </>
    )
}

export default Main;