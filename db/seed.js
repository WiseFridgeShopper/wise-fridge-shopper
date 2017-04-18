'use strict'

const db = require('APP/db')
    , {User, Magnet, Speaker, Promise} = db
    , {mapValues} = require('lodash')

function seedEverything() {
  const seeded = {
    users: users(),
    magnets: magnets(),
    speakers: speakers()
  }

  // seeded.favorites = favorites(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  god: {
    email: 'god@example.com',
    name: 'So many names',
    password: '1234',
    isAdmin: false
  },
  barack: {
    name: 'Barack Obama',
    email: 'barack@example.gov',
    password: '1234',
    isAdmin: true
  },
})

const speakers = seed(Speaker, {
  marcus: {
    name: 'Marcus Aurelius',
    bio: `If ever there was an exemplification of Plato's 'Philosopher King', it would be Marcus Aurelius. Born in 121, he became a Roman Emperor in 161, and his reign lasted until his death in 180. An ardent Stoic, he is best remembered today as the author of the Meditations, a collection of 'spiritual exercises' that were written for himself between 170 and 180. Fortunately for us, this work was preserved for posterity, and it can be read profitably today by anyone looking for a source of spiritual guidance.`,
  },
  virginia: {
    name: 'Virginia Woolf',
    bio: ` Born in 1882 in London, Virginia Woolf was an author and essayist today regarded as one of the twentieth century's literary greats. Her most well known works include the novels Mrs Dalloway, To the Lighthouse, Orlando, and the book-length essay A Room of One's Own.`,
  },
  ralph: {
    name: 'Ralph Waldo Emerson',
    bio: `Born in 1803 in Boston, Massachusetts, Ralph Waldo Emerson was arguably the most influential writer of 19th-century America. Regarded by many as the American version of Michel de Montaigne, Emerson wrote voluminously on a wide range of subjects. Some of his most important essays include Nature, Self-Reliance, and Experience.`,
  },
  henry: {
    name: 'Henry David Thoreau',
    bio: `Henry David Thoreau, born in 1817 in Concord, Massachusetts, was a man who wore man hats. A poet, philosopher, abolitionist, tax resister, and naturalist, Thoreau is one of America's most celebrated and famous authors. In addition to his classic book Walden, which recounts his two-year experience living a simple existence amongst nature, Thoreau is also perhaps known for his essay Civil Disobedience, which has inspired protest movements around the world and influenced everyone from Mohandas Gandhi to Leo Tolstoy and Martin Luther King, Jr.`,
  },
  oscar: {
    name: 'Oscar Wilde',
    bio: `The Irish writer and poet Oscar Wilde was born in 1854 and died in 1900. A celebrated playwright known for his wit and flamboyant dress, his best known play was The Importance of Being Earnest, which poked fun at the customs of Victorian England, while his only novel, The Picture of Dorian Gray, was controversial for its judgments on hedonism and morality.`,
  },
  george: {
    name: 'George Bernard Shaw',
    bio: `George Bernard Shaw was born in Dublin, Ireland, in 1856, and died in England in 1950. An esteemed playwright, essayist and novelist, Shaw's works highlighted the social problems of his day, particularly what he regarded as the exploitation of the working class. As a fervent socialist, Shaw wrote many tracts promoting this ideology, but it was his literary prowess that saw him reach the heights of professional recognition, receiving both a Nobel Prize and an Oscar, the only person in history to have received both awards.`,
  },
})

const magnets = seed(Magnet, {
  mag1: {
    title: 'Marcus Aurelius Fridge Magnet #1',
    quote: 'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.',
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-1_large.jpg?v=1380466387',
    itemNumber: 1,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag2: {
    title: 'Marcus Aurelius Fridge Magnet #2',
    quote: 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.',
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-2_large.jpg?v=1380466539',
    itemNumber: 2,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag3: {
    title: 'Marcus Aurelius Fridge Magnet #3',
    quote: 'You have power over your mind - not oustide events. Realize this, and you will find strength.',
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/marcus-aurelius-quote-fridge-magnet-3_large.jpg?v=1380466642',
    itemNumber: 3,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag4: {
    title: 'Virginia Woolf Fridge Magnet #1',
    quote: 'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.',
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/virginia-woolf-quote-fridge-magnet-1_large.jpg?v=1380467337',
    itemNumber: 4,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag5: {
    title: 'Virginia Woolf Fridge Magnet #2',
    quote: 'If you do not tell the truth about yourself you cannot tell it about other people.',
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/virginia-woolf-quote-fridge-magnet-2_large.jpg?v=1380467420',
    itemNumber: 5,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag6: {
    title: 'Virginia Woolf Fridge Magnet #3',
    quote: 'One cannot think well, love well, sleep well, if one has not dined well.',
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/virginia-woolf-quote-fridge-magnet-3_large.jpg?v=1380467486',
    itemNumber: 6,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag7: {
    title: 'Ralph Waldo Emerson Fridge Magnet #1',
    quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-1_large.jpg?v=1380467104',
    itemNumber: 7,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag8: {
    title: 'Ralph Waldo Emerson Fridge Magnet #2',
    quote: 'For every minute you are angry you lose sixty seconds of happiness.',
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-2_large.jpg?v=1380467192',
    itemNumber: 8,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag9: {
    title: 'Ralph Waldo Emerson Fridge Magnet #3',
    quote: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/ralph-waldo-emerson-fridge-magnet-3_large.jpg?v=1380467256',
    itemNumber: 9,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag10: {
    title: 'Henry David Thoreau Fridge Magnet #1',
    quote: "YWhat you get by achieving your goals is not as important as what you become by achieving your goals.",
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/henry-david-thoreau-quote-fridge-magnet-1_large.jpg?v=1380465723',
    itemNumber: 10,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag11: {
    title: 'Henry David Thoreau Fridge Magnet #2',
    quote: "Our life is frittered away by detail. Simplify, simplify.",
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/henry-david-thoreau-quote-fridge-magnet-2_large.jpg?v=1380465732',
    itemNumber: 11,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag12: {
    title: 'Henry David Thoreau Fridge Magnet #3',
    quote: "We must walk consciously only part way toward our goal and then leap in the dark to our success.",
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/henry-david-thoreau-quote-fridge-magnet-3_large.jpg?v=1380465704',
    itemNumber: 12,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag13: {
    title: 'Oscar Wilde Shaw Fridge Magnet #1',
    quote: "You can never be overdressed or overeducated.",
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/oscar-wilde-quote-fridge-magnet-1_large.jpg?v=1380466791',
    itemNumber: 13,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag14: {
    title: 'Oscar Wilde Shaw Fridge Magnet #2',
    quote: "I don't want to go to heaven. None of my friends are there.",
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/oscar-wilde-quote-fridge-magnet-2_large.jpg?v=1380466908',
    itemNumber: 14,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag15: {
    title: 'Oscar Wilde Shaw Fridge Magnet #3',
    quote: "PWomen are meant to be loved, not to be understood.",
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/oscar-wilde-quote-fridge-magnet-3_large.jpg?v=1380466974',
    itemNumber: 15,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag16: {
    title: 'George Bernard Shaw Fridge Magnet #1',
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/george-bernard-shaw-quote-fridge-magnet-1_fbeae1d0-84dc-4a9b-810d-ea2e38d2efb2_large.jpeg?v=1380465901',
    itemNumber: 16,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag17: {
    title: 'George Bernard Shaw Fridge Magnet #2',
    quote: "People who say it cannot be done should not interrupt those who are doing it.",
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/george-bernard-shaw-quote-fridge-magnet-2_large.jpg?v=1380465983',
    itemNumber: 17,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  },
  mag18: {
    title: 'George Bernard Shaw Fridge Magnet #3',
    quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
    image: 'cdn.shopify.com/s/files/1/0273/4903/products/george-bernard-shaw-quote-fridge-magnet-3_large.jpeg?v=1380465747',
    itemNumber: 18,
    description: 'High-quality button style magnet with full magnetic back.',
    price: 3.95,
    size: [2, 3],
    mood: ['happy']
  }
})


// const things = seed(Thing, {
//   surfing: {name: 'surfing'},
//   smiting: {name: 'smiting'},
//   puppies: {name: 'puppies'},
// })

// const favorites = seed(Favorite,
//   // We're specifying a function here, rather than just a rows object.
//   // Using a function lets us receive the previously-seeded rows (the seed
//   // function does this wiring for us).
//   //
//   // This lets us reference previously-created rows in order to create the join
//   // rows. We can reference them by the names we used above (which is why we used
//   // Objects above, rather than just arrays).
//   ({users, things}) => ({
//     // The easiest way to seed associations seems to be to just create rows
//     // in the join table.
//     'obama loves surfing': {
//       user_id: users.barack.id,    // users.barack is an instance of the User model
//                                    // that we created in the user seed above.
//                                    // The seed function wires the promises so that it'll
//                                    // have been created already.
//       thing_id: things.surfing.id  // Same thing for things.
//     },
//     'god is into smiting': {
//       user_id: users.god.id,
//       thing_id: things.smiting.id
//     },
//     'obama loves puppies': {
//       user_id: users.barack.id,
//       thing_id: things.puppies.id
//     },
//     'god loves puppies': {
//       user_id: users.god.id,
//       thing_id: things.puppies.id
//     },
//   })
// )

if (module === require.main) {
  db.didSync
    .then(() => db.sync({force: true}))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others={}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
            (all, one) => Object.assign({}, all, {[one.key]: one.value}),
            {}
          )
        )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, {users, magnets, speakers})
