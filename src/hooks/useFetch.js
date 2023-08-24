import { useEffect, useState } from "react";

// 4- Custom Hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //5 - Refatorando POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState (null)

    //6 - loading
    const [loading, setLoading] = useState(false)

    //7 - Tratando errros
    const [error, setError] = useState(null)

    //8 - desafio DELET
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) =>{
        if (method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });

            setMethod(method);
        
        }else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
            });

            setMethod(method);
            setItemId(data);
        }
    }
  

    useEffect(() => {
        const fetchData = async () => {

            //6 - loading 
            setLoading(true)
            
            try {
                
                const res = await fetch(url);

                const json = await res.json();

                setData(json);

            } catch (error) {

                console.log(error.message)

                setError(" Houve um erro ao carregar os dados!! ")
            }

            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    // 5- Refatorando "POST"
    useEffect (() => {
        const httpRequest = async () => {

            let json


            if(method === "POST"){
                
                let fetchOption = [url, config]

                const res = await fetch(...fetchOption)

                const json = await res.json();

                setCallFetch(json);
            }else if(method === "DELETE"){
               const deleteUrl = `${url}/${itemId}` 

               const res = await fetch(deleteUrl, config)

                json = await res.json()
            }

            setCallFetch(json);
            
        }

        httpRequest();
    }, [config, method, url])

    return {data, httpConfig, loading, error}
};