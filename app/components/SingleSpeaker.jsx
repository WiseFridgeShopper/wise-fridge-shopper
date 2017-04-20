import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {GridList, GridTile} from 'material-ui/GridList'

const tilesData = [
  {
    title: 'Marcus Aurelius Fridge Magnet #1',
    quote: 'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-1_large.jpg?v=1380466387'
  },
  {
    title: 'Marcus Aurelius Fridge Magnet #2',
    quote: 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-2_large.jpg?v=1380466539'
  },
  {
    title: 'Marcus Aurelius Fridge Magnet #3',
    quote: 'You have power over your mind - not oustide events. Realize this, and you will find strength.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-3_large.jpg?v=1380466642'
  },
  {
    title: 'Virginia Woolf Fridge Magnet #1',
    quote: 'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/virginia-woolf-quote-fridge-magnet-1_large.jpg?v=1380467337'
  },
  {
    title: 'Virginia Woolf Fridge Magnet #2',
    quote: 'If you do not tell the truth about yourself you cannot tell it about other people.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/virginia-woolf-quote-fridge-magnet-2_large.jpg?v=1380467420'
  },
  {
    title: 'Virginia Woolf Fridge Magnet #3',
    quote: 'One cannot think well, love well, sleep well, if one has not dined well.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/virginia-woolf-quote-fridge-magnet-3_large.jpg?v=1380467486',

  }
]

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
}

const SingleSpeaker = props => {
  return (
    <Card>
      <CardHeader
        title="Speaker Name"
        actAsExpander={true}
        showExpandableButton={true}></CardHeader>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.image}
              title={tile.title}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.image} />
            </GridTile>
          ))}
        </GridList>
      <CardText expandable={true}>
        I am the bio.
      </CardText>
    </Card>
  )
}

export default SingleSpeaker
