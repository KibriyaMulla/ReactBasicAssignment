import { useEffect, useState } from "react"
import axios from "axios"
// import "./PersonDetails.css";
import SinglePersonDetails from "./SinglePersonDetails"

const PersonDetails = () => {
    const [person, setperson] = useState([]);
  
    useEffect(() => {
        axios.get(" https://jsonplaceholder.typicode.com/users")
            .then((resp) => {
                // console.log(resp.data);
                setperson(resp.data);
            })

    }, [])

    return (
        <>

            {
                <div className="Person">
                    {person.map((value, key) => {
                        
                        let url = "https://avatars.dicebear.com/v2/avataaars/{{" + value.name + "}}.svg?options[mood][]="
                    
                        return (
                            <SinglePersonDetails name={value.name}
                                email={value.email}
                                phone={value.phone}
                                company={value.company.name}
                                website={value.website}
                                address={value.address}
                                url={url}
                            />
                        )

                    })}


                </div>
            }
        </>
    )
}
export default PersonDetails