import axios from 'axios'
import { createContext, useState, useEffect} from "react"

const client = axios.create({
    baseURL : "http://localhost:3000/api"
})

const config = {
    url : '/country',
    'Content-Type' : 'application/json'
}

export const CountryContext = createContext();

export const CountryContextProvider = (props) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const getCountries = async () => {
            try {
                const {data} = await client(config)
                setCountries(data.map((element) => {
                    return element.Name
                }))
            } catch (exception) {
                console.error(exception)
            }
        }
        getCountries();
    }, []);

    return <CountryContext.Provider value={countries}>
        {props.children}
    </CountryContext.Provider>
}


