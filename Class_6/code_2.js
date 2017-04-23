function reqListener () {
    var response = JSON.parse(this.responseText);
    for (var i = 0; i < 4; i++) {
        var item = response.items[i];
        var s =
        `
        <div class="col-md-3 col-sm-6 col-xs-12">
          <h3>
            ${item.volumeInfo.title}
            <br>
            <small>${item.volumeInfo.authors.join(', ')}</small>
          </h3>
          <img class="img-responsive"
                src="${item.volumeInfo.imageLinks.thumbnail}">
          <p>${item.volumeInfo.description}</p>
        </div>
        `;
        document.getElementById("content").innerHTML += s;
    }
}

var request = new XMLHttpRequest();
request.addEventListener("load", reqListener);
request.open("GET", "https://www.googleapis.com/books/v1/volumes?q=malcolm+gladwell");
request.send();