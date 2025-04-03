//OPPGAVE 1:
// Steg 1: Lag en async funskjon som heter fetchData
// Steg 2: Lag en variabel som bruker await for å ta i mot en array med objects
// Steg 3: Retuner den variabelen

// OPPGAVE 2:
// Steg 1: Lag en async funskjon som heter dataRecieved
// Steg 2: Lag en variabel som bruker await for å ta i mot funksjonen getData
// Steg 3: Logg ut denne dataen
// Steg 4: Legg til denne dataen på siden

async function getData() {
  const ingredients = ["milk", "sugar", "egg", "flour"];
  return ingredients;
};

async function fetchData () {
  const dataRecieved = await getData()
  const displayList = document.createElement("h1");
  displayList.textContent = dataRecieved.join(", ")
  document.body.appendChild(displayList);
  console.log("Sucess!");
  console.log(dataRecieved);
};

setTimeout(fetchData, 3000);



//
//

// HER KODER VI SANNTID SAMMEN FOR CAT FACTS:

// API-link: https://catfact.ninja/facts

async function fetchApi() {
  // Fetcher data fra catFact
  const data = await fetch("https://catfact.ninja/facts");
  console.log(data);
  // Parser fra JSON til array
  const response = await data.json();
  // Random console logs for oppfriskning
  console.log(response);
  console.log(response.data);
  console.log(response.data[0]);
  console.log(response.data[0].fact);

  // Lagre array av objects i en variabel
  const responseData = response.data

  // Henter data for displayCatFact
  const displayCatFact = document.querySelector("#displayCatFact");

  // Lager ul element
  const viewUl = document.createElement("ul")
  displayCatFact.appendChild(viewUl);

  responseData.forEach((item) => {
    const factItem = item.fact;
    // Lager li element
    const viewCatFact = document.createElement("li")
    // Legger factItem tekst innhold
    viewCatFact.textContent = factItem
    // Legger til på displayCatFact
    viewUl.appendChild(viewCatFact);


  });
};

fetchApi()


// Parser til JSON
// Hele arrayet
// Vi finner data array, array med objects
// Vi velger et spesifikt array
// Vi finner fact

//Lagre array av objects i en variabel

//forEach for å få ut hver fact på siden


//VI LAGER EN CHUCK NORRIS KNAPP

//API-link: https://api.chucknorris.io/jokes/random

async function fetchNewApi() {
  // Henter data
  const chucknorris = await fetch("https://api.chucknorris.io/jokes/random");
  // Parser fra JSON
  const response = await chucknorris.json();
  console.log(response);

  
  // Henter data 
  const ChuckBtn = document.querySelector("#ChuckBtn");
  const ChuckText = document.querySelector("#ChuckText");
  // Lager variabel for fakta
  const facts = response.value; 
  // Sjekker at vi får fakta på console
  console.log(facts)

  // Lager funksjon som printer ut random fakta
  ChuckBtn.addEventListener("click", function() {
    ChuckText.textContent = facts;
  });
  
};

//Må gjøre om at hver gang man trykker knappen fetcher vi på nytt.
//Hovedfunksjon må være addeventlistener

fetchNewApi();
