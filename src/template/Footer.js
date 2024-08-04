const Footer = ()=>{
    return(
        <>
        <footer>
            <div className="fotter-side" style={{'backgroundColor':'#06202d','height':'300px'}}>
                <div className="text-white container flex flex-row justify-between"> 
                    <div className="intro p-5 my-3 w-100 bg-green-300">   
                        <div className="m-3 w-28 bg-red-300">
                            <p className="text-2xl">ChatSNS.com</p>
                            <p>Chat SearchNSave is designed to assist with your web searched and provide recommendations, It does not store any personal data or compromise your privacy.Your browsing experience remains secure and confudential</p>
                            <ul>
                                <li>

                                </li>
                            </ul>
                            </div>                     
                        
                    </div>
                    <div className="location m-9">
                        <p>6, Vivekanthar Street , Dubai Mian Road,Dubai.</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;