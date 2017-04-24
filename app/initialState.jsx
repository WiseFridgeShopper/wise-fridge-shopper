const initialState = {
  allSpeakers: [],
  allMagnets: [{
    title: 'Marcus Aurelius Fridge Magnet #1',
    quote: 'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-1_large.jpg?v=1380466387',
    itemNumber: 1,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 1
  },
  {
    title: 'Marcus Aurelius Fridge Magnet #2',
    quote: 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-2_large.jpg?v=1380466539',
    itemNumber: 2,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 1
  },
  {
    title: 'Marcus Aurelius Fridge Magnet #3',
    quote: 'You have power over your mind - not oustide events. Realize this, and you will find strength.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-3_large.jpg?v=1380466642',
    itemNumber: 3,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 1
  },
  {
    title: 'Virginia Woolf Fridge Magnet #1',
    quote: 'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/virginia-woolf-quote-fridge-magnet-1_large.jpg?v=1380467337',
    itemNumber: 4,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 3
  },
  {
    title: 'Virginia Woolf Fridge Magnet #2',
    quote: 'If you do not tell the truth about yourself you cannot tell it about other people.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/virginia-woolf-quote-fridge-magnet-2_large.jpg?v=1380467420',
    itemNumber: 5,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 3
  },
  {
    title: 'Virginia Woolf Fridge Magnet #3',
    quote: 'One cannot think well, love well, sleep well, if one has not dined well.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/virginia-woolf-quote-fridge-magnet-3_large.jpg?v=1380467486',
    itemNumber: 6,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 3
  },
  {
    title: 'Ralph Waldo Emerson Fridge Magnet #1',
    quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
    itemNumber: 7,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 2
  },
  {
    title: 'Ralph Waldo Emerson Fridge Magnet #2',
    quote: 'For every minute you are angry you lose sixty seconds of happiness.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-2_large.jpg?v=1380467192',
    itemNumber: 8,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 2
  },
  {
    title: 'Ralph Waldo Emerson Fridge Magnet #3',
    quote: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-3_large.jpg?v=1380467256',
    itemNumber: 9,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 2
  },
  {
    title: 'Henry David Thoreau Fridge Magnet #1',
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/henry-david-thoreau-quote-fridge-magnet-1_large.jpg?v=1380465723',
    itemNumber: 10,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 4
  },
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
  },
  {
    title: 'Oscar Wilde Shaw Fridge Magnet #1',
    quote: "You can never be overdressed or overeducated.",
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/oscar-wilde-quote-fridge-magnet-1_large.jpg?v=1380466791',
    itemNumber: 13,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 5
  },
  {
    title: 'Oscar Wilde Shaw Fridge Magnet #2',
    quote: "I don't want to go to heaven. None of my friends are there.",
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/oscar-wilde-quote-fridge-magnet-2_large.jpg?v=1380466908',
    itemNumber: 14,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 5
  },
  {
    title: 'Oscar Wilde Shaw Fridge Magnet #3',
    quote: "PWomen are meant to be loved, not to be understood.",
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/oscar-wilde-quote-fridge-magnet-3_large.jpg?v=1380466974',
    itemNumber: 15,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 5
  },
  {
    title: 'George Bernard Shaw Fridge Magnet #1',
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/george-bernard-shaw-quote-fridge-magnet-1_fbeae1d0-84dc-4a9b-810d-ea2e38d2efb2_large.jpeg?v=1380465901',
    itemNumber: 16,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 6
  },
  {
    title: 'George Bernard Shaw Fridge Magnet #2',
    quote: "People who say it cannot be done should not interrupt those who are doing it.",
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/george-bernard-shaw-quote-fridge-magnet-2_large.jpg?v=1380465983',
    itemNumber: 17,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 6
  },
  {
    title: 'George Bernard Shaw Fridge Magnet #3',
    quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
    image: 'http://cdn.shopify.com/s/files/1/0273/4903/products/george-bernard-shaw-quote-fridge-magnet-3_large.jpeg?v=1380465747',
    itemNumber: 18,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy'],
    speaker_id: 6
  }],
  selectedSpeaker: {},
  selectedMagnet: {},
  selectedView: 'speaker',
  cart: {},
  user: {},
  reviews: {}
}

export default initialState
