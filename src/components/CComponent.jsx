import React from "react"

class App extends React.Component {

state = {
    number: (0)
}

plus =() => {
    this.setState ({number: this.state.number + 3})
}


    render () {
        return (
            <>
            <h1 >
                Welcome to <span style={{color: "blue"}}>React </span>
                {this.props.word}
            </h1>

            <h2>Kelipatan 3</h2>
            <button onClick={this.plus}>+</button>
            <span style={{margin: "0 10px"}}>{this.state.number}</span>
            <button onClick={() => {this.setState ({number: this.state.number - 3})}}>-</button>

            </>
            
        )
    }
}

export default App;