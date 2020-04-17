import React from 'react'
import SearchBar from './SearchBar'
import MenuBar from './menu_bar'

export default function navbar({onSearchTerm}){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/home">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <MenuBar/>
                <SearchBar onSearchTerm = {onSearchTerm}/>
            </div>
            
        </nav>
    )
}