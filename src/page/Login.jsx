import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            username: username,
            password: password
        }

        const req = await fetch('https://kobarsept.com/api/login',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userData)
        })

        const resp = await req.json()

        localStorage.setItem('token', JSON.stringify(resp))
        localStorage.setItem('user', JSON.stringify(userData))
        // console.log(resp.token);
        navigate('/')
    }

    return(
        <>
        <div className="flex justify-center ">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 py-10">
                <div>
                <label>
                    username:
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border-2 border-solid border-black"
                    />
                </div>
                <div>
                <label>
                    password:
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 border-solid border-black"
                    />
                </div>
                <button type="submit" value="Submit" className="border-2 border-solid border-black">Submit</button>
            </form>
        </div>
        </>
    )
}