import { Chosen } from "./Chosen";
import { List } from "./PokemonList";
import {NamePokemon, Img, Button, ListPokemon, ContainerList, LuckyOne} from "./Other";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

export const Pokemon = ()=>{
    const {id} = useParams()
    const [nama, setNama]=useState("Pidgey")
    const [img, setImg]=useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg")
    const [data, setData]=useState([])

    const getData = async ()=>{
        const req=await fetch(`https://pokeapi.co/api/v2/location-area/${id}`)
        const respone=await req.json()
        console.log(respone)
        const list =respone.pokemon_encounters.map(async (el)=>{
            const url = el.pokemon.url
            const getUrl = await fetch(url)
            const responeUrl = await getUrl.json()
            return responeUrl
        })
        setData (await Promise.all(list))
    }
    useEffect (()=>{
        getData()
    }, [id])

    const mapPoke=data.map(el=>{
        return {
            nama:el.name,
            img:el.sprites.other.dream_world.front_default
        }
    })

    const handleClick=(nama,img )=>{
        setImg (img)
        setNama (nama)
    }
    
    return (
        <>
        
        <Chosen>
            <LuckyOne/>
            <Img url={img}/>
            <NamePokemon Name={nama}/>
        </Chosen>
        <List>
            {
                mapPoke.map(el=>{
                return (
                <ContainerList>
                    <ListPokemon Name={el.nama}/>
                    <Img url={el.img}/>
                    <Button click={()=>{
                        handleClick(el.nama,el.img)
                    }}/>
                </ContainerList>
                )
                })
            }
            
        </List>
        </>
    )
}