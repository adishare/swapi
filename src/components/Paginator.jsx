import React from "react";
import { Container, Pagination } from "react-bootstrap";

const Paginator = ({ arrayOfPages, currentPage, goToPage }) => {

    return (
        <Container className='my-2'>
            <Pagination className='justify-content-center text-info'>
                {
                    arrayOfPages.map((pageNumber,index) => {
                        return (
                            <Pagination.Item 
                                key={index} 
                                active={pageNumber === currentPage}
                                onClick = { ()=> goToPage(pageNumber) }
                            >
                                {pageNumber}
                            </Pagination.Item>
                        )
                    })
                }
            </Pagination>
        </Container>
    );
};

export default Paginator
