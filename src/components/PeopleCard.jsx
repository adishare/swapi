import React from "react"
import { Card, Row, Col, Badge } from "react-bootstrap"
import { Link } from "react-router-dom"

const PeopleCard = ({ people }) => {
    let parseUrl = people.url.split("/")
    let peopleId = parseUrl[parseUrl.length - 2]

    return (
        <Link
            style={{ textDecoration: "none", color: "#29303b" }}
            className="pr-2"
            to={{
                pathname: `/people/${peopleId}`,
            }}
        >
            <Card
                className="box-hover cursor-pointer"
                style={{ borderRadius: 4, maxWidth: 700, minWidth: 400 }}
            >
                <Row className="m-0">
                    <Col md={8} className="px-0">
                        <div className="p-3 h-100">
                            <Card.Title className="font-weight-bold text-muted mb-0">
                                {people.name}
                            </Card.Title>
                            <Row>
                                <Col>
                                    <small className="mr-3">
                                        <Badge
                                            variant={
                                                people.films.length > 0
                                                    ? "success"
                                                    : "dark"
                                            }
                                        >
                                            {people.films.length}
                                        </Badge>
                                        <span className="text-muted">
                                            Films
                                        </span>
                                    </small>
                                    <small className="mr-3">
                                        <Badge
                                            variant={
                                                people.vehicles.length > 0
                                                    ? "success"
                                                    : "dark"
                                            }
                                        >
                                            {people.vehicles.length}
                                        </Badge>
                                        <span className="text-muted">
                                            Vehicles
                                        </span>
                                    </small>
                                    <small className="mr-3">
                                        <Badge
                                            variant={
                                                people.starships.length > 0
                                                    ? "success"
                                                    : "dark"
                                            }
                                        >
                                            {people.starships.length}
                                        </Badge>
                                        <span className="text-muted">
                                            Starships
                                        </span>
                                    </small>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Link>
    )
}

export default PeopleCard
