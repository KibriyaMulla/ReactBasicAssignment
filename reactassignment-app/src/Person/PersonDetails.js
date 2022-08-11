import { useEffect, useState } from "react"
import axios from "axios"
import SinglePersonDetails from "./SinglePersonDetails";

const PersonDetails = () => {
    const [person, setperson] = useState([]);

    useEffect(() => {
        axios.get(" https://jsonplaceholder.typicode.com/users")
            .then((resp) => {
                //console.log(resp.data);
                setperson(resp.data);


            })

    }, [])

    return (
        <>
            {
                <div>
                    {person.map((value, key) => {

                        return (
                            <SinglePersonDetails name={value.name}
                                email={value.email}
                                phone={value.phone}
                                company={value.company}
                                website={value.website}
                                address={value.address}
                            />
                        )

                    })}


                </div>
            }
        </>
    )
}
export default PersonDetails