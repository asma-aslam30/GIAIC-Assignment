

function show_magician(magicians:string[]){
    magicians.forEach(name =>console.log(name));
    
}

function make_great(magicians:string[]){
    return magicians.map(name => `The great ${name}`)
}
let magician_names=["asma","harry","ali","usama"]


let great_magician = make_great(magician_names)
console.log(great_magician);

show_magician(great_magician)
