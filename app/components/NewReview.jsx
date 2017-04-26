import React from 'react'
import {connect} from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'

export default class NewReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      magnetToReview: {},
      rating: null,
      comment: ''
    }
    this.onMagnetChange = this.onMagnetChange.bind(this)
    this.onCommentChange = this.onCommentChange.bind(this)
    this.onRatingChange = this.onRatingChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onMagnetChange(evt) {
    this.setState({
      magnetToReview: evt.target.value
    })
  }

  onCommentChange(evt) {
    this.setState({
      comment: evt.target.value
    })
  }
  onRatingChange(evt) {
    this.setState({
      rating: evt.target.value
    })
  }
  onSubmit(evt) {
    evt.preventDefault()

  }
  render() {
    const magnetsToReview = [{id: 1, text: 'mag1'}, {id: 2, text: 'mag2'}, {id: 3, text: 'mag3'}]
    return (
      <form>
       <DropDownMenu value={this.state.magnetToReview} onChange={this.handleChange}>
         {magnetsToReview && magnetsToReview.map(magnet => {
           return <MenuItem value={magnet.id} primaryText={magnet} />
         })}
       </DropDownMenu>
       <br />
       <TextField ref="login" type="text" name="login" floatingLabelText="Insert Comment Here"/>
       <br />
       <TextField ref="password" type="number" name="password" floatingLabelText="Rating (Number between 1-5)"/>
       <br />
        <RaisedButton type="submit" label="Create Review" className="button-submit" primary={true} />
      </form>
    )
  }
}
