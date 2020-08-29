import React, { useState, useEffect } from 'react'
import { Card, } from 'react-bootstrap'
import Axios from 'axios'

const CharacterStarship = ({ starshipUrlList, ...props }) => {

    const [starshipLst, setStarshipLst] = useState([])

    const getFilmList = async (arrayOfUrl) => {
        let starships = []
        await Promise.all(
            arrayOfUrl.map((url) =>
                Axios.get(url).then((response) => {
                    starships.push(response.data)
                })
            )
        )
        setStarshipLst(starships)
    }

    useEffect(() => {
        getFilmList(starshipUrlList)
    }, [starshipUrlList])

    return (
        <div className="">
            <h5>Character's Starships</h5>
            {
                starshipLst.map((starship,index) => {
                    return(
                        <Card bg='light' key={index} className='p-lg-2 p-xl-3 p-md-1 mb-3' style={{ top: '1em' }}>
                            <Card.Body>
                                <h4 className='font-weight-bold'> {starship.name} </h4>
                                <h5> <span className='text-muted'> {starship.model} </span> by <span className='text-danger'> {starship.manufacturer} </span> </h5>
                                <div className="">
                                
                                    <p className='text-muted text-center'>Class : {starship.starship_class} </p>
                                    <div className='my-4'>
                                        <h6> <span className=''> Spec : </span> </h6>
                                        <div className="text-small">
                                            <p className='mb-1'> {starship.length} Length </p>
                                            <p className='mb-1'> {starship.max_atmosphering_speed} Max Speed </p>
                                            <p className='mb-1'> {starship.crew} Crew </p>
                                            <p className='mb-1'> {starship.passengers} Passanger </p>
                                            <p className='mb-1'> {starship.cargo_capacity} Cargo Capasity </p>
                                            <p className='mb-1'> {starship.consumables} of Consumeable </p>
                                            <p className='mb-1'> {starship.hyperdrive_rating} Hyperdrive Rating </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                    )
                })
            }
        </div>
    )
}

export default CharacterStarship


