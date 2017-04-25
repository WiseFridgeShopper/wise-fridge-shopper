import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List'
import Paper from 'material-ui/Paper'
import {Card, CardMedia, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import {GridList, GridTile} from 'material-ui/GridList'
import AppBar from 'material-ui/AppBar'
import Review from './Review'
import MagnetThumbnail from './MagnetThumbnail'
import {addToOrder} from '../reducers/cart'
import store from '../store'

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

const relatedMagnets = [
  {
    title: 'Henry David Thoreau Fridge Magnet #2',
    quote: "Our life is frittered away by detail. Simplify, simplify.",
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/henry-david-thoreau-quote-fridge-magnet-2_large.jpg?v=1380465732',
    itemNumber: 11,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 4
  },
  {
    title: 'Henry David Thoreau Fridge Magnet #3',
    quote: "We must walk consciously only part way toward our goal and then leap in the dark to our success.",
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/henry-david-thoreau-quote-fridge-magnet-3_large.jpg?v=1380465704',
    itemNumber: 12,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 4
  }
]

const styles = {
  description: {
    backgroundColor: 'grey'
  },
  reviews: {
    backgroundColor: 'white'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  }
}

const SingleMagnet = props => {
  const getRelatedMagnets = allMagnets => props.allMagnets.filter(magnet => magnet.speaker_id === props.selectedMagnet.speaker_id)

  // when we implement a controlled component for this dumb component, below line show be uncommented
  // const magnet = props.selectedMagnet
  const placeInCart = (evt) => {
    store.dispatch(addToOrder(props.cart.id, props.selectedMagnet.id))
  }

  return (
    <div className={'row'}>
      <div className={'col-md-6'}>
        <Card>
          <AppBar title={props.selectedMagnet.title} style={{backgroundColor: 'black'}} showMenuIconButton={false}/>
          <CardMedia >
            <img src={props.selectedMagnet.image} className={'img-responsive'}/>
          </CardMedia>
          <CardText >
            <List>
              <ListItem primaryText={`Price: $${props.selectedMagnet.price}`}><FlatButton onClick={placeInCart} label='buy me' primary={true}></FlatButton></ListItem>
              <ListItem primaryText={props.selectedMagnet.title} />
              <ListItem primaryText={`Size: ${props.selectedMagnet.size}`} />
              <ListItem primaryText={`Item #: ${props.selectedMagnet.itemNumber}`} />
              <ListItem primaryText={`Mood: ${props.selectedMagnet.mood}`} />
            </List>
          </CardText>
        </Card>
      </div>
      <div className='col-md-6'>
        <AppBar title={'Reviews'} style={{backgroundColor: 'black'}} showMenuIconButton={false}/>
        {props.reviews && props.reviews.map(review => {
          return <Review name={review.user.name} rating={review.rating} text={review.comment} />
        })}
        <hr />
        <Card>
          <AppBar title={'More From This Author'} style={{backgroundColor: 'black'}} showMenuIconButton={false}/>
            <GridList style={styles.gridList} cols={2.2}>
              {getRelatedMagnets(props.allMagnets).map((magnet) => (
                <MagnetThumbnail id={magnet.id} image={magnet.image} />
              ))}
            </GridList>
        </Card>

      </div>
    </div>
  )
}

function mapStateToProps(storeState) {
  return {
    selectedMagnet: storeState.magnet.selectedMagnet,
    allMagnets: storeState.magnet.allMagnets,
    reviews: storeState.review.reviews,
    cart: storeState.cart
  }
}

const SingleMagnetContainer = connect(mapStateToProps)(SingleMagnet)

export default SingleMagnetContainer
