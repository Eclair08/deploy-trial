import { useEffect, useState } from "react"
import { NamePokemon, ContainerList, Img } from "../component/Other"

    const Fight = () =>{
    const player = JSON.parse(localStorage.getItem("user"))
    const token = JSON.parse(localStorage.getItem("token"))
    const character1 = JSON.parse(localStorage.getItem("mainPokemon"))
    const character2 = JSON.parse(localStorage.getItem("mob"))
    
    const [winner,setWiner]=useState('')
    const [turn,setTurn]=useState(0)
    const [hp1,setHp1]=useState(100)
    const [hp2,setHp2]=useState(100)
    console.log(token.token);
    // console.log(player.username);
    console.log(character1);
    // console.log(character2.nama);
    const dmg = (winner) => {
        if (winner === character1.name) {
            setHp2(hp2-10)
        }
        else if (winner === character2.name){
            setHp1(hp1-10)
        }
    }

    const handleClick = async () => {
        const req = await fetch('https://kobarsept.com/api/fight',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token.token}`
            },
            body: JSON.stringify({
                character1: character1.nama,
                character2: character2.nama,
                player: player.username
            })
        })
        const resp = await req.json()
        setWiner(resp.winner)
        setTurn(turn+1)
    }

    useEffect(() => {
        dmg(winner)
    },[winner, turn])

    useEffect(() => {
        if (hp1 === 0) {
            alert(`${character1.nama} win`)
        }
        else if (hp2 === 0) {
            alert(`${character2.nama} win`)
        }
    })

    return (
    <>
    <button >Trainer: {player.username}</button>
    <button >Turn: {turn}</button>

    <ContainerList>
        <NamePokemon Name={character1.nama}/>
        <Img url={character1.image}/>
        <button>{hp1}</button>
    </ContainerList>
    
    <ContainerList>
        <NamePokemon Name={character2.nama}/>
        <Img url={character2.image}/>
        <button>{hp2}</button>
    </ContainerList>
    
    <button onClick={handleClick}>FIGHT</button> 
    </>
    )
}

export default Fight