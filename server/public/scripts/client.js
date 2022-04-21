console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn'),
      age: $('#ageIn'),
      gender: $('#genderIn'),
      readyForTransfer: $('#readyForTransferIn'),
      notes: $('#notesIn'),
    };
    // call saveKoala with the new object
    saveKoala( koalaToSend );
  }); 
}



function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $('#viewKoalas').empty();
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then(function(response) {
    console.log("GET /songs response", response);
    for (let koala of response) {
      $('#viewKoalas').append(`
        <tr data-id=${koala.id} data-rank=${koala.ready-to-transfer}>
               <td>${koala.name}</td>
               <td>${koala.gender}</td>
               <td>${koala.age}</td>
               <td>${koala.ready-to-transfer}</td>
               <td>${koala.notes}</td>
               <td><button class="transferButton">Ready to Transfer</button></td>
        </tr>
      `);
    }
  }).catch(function(error) {
    console.log(error);
  })

  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  

 
}
