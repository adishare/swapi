import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PageHeader = ({fluid = true, title, subtitle}) => {
    return (
        <Container
            fluid={fluid}
            style={{
                background: "linear-gradient(-45deg,#5D576B 0%,#2E2F2F 100%)",
            }}
        >
            <Container>
                <Row className="py-5 text-light text-center">
                    <Col>
                        <h1> {title} </h1>
                        <h5> {subtitle} </h5>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default PageHeader;
