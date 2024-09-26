import axios from "axios";

// create xios instacne
let api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
}) 
// end 


// get api data 
export const getCountryData = async () =>{
   return api.get("/all?fields=name,population,region,capital,flags")
    
}
// end 
// HTTP GET METHOD fro the indvi. country name
export const getCountryIndData = (name) => {
    return api.get(
      `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
  };