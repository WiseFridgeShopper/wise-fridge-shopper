import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Paper from 'material-ui/Paper'
const magnet = {
  title: 'Henry David Thoreau Fridge Magnet #1',
  quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  image: 'cdn.shopify.com/s/files/1/0273/4903/products/henry-david-thoreau-quote-fridge-magnet-1_large.jpg?v=1380465723',
  itemNumber: 10,
  description: 'High-quality button style magnet with full magnetic back.',
  price: 3.95,
  size: [2, 3],
  mood: ['happy'],
  speaker_id: 4
}

const SingleMagnet = props => {
  return (
    <div>
      <Paper>
        <h1>Single Magnet Route</h1>
        <List>
          <ListItem primaryText={magnet.title} />
          <ListItem primaryText={`Product description: ${magnet.description}`} />
          <ListItem primaryText={`Size: ${magnet.size}`} />
          <ListItem primaryText={`Item #: ${magnet.itemNumber}`} />
          <ListItem primaryText={`Mood: ${magnet.mood}`} />
        </List>
      </Paper>
    </div>
  )
}

export default SingleMagnet
