import React, { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import Axios from "axios"
import LoadingSpinner from "./LoadingSpinner"

const CharacterVehicles = ({ vehicleUrlList, ...props }) => {

    const [vehicleList, setVehicleList] = useState([])
    const [isFetchingVehicles, setIsFetchingVehicles] = useState(true)

    const getVehicleList = async (arrayOfUrl) => {
        let vehicles = []
        await Promise.all(
            arrayOfUrl.map((url) =>
                Axios.get(url).then((response) => {
                    vehicles.push(response.data)
                })
            )
        )
        setVehicleList(vehicles)
        setIsFetchingVehicles(false)
    }

    useEffect(() => {
        getVehicleList(vehicleUrlList)
    }, [vehicleUrlList])

    return (
        <Card bg="info" className="mt-3">
            <Card.Body className="">
                <div className="">
                    <Card.Title className='text-light'>Character's Vehicles</Card.Title>
                    {
                        isFetchingVehicles ? <LoadingSpinner/> : (
                            <div className="text-secondary">
                                    {vehicleList.map((vehicle, index) => {
                                        return (
                                            <div key={index} className="pr-3">
                                                <Card className="w-100 mb-lg-3 mb-sm-2 box-hover">
                                                    <Card.Body className="p-3">
                                                        <Card.Title
                                                            className="mb-0"
                                                        >
                                                            <span className="text-danger mr-2 d-inline-flex">
                                                                { vehicle.name }
                                                            </span>
                                                            <small>
                                                                {vehicle.vehicle_class}
                                                            </small>
                                                        </Card.Title>

                                                        <Card.Text>
                                                            <small className="text-secondary">
                                                                Model {vehicle.model}
                                                            </small>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        )
                                    })}
                            </div>
                        )
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default CharacterVehicles
