import React from 'react';
import PropTypes from 'prop-types';



// function App() {
// return (
// <React.Fragment>
// <label htmlForm = "bar">bar</label>
// <input type = "text" onChange = {() => {console.log("clicked")}}/>
// </React.Fragment>
// )
// }

const App = () => {
    const profiles = [
        { name: "taro", age: 11},
        { name: "haro", age: 5},
        { name: "ichiro",age: 3}

        ]
    return (
        <div>
        {
        profiles.map((profile, index) =>{
            return <User name={profile.name} age={profile.age} key={index}/>
        })
        }
        </div>
        )
}

const User = (props) => {
    return <div>Hi, I am {props.name},{props.age}years old</div>
}
User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
    
}

export default App;
