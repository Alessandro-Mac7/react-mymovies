import React from 'react'

export default function movieList(props){

    return(
        <ul>
            {
                props.movies.map(movie => <li key={movie.imbdID}>{movie.Title}</li>)
            }
        </ul>
    )

}