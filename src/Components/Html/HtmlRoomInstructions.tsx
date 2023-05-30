import { useState } from "react"
import HTMLOverlay from "./Overlay"

type Links={
    [key: string]:string
}

const RoomInstructions=()=>{
    let closed=false
    //const [closed, setClosed]=useState(false)

    const links:Links={
        "github": "https://github.com/Jonatanfroeling-user",
    }
    const linksElm = Object.entries(links).map((l,idx)=> {
        const [k,v]=l as [string,string]
        return (<li key={"listitem-"+idx}>
            <a href={v} target="_blank" rel="noreferrer" > 
                <span className="cl-primary">{k}</span> 
            </a>
        </li>)
    })


    
    function closeWindow(){
        //setClosed(true)
        document.getElementById('overlay')?.remove()
        console.clear()
    }

    return (
        <HTMLOverlay state={closed}>
            <div className="instructions">
                <div className='content'>
                    <div className='title'>
                        <h2>
                            Welcome!
                        </h2>
                    </div>
                    {
                        (window.innerWidth > 767) ? 
                        <>
                            <h3>Movement</h3>
                            <p>Use Arrows and mouse to navigate</p>
                            <div className="icons">
                                <img src="Images/keys.png" alt="keys.png" className='icon'/>
                                <img src="Images/pointer.png" alt="pointer.png" className='icon small'/>
                            </div>

                            <h4>Opening a door</h4>
                            <p>A door will give a light if you are close enough. If you then point at the door it will turn <span
                                className="green">green</span>.</p>
                            <p>To enter: <strong>click</strong> on the door or simply <strong>walk towards</strong> it.</p>
                            <h4>Space Room (beta)</h4>
                            <p>Might require a reload to render all clouds. To exit: remove or edit the url </p>
                            <h4>Reload page!</h4>
                            <p>If you find yourself following through the floor or some wierd bug, <br />
                            just give it a good <strong>refresh</strong> </p>
                        </> 
                        : <p>Mobile not supported.</p>
                    }
                    <br />
                    <p>links:</p>
                    <ul className="links">
                        {linksElm}
                    </ul>
                    <footer className="d-flex justify-content-center"><small>@autor Jonatan Verstraete</small></footer>
                </div>
                <div className="d-flex justify-content-center mt-2">
                    <button id="continue" onClick={()=>closeWindow()} className="button_main">continue</button>
                </div>
            </div>
        </HTMLOverlay>
    )
}


export default RoomInstructions