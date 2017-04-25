import React from 'react'
import {connect} from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'

export default class NewReview extends React.Component {
  render() {
    const magnetsToReview = [1, 2, 3]
    return (
      <form>
       <DropDownMenu value={''} onChange={this.handleChange}>
         {magnetsToReview && magnetsToReview.map(magnet => {
           return <MenuItem value={magnet.id} primaryText={magnet} />
         })}
       </DropDownMenu>
       <br />
       <TextField ref="login" type="text" name="login" floatingLabelText="Insert Comment Here"/>
       <br />
       <TextField ref="password" type="password" name="password" floatingLabelText="Rating (Number between 1-5)"/>
       <br />
        <RaisedButton type="submit" label="Create Review" className="button-submit" primary={true} />
      </form>
    )
  }
}
