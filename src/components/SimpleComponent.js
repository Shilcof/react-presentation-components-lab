// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {

    state = {
        mood: "happy"
    }

    updateMood(mood) {
        return (mood === "happy") ? "sad" : "happy"
    }

    handleClick = () => {
        this.setState(prevState=>({
            mood: this.updateMood(prevState.mood)
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }

}

export default SimpleComponent