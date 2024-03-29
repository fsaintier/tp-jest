const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);


repository.save({
    'id' : 1,
    "name" :"test",
    'price' :6.1,
    "added_at" : '2019-01-01'
});

repository.save({
  'id' : 1,
  "name" :"test",
  'price' :6.1,
  "added_at" : '2017-01-11'
});
repository.save({
  'id' : 1,
  "name" :"test",
  'price' :6.1,
  "added_at" : '2018-01-11'
});

repository.save({
  'id' : 1,
  "name" :"test",
  'price' :6.1,
  "added_at" : '2019-01-11'
});

repository.save({
  'id' : 1,
  "name" :"test",
  'price' :6.1
});
console.log(repository.getTotalCount());

console.log(repository.getTotalPrice());

console.log((repository.getCountBookAddedByMonth()));
