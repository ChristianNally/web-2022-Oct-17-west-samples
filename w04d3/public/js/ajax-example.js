$(document).ready(function(){

  function convertMemesToHTML(memes){
    let output = `<table><tr><th>Name</th><th>Thumbnail</th></tr>`;
    for (let meme of memes){
      output = output + `<tr><td><a href="${meme.url}" target="_blank">${meme.name}</a></td><td><img width="200px" src="${meme.url}"/></td></tr>`;
    }
    output = output + `</table>`;
    return output;
  }

  $('#data-getter').on('submit', function(event){
    // console.log('event', event);
    event.preventDefault();
    // alert('Monkey Fuzz!');

    $.ajax({
      url: 'https://api.imgflip.com/get_memes',
      method: 'GET'
    })
    .then(function(result){
      console.log('result.data.memes[0]', result.data.memes[0]);

      const insertThis = convertMemesToHTML(result.data.memes);
      $('#display').html(insertThis);

    })
    .catch(function(error){
      console.log('error', error);
    });

  });

});

