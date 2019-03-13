/*eslint-env browser*/

var inventory = [
    [101, "Guitar", 54, 459.99],
    [102, "Bass", 66, 349.99],
    [103, "Drums", 22, 682.99],
    [104, "Keyboard", 49, 320.00],
    [105, "Theremin", 7, 82.00]
];

function displayMenu() {
    "use strict";
    window.console.log("Inventory Management");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("View - view all products");
    window.console.log("Update - update stock");
    window.console.log("Exit");
    window.console.log("");
}
displayMenu();


function viewProducts(inventory) {
    "use strict";
    inventory.forEach(function (inventory) {
        window.console.log(inventory);
    });
}
viewProducts(inventory);


function updateStock(inventory) {
    "use strict";
    var sku = window.prompt("Enter your sku number.");
    if (sku === inventory[0][0]) {
        var update = window.prompt("Enter your new stock quantity of guitars.");
        inventory.splice([0][0], update);
    } else if (sku === inventory[1][0]) {
        update = window.prompt("Enter your new stock quantity of bass guitars.");
        inventory.splice([1][0], update);
    } else if (sku === inventory[2][0]) {
        update = window.prompt("Enter your new stock quantity of drums.");
        inventory.splice([2][0], update);
    } else if (sku === inventory[3][0]) {
        update = window.prompt("Enter your new stock quantity of keyboards.");
        inventory.splice([3][0], update);
    } else if (sku === inventory[4][0]) {
        update = window.prompt("Enter your new stock quantity of theremins.");
        inventory.splice([4][0], update);
    } else {
        window.alert("Whoops, that's an invalid sku. Try again.");
    }
}
updateStock(inventory);


function main() {
    "use strict";
    var command;
    displayMenu();
    while (true) {
        command = window.prompt("Enter a command.");
        if (command !== null) {
            if (command === "view") {
                viewProducts(inventory);
            } else if (command === "update") {
                updateStock(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.alert("Program terminated.");
}
main();
