/*eslint-env browser*/

//STEP 1
/*
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi"];
window.console.log(movies[1]);
*/
//STEP 2 
/*
var movies = new Array(5);
movies[0] = "Masculin Feminin";
movies[1] = "The Motorcycle Diaries";
movies[2] = "Thelma and Louise";
movies[3] = "Blue is the Warmest Color";
movies[4] = "Jafar Panahi Taxi";
window.console.log(movies[0]);
*/
//STEP 3
/*
var movies = new Array(5);
movies[0] = "Masculin Feminin";
movies[1] = "The Motorcycle Diaries";
movies[2] = "Thelma and Louise";
movies[3] = "Blue is the Warmest Color";
movies[4] = "Jafar Panahi Taxi";
movies.push("Rocky Horror Picture Show");
window.console.log(movies.length);
*/
//STEP 4
/*
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi"];
delete movies[0];
window.console.log(movies);
*/
//STEP 5
/*
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi", "Rocky Horror Picture Show", "Call Me By Your Name"];
var i;
for (i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
*/
//STEP 6
/*
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi", "Rocky Horror Picture Show", "Call Me By Your Name"];
var i;
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
        window.console.log(movies[i]);
    }
}
*/
//STEP 7
/*
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi", "Rocky Horror Picture Show", "Call Me By Your Name"];
var i;
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
        window.console.log(movies.sort()[i]);
    }
}
*/
//STEP 8
/*
window.console.log("Movies I like:");
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi", "Rocky Horror Picture Show", "Call Me By Your Name"];
var i;
for (i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
window.console.log("Movies I regret watching:");
var leastFavMovies = ["The Dreamers", "Heathers", "Reservoir Dogs"];
for (i = 0; i < leastFavMovies.length; i++) {
    window.console.log(leastFavMovies[i]);
}
*/
//STEP 9
/*
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi", "Rocky Horror Picture Show", "Call Me By Your Name"];
movies = movies.concat("The Dreamers", "Heathers", "Reservoir Dogs");
window.console.log(movies.reverse());
*/
//STEP 10
/*
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi", "Rocky Horror Picture Show", "Call Me By Your Name"];
movies = movies.concat("The Dreamers", "Heathers", "Reservoir Dogs");
window.console.log(movies[9]);
*/
//STEP 11
/*
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi", "Rocky Horror Picture Show", "Call Me By Your Name"];
movies = movies.concat("The Dreamers", "Heathers", "Reservoir Dogs");
window.console.log(movies[0]);
*/
//STEP 12
/*
var movies = ["Masculin Feminin", "The Motorcycle Diaries", "Thelma and Louise", "Blue is the Warmest Color", "Jafar Panahi Taxi", "Rocky Horror Picture Show", "Call Me By Your Name"];
movies = movies.concat("The Dreamers", "Heathers", "Reservoir Dogs");
window.console.log(movies[7] + "\n", movies[8] + "\n", movies[9]);
window.console.log(movies[0] + "\n", movies[1] + "\n", movies[2] + "\n", movies[3] + "\n", movies[4] + "\n", movies[5] + "\n", movies[6]);
*/
//STEP 13
/*
var employee1 = ["111", "Paco", "Creative Director", "Marketing", "active"];
var employee2 = ["222", "Steven", "Marketing Manager", "Marketing", "terminated"];
var employees = employee1.concat(employee2);
window.console.log(employees[6]);
*/
//STEP 14
/*
var employee1 = ["111", "Paco", "Creative Director", "Marketing", "active"];
var employee2 = ["222", "Steven", "Marketing Manager", "Marketing", "terminated"];
var employees = employee1.concat(employee2);
var i;
for (i = 0; i < employees.length; i++) {
    window.console.log(employees[1] + "\n", employees[6]);
}
*/
//STEP 15
/*
var employee1 = ["111", "Paco", "Creative Director", "Marketing", "active"];
var employee2 = ["222", "Steven", "Marketing Manager", "Marketing", "terminated"];
var employee3 = ["333", "Christie", "Chieft Marketing Officer", "Marketing", "terminated"];
var employees = employee1.concat(employee2);
var i;
for (i = 0; i < employees.length; i++) {
    window.console.log(employees[6]);
}
*/
//STEP 16
/*
var movies = [["Blue is the Warmest Color", 1], ["Me Estas Matando Susana", 2], ["Jafar Panahi's Taxi", 3]];
var i;
for (i = 0; i < movies.length; i++) {
    window.console.log(movies[0][0]);
}
*/
//STEP 17
/*
var employees = ["Patricia Vargas", "Luis Miguel", "Alexa Baralucci", "Bobby Brown", "Mika Watanabe"]; 

function showEmployees(employees) {
    "use strict";
    window.console.log("Employees:");
    employees.forEach(function (employees) {
        window.console.log(employees);
    });
}
showEmployees(employees);
*/
//STEP 18

//STEP 19

//STEP 20