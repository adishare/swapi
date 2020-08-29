import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingSpinner = () => {
    return (
        <div className='text-center w-100 p-lg-4'>
            <Spinner animation="border" variant="danger" size='lg' />
        </div>
    )
}

export default LoadingSpinner

