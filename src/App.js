import React from 'react';



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
        { name: "haro", age: 22},
        { name: "ro",}

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

User.defaultProps = {
    age: 1
}
export default App;
