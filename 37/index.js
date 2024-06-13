function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("your shirt size is ".concat(size, " and ").concat(printMessage, " print message on it."));
}
make_shirt();
make_shirt("Medium");
