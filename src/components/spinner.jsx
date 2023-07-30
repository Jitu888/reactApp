import React from 'react'

const spinner = () => {
    return (
        <>
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>
    )
}

export default spinner