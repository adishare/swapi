import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { Container } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import PeopleCard from "../components/PeopleCard";
import queryString from 'query-string';

import * as peopleActions from "../store/people/actions";
import Paginator from "../components/Paginator";
import LoadingSpinner from "../components/LoadingSpinner";

const PeoplePage = ({ peopleList, isFetching, peopleListCount, getPeopleListRequest, ...props }) => {

    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        let {page} = queryString.parse(props.location.search)
        let query = {}
        if(page) {
            query.page = Number(page)
            setCurrentPage(Number(page))
        }
        getPeopleListRequest(query)
    }, [getPeopleListRequest,props.location.search])

    const goToPage = (pageNumber) => {
        props.history.push(`?page=${pageNumber}`)
    }

    if(!peopleList.length) return (
        <>
            <Navbar />
            <PageHeader title="People" subtitle="All Starwars Character"></PageHeader>
            <LoadingSpinner/>
            <Footer/>
        </>
    )

    let totalPage = Math.ceil(peopleListCount / 10)
    let arrayOfPages = Array.from(Array(totalPage), (value,key) => key + 1)

    return (
        <div>
            <Navbar />
            
            <PageHeader title="People" subtitle="All Starwars Character"></PageHeader>
            
            <Paginator arrayOfPages={arrayOfPages} currentPage={currentPage} goToPage={goToPage} />
            
            <div className="d-flex">
                <Container className="my-2 d-flex justify-content-center">
                    <div id="people-list" >
                        {
                            isFetching ? <LoadingSpinner/> : peopleList.map((people, index) => {
                                return (
                                    <div key={index} >
                                        <PeopleCard people={people}></PeopleCard>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
            
            <Paginator arrayOfPages={arrayOfPages} currentPage={currentPage} goToPage={goToPage} />
            
            <Footer></Footer>
        </div>
    );
};

export default withRouter(
    connect(
        ({ people }) => ({
            ...people,
        }),
        (dispatch) => bindActionCreators({ ...peopleActions }, dispatch)
    )(PeoplePage)
);
