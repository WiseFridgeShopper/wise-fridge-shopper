import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Paper from 'material-ui/Paper'
import {Card, CardMedia, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const magnet = {
  title: 'Henry David Thoreau Fridge Magnet #1',
  quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/henry-david-thoreau-quote-fridge-magnet-1_large.jpg?v=1380465723',
  itemNumber: 10,
  description: 'High-quality button style magnet with full magnetic back.',
  price: 3.95,
  size: [2, 3],
  mood: ['happy'],
  speaker_id: 4
}

const styles = {
  description: {
    backgroundColor: 'grey'
  },
  reviews: {
    backgroundColor: 'white'
  }
}

const SingleMagnet = props => {
  // when we implement a controlled component for this dumb component, below line show be uncommented
  // const magnet = props.selectedMagnet
  return (
    <div className={'row'}>
      <div className={'col-md-6'}>
        <Card>
          <CardHeader
            title={magnet.title}
            actAsExpander={true}
            >
          </CardHeader>
          <CardMedia >
            <img src={magnet.image} className={'img-responsive'}/>
          </CardMedia>
          <CardText >
            <List>
              <ListItem ><FlatButton label='buy me' primary={true}></FlatButton></ListItem>
              <ListItem primaryText={magnet.title} />
              <ListItem primaryText={`Size: ${magnet.size}`} />
              <ListItem primaryText={`Item #: ${magnet.itemNumber}`} />
              <ListItem primaryText={`Mood: ${magnet.mood}`} />
            </List>
          </CardText>
          <CardText expandable={true}>
            <List>
              <ListItem> 5.0 This is awesome!</ListItem>
              <ListItem> 0.5 This is shit!</ListItem>
            </List>
          </CardText>
        </Card>
      </div>
    </div>
  )
}

export default SingleMagnet
