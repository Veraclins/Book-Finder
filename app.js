function addBook(title, description) {
    // this will be the
    var item = document.createElement('DIV');
    var titleText = document.createTextNode(title);
    var descr =  document.createTextNode(description);
    
    item.appendChild(titleText);
    item.appendChild(descr);
    return item;
} 


fetch('https://fakerestapi.azurewebsites.net/api/Books')
.then((response) => response.json())
.then(function(data) {
    
    for (var i = 0; i <= 10; i++) {
        let title = data[i].Title;
        let descr = data[i].Description;
        let item =  addBook(title, descr);
        document.getElementById('listing').appendChild(item);
    }
})
.catch(function (error) {
    return `there was an error ${error}` 
});

