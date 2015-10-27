// API Variables - PUT YOUR API INFO HERE
var myAccountKey = "ACCOUNT_KEY";
var myInstance = "INSTANCE";
var myClass = "CLASS";

// Sample Syncano Code
var account = new Syncano({accountKey: myAccountKey});

account.instance(myInstance).class(myClass).dataobject().list()
  .then(function(res){ // if request is successful
    console.log(res);
  })
  .catch(function(err){ // errors print to console
    console.log(err);
  });
  
// EXAMPLE: Display list - uncomment code in index.html
// account.instance(myInstance).class(myClass).dataobject().list()
//   .then(function(res){
//     listItems = []; // array for Syncano objects
//     for(i=0;i<res.objects.length;i++){ // for each item
//       // push item ID (every object has one) to array in a <li> HTML element
//       listItems.push('<li id="item' + res.objects[i].id + '">' + res.objects[i].id + '</li>');
//     }
//     // insert into <ul> with the id 'list' in index.html
//     document.getElementById('list').innerHTML = listItems.join("");
//     console.log(res);
//   })
//   .catch(function(err){
//     console.log(err);
//   });