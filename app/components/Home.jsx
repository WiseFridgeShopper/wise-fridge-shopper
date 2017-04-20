import React from 'react'
import GridList, {GridTile} from 'material-ui/GridList'
import {Link} from 'react-router'
import TextField from 'material-ui/TextField' // used for search bar
import IconButton, {StarBorder} from 'material-ui/IconButton' // used for purchase button

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

export default class Home extends React.Component {
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

  // Set up speaker name filtering here
  // filterBySpeaker(items) {
  //   return items.filter(item => item.authorName)
  // }

  filterByQuote(item) {
    return item.quote.includes(this.state.query)
  }

  filterByTitle(item) {
    return item.title.includes(this.state.query)
  }

  // Renders filtered results from grid view
  renderFilteredResults() {
    if (this.state.query) {
      return testMagnets.filter(item => this.filterByQuote(item) || this.filterByTitle(item))
        .map(item => <Link key={item.id} to={`/magnets/${item.id}`}><GridTile
                    key={item.id}
                    // title={item.title}
                    // subtitle={<span><b>'Marcus Aurelius'</b></span>}
                    // actionIcon={<IconButton children={<i className="material-icons md-light">add shopping cart</i>}></IconButton>}
                    >
                      <img src={`http://${item.image}`}/>

                    </GridTile></Link>)
    } else {
      return testMagnets.map(item => <Link key={item.id} to={`/magnets/${item.id}`}><GridTile
                  key={item.id}
                  // title={item.title}
                  // subtitle={<span><b>'Marcus Aurelius'</b></span>}
                  >
                    <img src={`http://${item.image}`}/>
                  </GridTile></Link>
                  )
    }
  }

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
              {this.renderFilteredResults()}
            </GridList>
          </div>
        </div>
      </div>)
  }
}
