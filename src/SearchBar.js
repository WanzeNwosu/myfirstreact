import React, {Component} from 'react';
//import FontAwesome from 'react-fontawesome';

class SearchBar extends Component{
    state = {

    }
    render(){
        return(
            <div>
            
            <form className="search"><input type="search" placeholder="Search..." /></form>
            </div>

        )
    }
}

export default SearchBar;