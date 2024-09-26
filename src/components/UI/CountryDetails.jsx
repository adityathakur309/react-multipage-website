import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom"
import { getCountryIndData } from "../../api/PostApi";
import { CountryDetailsCard } from "./CountryDetailsCard";

export const CountryDetails = () => {
    let { id } = useParams();
    const [countryData, setCountryData] = useState();
    const [ispending, startTranstion] = useTransition();
    const[error,setError] = useState("")


    useEffect(() => {
        startTranstion(async () => {
            try {
                let res = await getCountryIndData(id);

                if (res.status === 200) {

                    setCountryData(res.data[0]);


                }
            } catch (error) {
                
                setError(error.message)


            }
        })

    }, [id])
        if(ispending){
            return <div className="flex container justify-between py-5">
                <div className="loader mx-auto"></div>
            </div>
        }
        if(error){
            return <h2 className="text-2xl container text-center text-textColor mx-auto mb-10">{error}</h2>
        }
    if (countryData){
            return (
                <div className="container card-details">
                     <CountryDetailsCard country={countryData}/>

                </div>
            );
    }
  


}