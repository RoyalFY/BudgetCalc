let list = new Map()

let utils = {}; //create a namespace for our utility functions

//get function to make an HTTP GET request
utils.get = (url) => {

    //start promise object
    return new Promise(function (resolve, reject) {

        //create a new XMLHttpRequest object
        let request = new XMLHttpRequest();

        //initialize the request
        request.open('GET', url);

        request.onload = function () {
            //resolve on success
            if (request.status == 200) { // HTTP: OK
                console.log('Response OK');
                resolve(request.response);
            }
            //reject on error
            else {
                reject(Error(`promise error with ${request.status}`))
            }
        };
        //handle network errors
        request.onerror = function (error) {
            reject(Error(`Network Error with ${url}: ${error}`))
        };
        //send the request
        request.send();
    }); //end Promise Object
}

//getJSON function to get JSON data from the server
utils.getJSON = async function (url) {
    let string = null;
    //get the JSON string from the server
    try {
        string = await utils.get(url);
    }
    catch (error) {
        console.log(error)
    }
    //parse the JSON string and return the data
    let data = JSON.parse(string);
    return data;
}

async function init() {
    //create a variable to hold the URL of the JSON data source
    let url = 'https://eecu-data-server.vercel.app/data/2024';

    //create a variable to hold the JSON data
    let occupations = null; 
    
    //try to retrieve the JSON data from the server
    try {
        //retrieve the JSON data from the server
        occupations = await utils.getJSON(url);
    }
    //catch any errors and display them in the root element
    catch(error){
    console.log(`error: ${error}`);
    }

    //show JSON data on the html page
    buildList(occupations);
}

function buildList(jobs) {

let marioMaker2 = document.getElementById(`jobs`)

for (let i of jobs) {
    list.set(i.occupation, i.salary)
}

list.forEach((fort,nite) => {marioMaker2.innerHTML += `<option value="${fort}">${nite}</option>`})

}

document.addEventListener(`DOMContentLoaded`,() => {
    init()

    let elementById = function(id) {return document.getElementById(id)}

    let addListener = function(id,event,code) {elementById(id).addEventListener(event,(eventData) => {code(eventData)})}

    // addListener(`AAAAAAAAAA`,`click`, (eventData) => {
    //     let = taxes
    //     `tax`/`salaryinput` == taxes
    //     let = med
    //     `med`/`salaryinput` == med
    //     let = food
    //     `food`/`salaryinput` == food
    //     let = house
    //     `house`/`salaryinput` == house
    //     let = savings
    //     `savings`/`salaryinput` == saving
    //     let = travel
    //     `travel`/`salaryinput` == travel
    //     localStorage.setItem('taxes', taxes)
    //     localStorage.setItem(`meds`, med)
    //     localStorage.setItem(`foods`, food)
    //     localStorage.setItem(`houses`, house)
    //     localStorage.setItem(`saves`, saving)
    //     localStorage.setItem(`travels`, travel)
    
    // })

})
