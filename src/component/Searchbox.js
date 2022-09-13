import React from "react";



class Searchbox extends React.Component{
    render (){
        return(
        <div className="pa2">
           <input className="pa3 b--dark-red" type='search' placeholder="Search" onChange={this.props.searchChange}/>
        </div>
        );
    }
}

export default Searchbox;