# Sample collections for MongoDB

To load,  run mongorestore from the SampleCollections directory

```
cd SampleCollections

mongrestore [login details]
```

This will load into the SampleCollections database 

You will usually want to use the drop command to delete collections before loading

`mongorestore --drop --username user --password xxxx`

Some of the collections in this "collection" are:

* DBEnvyLoad:  DBEnvyLoad\_customers,DBEnvyLoad\_orders and DBEnvyLoad\_products.  These are colelctions we use to run a load simulation on our EC2 instance.  A small subset only
* Sakila: A port of the MySQL sample "Sakila" database to MongoDB.  See [here](http://guyharrison.squarespace.com/blog/2015/3/23/sakila-sample-schema-in-mongodb.html) for details
* crunchbase_database: The crunchbase startup database. Used in the MongoDB univeristy courses. 
* enron_messages: A bunch of messages from Enron.  Used in the MongoDB univeristy courses. 
* samples_friends: Episodes from the TV show "Friends"
* samples_pokemon:  Pokemon databse
* video\_movies, video\_movieDetails, video\_reviews.  Movies and reviews database
