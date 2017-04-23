window.onload = function() {
    var results = document.getElementById("content");
    var sampleForm = document.getElementById("sample-form");
    var query = document.getElementById("query");
    var playingClass = 'playing';
    var audioObject = null;

    function fetchTracks (albumId, callback) {
        $.ajax({
            url: 'https://api.spotify.com/v1/albums/' + albumId,
        }).done(function(response) { callback(response); });
    }


    function searchAlbums (query) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: query,
                type: 'album'
            }
        }).done(function (response) {
            results.innerHTML = '';
            var albumsArr = response.albums.items;
            albumsArr.forEach(function(obj) {
                results.innerHTML +=
                `
                    <div style="background-image:url(${obj.images[0].url})" data-album-id="${obj.id}" class="cover"></div>
                `
            })
        })
    }

    results.addEventListener('click', function (e){
        var target = e.target;
        if (target !== null && target.classList.contains('cover')) {
            if (target.classList.contains(playingClass)) {
                audioObject.pause();
            }
            else {
                if (audioObject) {
                    audioObject.pause();
                }
                fetchTracks(target.getAttribute('data-album-id'), function(d){
                    audioObject = new Audio(d.tracks.items[0].preview_url);
                    audioObject.play();
                    target.classList.add(playingClass);
                    audioObject.addEventListener('ended', function() {
                        target.classList.remove(playingClass);
                    });
                    audioObject.addEventListener('pause', function() {
                        target.classList.remove(playingClass);
                    });
                });
            }
        }
    });

    sampleForm.addEventListener('submit',
        function (e) {
            e.preventDefault()
            searchAlbums(query.value);
        }, false)



}


