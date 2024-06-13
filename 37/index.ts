function make_shirt(size: string= "Large", printMessage: string="I Love Typescript") {
  console.log(
    `your shirt size is ${size} and ${printMessage} print message on it.`
  );
}
make_shirt()
make_shirt("Medium")
make_shirt("small","I love Programming!!")