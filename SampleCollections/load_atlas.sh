export MONGOURL="mongodb://cluster0-shard-00-00-oexhg.mongodb.net:27017,cluster0-shard-00-01-oexhg.mongodb.net:27017,cluster0-shard-00-02-oexhg.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0"
export MONGOHOST="--host Cluster0-shard-0/cluster0-shard-00-00-oexhg.mongodb.net:27017,cluster0-shard-00-01-oexhg.mongodb.net:27017,cluster0-shard-00-02-oexhg.mongodb.net:27017" 
export OPTIONS='--ssl --username dbenvy --password xxxxxx --authenticationDatabase=admin'
echo mongorestore  $MONGOURL $OPTIONS --drop
mongorestore $MONGOHOST $OPTIONS --drop
