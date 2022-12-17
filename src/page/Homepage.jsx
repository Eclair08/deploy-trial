import { Chosen } from "../component/Chosen";
import { List } from "../component/PokemonList";
import {NamePokemon, Img, Button, ListPokemon, ContainerList, LuckyOne} from "../component/Other";
import { useEffect, useState } from "react";

export const Homepage = ()=>{
    const [nama, setNama]=useState("Pidgey")
    const [img, setImg]=useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg")
    const [data, setData]=useState([])
    console.log("testing firebase");
    const getData = async ()=>{
        
        const req=await fetch("https://pokeapi.co/api/v2/pokemon")
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
    }, [data])

    const mapPoke=data.map(el=>{
        return {
            nama:el.name,
            img:el.sprites.other.dream_world.front_default
        }
    })

    const handleClick=(nama,img )=>{
        setImg (img)
        setNama (nama)
        const pokemon={
            nama:nama, 
            image:img
        }
        localStorage.setItem('mainPokemon',JSON.stringify(pokemon));
        // const imgurl = localStorage.getItem(img);
        // const namepoke = localStorage.getItem(nama);
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