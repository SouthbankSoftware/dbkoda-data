use SampleCollections

function insertProducts(rows) {
  db.DBEnvyLoad_products.drop();
  bulk=db.DBEnvyLoad_products.initializeUnorderedBulkOp();
  for (i=1;i<=rows;i++) {
    var productDescription=" ";
    for (pc=1;pc<=12;pc++) {
      var productDescription=productDescription+Math.random().toString(36).replace(/[^a-z]+/g, '');
    }
    var unitPrice=Math.round(Math.random()*1000,2);
    var prodDoc={_id:i,ProductName:"Product "+i,productDescription:productDescription,
                unitPrice:unitPrice};
    bulk.insert(prodDoc);
    if (i%1000==0) {
      bulk.execute();
      bulk=db.DBEnvyLoad_products.initializeUnorderedBulkOp();
    }

  }
  bulk.execute();
}

function insertCustomers(rows) {
  db.DBEnvyLoad_customers.drop();
  bulk=db.DBEnvyLoad_customers.initializeUnorderedBulkOp();
  for (i=1;i<=rows;i++) {
    var customerDescription=" ";
    for (pc=1;pc<=12;pc++) {
      var customerDescription=customerDescription+Math.random().toString(36).replace(/[^a-z]+/g, '');
    }

    var custDoc={_id:i,CustomerName:"Customer "+i,customerDescription:customerDescription,
                Address:customerDescription};
    bulk.insert(custDoc);
    if (i%1000==0) {
      bulk.execute();
      bulk=db.DBEnvyLoad_customers.initializeUnorderedBulkOp();
    }

  }
  bulk.execute();
}

function initSequence() {
  db.counters.insert(
   {_id: "order",seq: 0});
}

function getNextSequence(name) {
   var ret = db.counters.findAndModify(
          {
            query: { _id: name },
            update: { $inc: { seq: 1 } },
            new: true
          }
   );

   return ret.seq;
}

function createOrder() {
  var maxCust=db.customers.count();
  var custId=Math.round(Math.random()*maxCust+1);
  var maxProd=db.products.count();
  var lineItemCount=Math.round(Math.random()*4+1);
  var lineItems=[];
  for (i=1;i<=lineItemCount;i++) {
    var prodId=Math.round(Math.random()*maxProd+1);
    var prodCount=Math.round(Math.random()*10+1);
    var prodDetails=db.products.find({_id:prodId},{unitPrice:1});
    var cost=prodDetails.unitPrice ;
    //print(cost);
    lineItems.push({prodId:prodId,prodCount:prodCount,Cost:prodDetails.unitPrice*prodCount});
  }
  var invoiceId=getNextSequence('order');
  var date=new Date();
  var doc={_id:invoiceId,invoiceDate:date,lineItems:lineItems};
  db.orders.insert(doc);

}

initSequence();

//createOrder();

insertProducts(1001);
insertCustomers(100000);
function doOrders(batches,batchSize,sleepTime) {
  for (i=1;i<=batches;i++) {
    for (j=1;j<=batchSize;j++) {
      createOrder();
      sleep(sleepTime);
    }
  }
}
doOrders(1000,1000,0);
