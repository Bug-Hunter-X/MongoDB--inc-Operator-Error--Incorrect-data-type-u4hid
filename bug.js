```javascript
//Incorrect use of $inc operator in MongoDB
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { count: 'abc' } });
```