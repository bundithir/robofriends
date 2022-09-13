import React from "react";

// const Card = ({id,name,email}) => {
//     // const {id,name,email} = props;
//     return (
//         <div className="bg-dark-green grow dib pa3 ma2 br3 shadow-5 bw2">
//             <img src={`https://robohash.org/${id}`} alt="roboys"  />
//             <div className="tc">
//                 <h2>{name}</h2>
//                 <p>{email}]</p>
//             </div>
//         </div>
//     );
// }


class Card extends React.Component{
    render(){
        return (
            <div className="bg-light-green grow dib pa3 ma2 br3 shadow-5 bw2">
                <img src={`https://robohash.org/${this.props.id}`} alt="roboys"  />
                <div className="tc">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}]</p>
                </div>
            </div>
        );
    }
}


export default Card;