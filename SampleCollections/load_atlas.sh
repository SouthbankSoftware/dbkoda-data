export MONGOURL="mongodb://cluster0-shard-00-00-oexhg.mongodb.net:27017,cluster0-shard-00-01-oexhg.mongodb.net:27017,cluster0-shard-00-02-oexhg.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0"
export MONGOHOST="--host Cluster0-shard-0/cluster0-shard-00-00-oexhg.mongodb.net:27017,cluster0-shard-00-01-oexhg.mongodb.net:27017,cluster0-shard-00-02-oexhg.mongodb.net:27017" 
export OPTIONS='--ssl --username admin -password xxxxxxx '
echo mongorestore  $MONGOURL $OPTIONS --drop
mongorestore $MONGOHOST $OPTIONS --drop
#mongorestore $MONGOURL  $OPTIONS --drop
#mongo $MONGOHOST $OPTIONS --drop
