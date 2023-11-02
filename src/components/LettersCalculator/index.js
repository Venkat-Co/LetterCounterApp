import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, textInput: ''}

  onChangeText = event => {
    const {count} = this.state
    this.setState({
      textInput: event.target.value,
      count: count + 1,
    })
  }

  render() {
    const {count, textInput} = this.state
    return (
      <div className="bg-container">
        <div className="main">
          <div className="card-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <form>
              <label className="label" htmlFor="inputId">
                Enter the phrase
              </label>
              <input
                type="text"
                className="text-box"
                value={textInput}
                placeholder="Enter the phrase"
                id="inputId"
                onChange={this.onChangeText}
              />
            </form>
            <p className="btn">No.of letters: {count}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
