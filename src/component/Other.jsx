const NamePokemon =({Name}) =>{
    return (<p className="font-bold text-xl mb-2 text-center">{Name}</p>)
}

const Img =({url}) =>{
    return (<div>
        <img alt={url} className="my-4 mx-auto h-32"></img>
    </div>)
}

const LuckyOne=()=>{
    return (
        <p className="font-bold text-xl mb-2 text-center">Sang Terpilih</p>
        
    )
}

const Button = ({click}) =>{
    return (
        <button className="rounded bg-indigo-500 text-white p-4 w-full" onClick={click}>Pilih pokemon</button>
    )
}

const ContainerList =({children})=>{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">{children}
        </div> 
    )
}

const ListPokemon =({Name}) =>{
    return (<p className="font-bold text-xl mb-2 text-center">{Name}</p>)
}


export {NamePokemon, Img, Button, ListPokemon, ContainerList,LuckyOne}