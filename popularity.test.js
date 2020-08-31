const PopularityFactory = require('./popularity.js');
const logPagesVisited = [
  { 'user': '1', 'page': 'C'},
  { 'user': '2', 'page': 'B'},
  { 'user': '2', 'page': 'A'},
  { 'user': '1', 'page': 'B'},
  { 'user': '3', 'page': 'E'},
  { 'user': '1', 'page': 'D'},
  { 'user': '2', 'page': 'C'},
  { 'user': '3', 'page': 'D'},
  { 'user': '2', 'page': 'E'},
  { 'user': '1', 'page': 'A'}, 
  { 'user': '3', 'page': 'C'}, 
  { 'user': '1', 'page': 'C'},
  { 'user': '3', 'page': 'B'},
  { 'user': '3', 'page': 'D'},
];

describe('Creating the main object', () => {
  it('should be truthy after creation', () => {
    const popularity = PopularityFactory.popularity(logPagesVisited)

    expect(!!popularity).toBeTruthy()
  })
})

describe('All pages visited by each user', () => {
  it('should have a `pagesVisitedByUsers` function', () => {
    const popularity = PopularityFactory.popularity(logPagesVisited)

    expect(typeof popularity.pagesVisitedByUsers).toEqual('function')
  })

  it('the `pagesVisitedByUsers` function should return a object', () => {
    const popularity = PopularityFactory.popularity(logPagesVisited)
    const listPagesUser =  popularity.pagesVisitedByUsers()

    expect(typeof listPagesUser).toEqual('object')
  });

  it('The object returned by `pagesVisitedByUsers` should contain the list of pages visited by all users and each user with least one register', () => {
    const popularity = PopularityFactory.popularity(logPagesVisited)
    const listPagesUser =  popularity.pagesVisitedByUsers();

    expect(!!Object.keys(listPagesUser).length).toBeTruthy()
  });
});

describe('Possible combinations of sequences', () => {
  it('should have a `allSequencesVisited` function', () => {
    const popularity = PopularityFactory.popularity(logPagesVisited)
    const listPagesUser =  popularity.pagesVisitedByUsers()

    expect(typeof popularity.allSequencesVisited).toEqual('function')
  })

  it('The `allSequencesVisited` function should retunt the list with all combination of sequences', () => {
    const popularity = PopularityFactory.popularity(logPagesVisited)
    const listPagesUser =  popularity.pagesVisitedByUsers()
    const allSequences = popularity.allSequencesVisited(listPagesUser);

    expect(!!Object.keys(allSequences).length).toBeTruthy()
  })
});

describe('The sequence most visited', () => {
  it('should have a `getSequenceMostVisited` function', () => {
    const popularity = PopularityFactory.popularity(logPagesVisited)

    expect(typeof popularity.getSequenceMostVisited).toEqual('function')
  })

  it('`getSequenceMostVisited` function should return the most visited sequence', () => {
    const popularity = PopularityFactory.popularity(logPagesVisited);
    const listPagesUser =  popularity.pagesVisitedByUsers();
    const allSequences = popularity.allSequencesVisited(listPagesUser);
    const mostVisited = popularity.getSequenceMostVisited(allSequences);

    console.log('THE WINNER IS: ', mostVisited);

    expect(typeof mostVisited).toEqual('string');
    expect(!!mostVisited.length).toBeTruthy();
  })
});