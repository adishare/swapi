import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import { Card } from "react-bootstrap"
import Axios from "axios"
import LoadingSpinner from "./LoadingSpinner"

export const characterFilmsSlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    initialSlide: 0,
    arrows: true,
    swipe: true,
    responsive: [
        {
            breakpoint: 1425,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                swipe: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                swipe: true,
            },
        },
    ],
}

const CharacterFilms = ({ filmUrlList, ...props }) => {

    const [filmList, setFilmList] = useState([])
    const [isFetchingFilms, setIsFetchingFilms] = useState(true)

    const getFilmList = async (arrayOfUrl) => {
        let films = []
        await Promise.all(
            arrayOfUrl.map((url) =>
                Axios.get(url).then((response) => {
                    films.push(response.data)
                })
            )
        )
        setFilmList(films)
        setIsFetchingFilms(false)
    }

    useEffect(() => {
        getFilmList(filmUrlList)
    }, [filmUrlList])

    return (
        <Card bg="light" className="">
            <Card.Body className="">
                <div className="">
                    <Card.Title>Character's Movies</Card.Title>
                    {
                        isFetchingFilms ? <LoadingSpinner/> : (
                            <div className="text-secondary">
                                <Slider {...characterFilmsSlider} className="">
                                    {filmList.map((film, index) => {
                                        return (
                                            <div key={index} className="pr-3">
                                                <Card className="w-100 mb-lg-3 mb-sm-2 box-hover">
                                                    <Card.Body className="p-3">
                                                        <Card.Title
                                                            className="h6 mb-0"
                                                            style={{
                                                                height: "3em",
                                                                fontSize: 15,
                                                            }}
                                                        >
                                                            <span className="text-warning mr-2 d-inline-flex">
                                                                {
                                                                    film.release_date.split("-")[0]
                                                                }
                                                            </span>
                                                            - {film.title}
                                                        </Card.Title>

                                                        <Card.Text>
                                                            <small className="text-secondary">
                                                                by {film.director}
                                                            </small>
                                                        </Card.Text>
                                                
                                                        <div className="text-right mt-3">
                                                            <small>
                                                                {film.episode_id}{" "}
                                                                Episode
                                                            </small>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        )
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default CharacterFilms
