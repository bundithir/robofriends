import React from "react";
import Card from "./Card";



class Cardlist extends React.Component{
    
    
    render(){
        const Cardcomponent = this.props.robots.map((user,i) => {
        return <Card 
            key={i} 
            id={this.props.robots[i].id} 
            name={this.props.robots[i].name} 
            username={this.props.robots[i].username} 
            email={this.props.robots[i].email}
        />
    })
        return( 
            <div>
                {Cardcomponent}
            </div>
        )
    }
}

// const Cardlist = ({ robots }) => {
//     const Cardcomponent = robots.map((user, i) => {
//         return <Card id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
//     })
//     return ( 
//         <div>
//             {Cardcomponent}
//         </div>
//     )
// }


export default Cardlist;