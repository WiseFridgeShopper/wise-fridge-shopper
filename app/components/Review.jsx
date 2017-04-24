import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Stars from 'material-ui/svg-icons/action/stars'

const Review = (props) => {
  return (
    <Card>
      <CardHeader
        title={props.name}
        subtitle={props.rating}
        avatar={<Stars/>}
        />
      <CardText>
        {props.text}
      </CardText>
    </Card>
  )
}

export default Review
