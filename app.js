 
const item = document.getElementById('item')
  
item.addEventListener("click", getBookById);

  function getBookById(id) {
    const bookId = parseInt(id);
    fetch(`https://fakerestapi.azurewebsites.net/api/Books/${bookId}`)
      .then(function(response) {
      })      
      return response.json();
      .catch(function(error) {
        console.log(error);
    });
  }