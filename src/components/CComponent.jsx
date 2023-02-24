import React from "react"

class App extends React.Component {
    constructor(props){
        super(props)
    }


    render () {
        return (
            <h1 >
                Welcome to <span style={{color: "blue"}}>React </span>
                {this.props.word}
            </h1>
        )
    }
}

export default App;