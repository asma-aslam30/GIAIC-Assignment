function make_album(artistName, albumTitle, tracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("asma", "acsgfa", 2));
console.log(make_album("saba", "2fsvb", 10));
console.log(make_album("ali", "acsgfa"));
