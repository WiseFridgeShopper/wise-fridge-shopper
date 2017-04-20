import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {GridList, GridTile} from 'material-ui/GridList'

const SingleSpeaker = props => {
  return (
    <Card>
      <CardHeader
        title="Speaker Name"
        actAsExpander={true}
        showExpandableButton={true}></CardHeader>
      <CardText expandable={true}>
        I am the bio.
      </CardText>
    </Card>
  )
}

export default SingleSpeaker
