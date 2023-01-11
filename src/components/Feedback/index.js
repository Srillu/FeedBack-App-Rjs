// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  feedBackEmojisCard = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1 className="emoji-heading">
          How Satisfied are you with our customer support performance?
        </h1>
        <ul className="ul-container">
          {emojis.map(each => (
            <li key={each.id} className="emoji-list-item">
              <button
                type="button"
                className="button-item"
                onClick={this.onClickEmoji}
              >
                <img
                  className="emoji-icon"
                  src={each.imageUrl}
                  alt={each.name}
                />
                <p>{each.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYouCard = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-card">
        <img src={loveEmojiUrl} className="love-img" alt="love emoji" />

        <h1 className="emoji-heading">Thank You!</h1>

        <p className="thank-you-card-description">
          You will use you feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="main-div-container">
        <div className="card-container">
          {isFeedbackSelected ? this.thankYouCard() : this.feedBackEmojisCard()}
        </div>
      </div>
    )
  }
}
export default Feedback
