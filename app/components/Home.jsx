import React from 'react'
import GridList, {GridTile} from 'material-ui/GridList'
import {Link} from 'react-router'
import TextField from 'material-ui/TextField' // used for search bar
import IconButton from 'material-ui/IconButton' // used for purchase button
import MagnetThumbnail from './MagnetThumbnail'
import SpeakerThumbnail from './SpeakerThumbnail'

const testMagnets = [
  {
    quote: 'Many a test has failed',
    price: 3.95,
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
    title: 'Koans about Testing',
    description: 'Amazing magnet with Koans from testing',
    itemNumber: 12345,
    size: [2, 4],
    mood: ['zany', 'moody'],
    id: 1
  },
  {
    quote: 'Many a great day has happened',
    price: 3.95,
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
    title: 'Koans about Testing',
    description: 'Amazing magnet with Koans from testing',
    itemNumber: 12345,
    size: [2, 4],
    mood: ['zany', 'moody'],
    id: 2
  },
  {
    quote: 'I love life',
    price: 3.95,
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
    title: 'Koans about Testing',
    description: 'Amazing magnet with Koans from testing',
    itemNumber: 12345,
    size: [2, 4],
    mood: ['zany', 'moody'],
    id: 3
  },
  {
    quote: 'Life is hard',
    price: 3.95,
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
    title: 'Koans about Testing',
    description: 'Amazing magnet with Koans from testing',
    itemNumber: 12345,
    size: [2, 4],
    mood: ['zany', 'moody'],
    id: 4
  },
  {
    quote: 'Wow I\'m profound',
    price: 3.95,
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
    title: 'Koans about Testing',
    description: 'Amazing magnet with Koans from testing',
    itemNumber: 12345,
    size: [2, 4],
    mood: ['zany', 'moody'],
    id: 5
  },
  {
    quote: 'Many a test has failed',
    price: 3.95,
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
    title: 'Koans about Testing',
    description: 'Amazing magnet with Koans from testing',
    itemNumber: 12345,
    size: [2, 4],
    mood: ['zany', 'moody'],
    id: 6
  }
]

const testSpeakers = [
  {
    id: 1,
    name: 'Batman',
    bio: 'Im rich',
  },
  {
    id: 2,
    name: 'Superman',
    bio: 'With great power comes great responsibility',
  }
]

export default class Home extends React.Component {
  // THIS COMPONENT IS AWAITING REDUX STATE! We need to toggle this.props.selectedTab from our redux store
  // so that we can render either speakers or magnets from this view.
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // local state search bar handler
  handleChange(evt) {
    this.setState({ query: evt.target.value })
  }

  filterBySpeakerName(item) {
    return item.name.toLowerCase().includes(this.state.query) || item.bio.toLowerCase().includes(this.state.query)
  }

  filterByQuote(item) {
    return item.quote.toLowerCase().includes(this.state.query.toLowerCase())
  }

  filterByTitle(item) {
    return item.title.toLowerCase().includes(this.state.query.toLowerCase())
  }

  renderFilteredMagnets() {
    if (this.state.query) {
      return this.props.allMagnets.filter(item => this.filterByQuote(item) || this.filterByTitle(item))
        .map(item => <MagnetThumbnail key={item.id} id={item.id} image={item.image} />)
    } else {
      return this.props.allMagnets.map(item => <MagnetThumbnail key={item.id} id={item.id} image={item.image} />)
    }
  }

  renderFilteredSpeakers() {
    if (this.state.query) {
      return this.props.allSpeakers.filter(item => this.filterBySpeakerName(item))
        .map(item => <SpeakerThumbnail key={item.id} id={item.id} name={item.name} bio={item.bio} />)
    } else {
      return this.props.allSpeakers.map(item => <SpeakerThumbnail key={item.id} id={item.id} name={item.name} bio={item.bio} />)
    }
  }

  /* Check global state for selected tab ('magnets' or 'speakers').
  *  Change which filter we run to match the tab. || operator can be used inside gridlist to
  *  render proper thumbnails. */
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <TextField name={'searchFilter'} fullWidth={true} hintText={'search speakers or quotes'} onChange={this.handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <GridList cols={3} title='My Grid'>
              { this.props.selectedView === 'speakers' ? this.renderFilteredSpeakers() : this.renderFilteredMagnets() }
            </GridList>
          </div>
        </div>
      </div>)
  }
}
