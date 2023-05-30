import HTMLOverlay from "../Overlay"

type Args={
    error:any,
    reset?:any
}
const FallbackError=({error, reset}:Args)=>{
    return (
        <HTMLOverlay state={true}>
            <div role="alert">
                <h1>Ooops!</h1>
                <p>Something went wrong</p>
                <pre>{error.code}</pre>
                <pre>{error.message}</pre>
                <button onClick={()=>window.location.reload()} className="btn btn-primary" type="button">Reload</button>
            </div>
        </HTMLOverlay>
    )
}

export default FallbackError