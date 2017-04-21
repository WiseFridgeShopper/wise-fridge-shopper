import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Stars from 'material-ui/svg-icons/action/stars'

const Review = (props) => {
  return (
    <Card>
      <CardHeader
        title="Product/ User Name Here"
        avatar={<Stars/>}
        />
      <CardText>
        Review for crappy product goes here.
      </CardText>
    </Card>
  )
}

export default Review
