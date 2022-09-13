import React from "react";
import Cardlist from "../component/Cardlist";
import Scroll from "../component/Scroll";
import Searchbox from "../component/Searchbox";


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            this.setState({
                robots:data
            })
        })
    }

    onSearchChange = (event)=>{
        this.setState({
            searchfield : event.target.value
        })
    }

    render(){
        const {robots , searchfield} = this.state;
        const Filter = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
        })
        return !robots.length?<h1>Loading.....</h1>:(
            <div className="tc">
                <h1>ROBOFRIENDS</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                    <Cardlist robots={Filter}/>
                </Scroll>
            </div>
        );
    }
}


export default App;