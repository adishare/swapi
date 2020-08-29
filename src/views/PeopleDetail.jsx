import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { withRouter } from "react-router"
import { bindActionCreators } from "redux"
import * as peopleActions from "../store/people/actions"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CharacterFilms from "../components/CharacterFilms"
import CharacterStarship from "../components/CharacterStarship"
import LoadingSpinner from "../components/LoadingSpinner"
import Axios from "axios"
import CharacterVehicles from "../components/CharacterVehicles"

const CharacterSpeciesAndHomeworld = ({speciesUrl, homeworldUrl}) => {

    const [species, setSpecies] = useState({})
    const [homeworld, setHomeworld] = useState({})

    const getCharacterSpecies = async () => {
        Axios.get(speciesUrl).then((response) => {
            setSpecies(response.data)
        })
    }

    const getCharacterHomeworld = async () => {
        Axios.get(homeworldUrl).then((response) => {
            setHomeworld(response.data)
        })
    }

    useEffect(() => {
        getCharacterSpecies()
        getCharacterHomeworld()
        return () => {
            setSpecies({})
            setHomeworld({})
        }
    }, [])

    return (
        <div>
            Species : {species.name || '-'} <br/>
            Homeworld : {homeworld.name || '-'}
        </div>
    )
}

const PeopleDetail = ({ getPeopleByIdRequest, setActivePeopleRequest, activePeople, match, ...props }) => {

    useEffect(() => {
        getPeopleByIdRequest(match.params.peopleId)
        return () => {
            setActivePeopleRequest(null)
        }
    }, [getPeopleByIdRequest, match.params.peopleId, setActivePeopleRequest])

    if(!activePeople) return (
        <div>
            <Navbar></Navbar>
            <LoadingSpinner/>
            <Footer></Footer>
        </div>
    )

    return (
        <div className="view-people-view">

            <Navbar></Navbar>

            <Container style={{ background: "#29303B" }}>
                <Container className=" h-100 text-light py-5 px-5">
                    <Row className="my-auto">
                        <Col lg={8}>
                            <h1>{activePeople.name}</h1>
                            <div>
                                <span className="text-warning mr-2 d-inline-flex h5">
                                    {activePeople.gender},
                                </span>
                                <span className="text-light mr-2 d-inline-flex h5">
                                    Birth Year : {activePeople.birth_year}
                                </span>
                            </div>
                            <div className="">
                                <span>Height : {activePeople.height}</span>
                                <span className="mx-4">
                                    Mass : {activePeople.mass}
                                </span>
                            </div>
                            <div className="">
                                <span>
                                    Hair Color : {activePeople.hair_color}
                                </span>
                                <span className="mx-4">
                                    Skin Color : {activePeople.skin_color}
                                </span>
                                <span className="mx-4">
                                    Eye Color : {activePeople.eye_color}
                                </span>
                            </div>
                        </Col>
                        <Col lg={4} className="d-flex justify-content-end">
                            <CharacterSpeciesAndHomeworld  speciesUrl={activePeople.species[0]} homeworldUrl={activePeople.homeworld} />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container className='mt-2'>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={() => props.history.goBack() } >People</Breadcrumb.Item>
                    <Breadcrumb.Item active > { activePeople && activePeople.name} </Breadcrumb.Item>
                </Breadcrumb>
            </Container>

            <Container className="pt-2 pb-5">
                <Row>
                    <Col lg={8}>

                        <CharacterFilms filmUrlList={activePeople.films} />

                        <CharacterVehicles vehicleUrlList={activePeople.vehicles} />

                    </Col>
                    <Col lg={4}>

                        <CharacterStarship starshipUrlList={activePeople.starships} />

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default withRouter(
    connect(
        ({ people }) => ({ ...people }),
        (dispatch) => bindActionCreators({ ...peopleActions }, dispatch)
    )(PeopleDetail)
)
