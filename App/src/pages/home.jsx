import Agendamento from './Agendamento'
import React from "react"
import { useState, useEffect } from 'react'
import Loading from '../../components/layout/loading/Loading'


function Home() {
    <Loading />
    const [removeLoading, setRemoveLoading] = useState(false);


    useEffect(() => {
        fetch('https://crudserver2.herokuapp.com/pratos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setRemoveLoading(true)
            })
    })

    return (
        <div>
            {!removeLoading && Loading}
        </div>
    )

}

export default Home