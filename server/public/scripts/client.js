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
  $(document).on('click', '.transferButton', markKoalaReady)
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
      console.log('koalas?', koala);
      $('#viewKoalas').append(`
        <tr data-id=${koala.id} data-rank=${koala.readyToTransfer}>
               <td>${koala.name}</td>
               <td>${koala.gender}</td>
               <td>${koala.age}</td>
               <td>${koala.readyToTransfer}</td>
               <td>${koala.notes}</td>
               <td><button class="transferButton">Ready to Transfer</button></td>
        </tr>
      `);
    }
  }).catch(function(error) {
    console.log('your GET is effed', error);
  })

  
} // end getKoalas

// function saveKoala( newKoala ){
//   console.log( 'in saveKoala', newKoala );
//   // ajax call to server to get koalas
// }

function markKoalaReady(){
  console.log('ready to transfer button');
  let koalaIdToUpdate = $(this).closest('tr').data('id');
    console.log('k2u, dood', koalaIdToUpdate);
  $.ajax({
    method: 'PUT',
    url: `/koalas/${koalaIdToUpdate}`
  }).then(function(response) {
    getKoalas();
  }).catch(function(error) {
    console.log(error);
  })
}