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

* DBEnvy
