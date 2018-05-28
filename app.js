function addImage(id, url) {
  var item = document.createElement('DIV');
  var pic = document.createElement('IMG');
 
  return pic.src = pic.url;
}

fetch('https://fakerestapi.azurewebsites.net/api/books/covers/1')
.then((response) => response.json())
.then(function(data) {
  

      let src = data.url;
     
      let pic =  addImage(id, src);
     
  
})
.catch(function (error) {
  return `there was an error ${error}`
});