
function make_album(artistName:string,albumTitle:string,tracks?:number){
    let album:{
        artist:string,
        title:string,
        tracks?:number
    }={
        artist:artistName,
        title:albumTitle,

    };
    if(tracks !== undefined){
        album.tracks=tracks;
    }

    return album;
}

console.log(make_album("asma","acsgfa",2));
console.log(make_album("saba","2fsvb",10));
console.log(make_album("ali","acsgfa"));
