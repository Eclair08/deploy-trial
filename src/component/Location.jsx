import { List } from "./PokemonList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Location = ()=>{
    const [data, setData]=useState([])

    const getData = async ()=>{
        const req=await fetch("https://pokeapi.co/api/v2/location-area")
        const respone=await req.json()
        const list =respone.results.map(async (el)=>{
            const url = el.url
            const getUrl = await fetch(url)
            const responeUrl = await getUrl.json()
            return responeUrl
        })
        setData (await Promise.all(list))
    }
    useEffect (()=>{
        getData()
    }, [])
    
    data.map(el => {
        console.log(el)
    })

    return (
    <>
    <List>
        {data.map(el => {
            console.log(el.id)
            return(
                <Link to={`/location/${el.id}`}>
                    <button className="rounded bg-indigo-500 text-white p-4 w-full">{el.name}</button>
                </Link>
            )
        })}
    </List>
    </>
    )
}