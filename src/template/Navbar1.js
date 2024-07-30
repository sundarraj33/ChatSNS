import Navbar2 from "./Navbar2";
const Navbar1 = ()=>{
    return(
        <>        
        <nav className="h-16 bg-black text-white">             
            <div className="nav_bar container mx-auto text-center align-item text-lg flex flex-row justify-between p-4 w-100">
                    <div className="title">
                        <p>ChatSNS.com</p>
                    </div>
                    <div className="navmain">
                        <ul className="flex flex-row space-x-5">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="right_box">
                        <p>Account</p>
                    </div>
            </div>
        </nav>
        <Navbar2/>        
        </>
    )
}

export default Navbar1;