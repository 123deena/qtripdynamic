
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  const UrlParam = new URLSearchParams(search);
  const Cityid = UrlParam.get('city');
  //console.log(UrlParam.get('city'));
  //return UrlParam.get('city');
  console.log(Cityid);
  return Cityid;



}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  //const city1 = getCityFromURL();
  //const backendEndpoint = 'http://3.111.228.177:8082';
  //const url = `${config.backendEndpoint}/adventures?city=${city}`;

  try{
  const response = await fetch(config.backendEndpoint+`/adventures/?city=${city}`);
  const data = await response.json();
  return data
  }
  catch(error)
  {
    console.log('Error fetching data:', error);
    return null;
  }



}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM

  const DataContainer = document.getElementById("data");
  console.log(adventures);

  for(let i=0;i<adventures.length;i++)
  {
    const ParentDiv = document.createElement("div");
    ParentDiv.setAttribute("class","col-12 col-sm-6 col-lg-3 mb-3");
    console.log(ParentDiv);

    // Anchor to particular city areas
    const Link = document.createElement("a");
    Link.setAttribute("id",adventures[i].id);
    console.log(Link);

    Link.setAttribute("href","detail/?adventure="+adventures[i].id);

    // card outfit
    const div1 = document.createElement("div");
    div1.setAttribute("class","card activity-card");
    console.log(div1);

    // image tag
    const Image_Tag = document.createElement("img");
    Image_Tag.src = adventures[i].image;
    console.log(Image_Tag);

    const div2 = document.createElement("div");
    const cat = document.createElement("div");
    cat.setAttribute("class","category-banner");
    cat.textContent = adventures[i].category;

    div2.setAttribute("class","col-md-12 mt-2");

    // this div for displaying name and cph;
    const div3 = document.createElement("div");
    div3.setAttribute("class","d-flex justify-content-between");
    const p1 = document.createElement("p");
    p1.textContent = adventures[i].name;
    const p2 = document.createElement("p");
    p2.textContent = "₹"+adventures[i].costPerHead;


    // this div for displaying duration and hours
    const div4 = document.createElement("div");
    div4.setAttribute("class","d-flex justify-content-between");
    const p3 = document.createElement("p");
    p3.textContent = "Duration";
    const p4 = document.createElement("p");
    p4.textContent = adventures[i].duration+" Hours";
    div4.append(p3);
    div4.append(p4);

    div3.append(p1);
    div3.append(p2);


    div2.append(div3);
    div2.append(div4);

    div1.append(Image_Tag);
    div1.append(cat);
    div1.append(div2);

    Link.append(div1);
    ParentDiv.append(Link);


  DataContainer.append(ParentDiv);
  }








  
  }
  





  



//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list

}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods


  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object


  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
