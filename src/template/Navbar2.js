const Navbar2 = ()=>{
    return(
        <>
            <div className="navbar2 h-full " >
                {/* <img src='https://portswigger.net/cms/images/22/e6/4281-article-chatgpt_copy.jpg'></img> */}
                <img src='https://www.contractworks.com/hubfs/Imported_Blog_Media/ai-technology-brain-background-digital-transformation-concept-1.jpg' classname='' style={{height:'400px',width:'100%'}}></img>
            </div>
            <div className=" h-24 flex flex-row justify-center" style={{backgroundColor:'rgb(6,30,41)'}}>
                <p className="text-white p-4 text-center text-xl mx-2 my-4 xl:text-3xl">Latest Marketing Ideas & Hacks </p>
                <button className="bg-sky-500 text-lg h-14 mx-2 my-4 p-2 rounded-md">Subscribe for Weekly Ideas</button>                
            </div>
        </>
    )
}

export default Navbar2;