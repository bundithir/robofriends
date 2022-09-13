import React from "react";


class Errorbundle extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }
    componentDidCatch(error,info){
        this.setState({
            hasError:true
        })
    }

    render(){
        
        return this.state.hasError?<h1>OOP That's ERROR</h1>:(
        <div>
            {this.props.children}
        </div>
        )
    }
}

export default Errorbundle;