function display(comic){
   const title = comic.volumeInfo.title;
   const authors = comic.volumeInfo.authors;
   const thumbnail = comic.volumeInfo.imageLinks.smallThumbnail;
   const link = comic.volumeInfo.previewLink;
   const manga = `<div class="manga">
     <img src="${thumbnail}" alt="${title}" class="thumbnail">
     <div>
     <a href="${link}" " target="_blank" class="title">${title}</a> 
     <p class="authors">${authors}</p>
     </div>
   </div>`;
   $("#result").append(manga);
}

function searchbook(){
  $("#result").empty();
    const imput = $("#keyword").val();
    const subject = 'comics+graphic+novels';
    const requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${imput}+subject:${encodeURIComponent(subject)}`;
    $.getJSON(requestUrl, function(data){
        console.log(data)
    data.items.forEach(function(comic){
        display(comic);
    });
    });
}


$("#btn").on("click", searchbook);







