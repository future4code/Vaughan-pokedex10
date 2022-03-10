import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (inicialState, url) => {
    const [data, setData] = useState(inicialState);
    const [reloadList, setReloadList] = useState(false);

    useEffect(() => {
        request();
    }, [reloadList]);

    const request = async () => {
        try {
            const response = await axios.get(url);
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.log(error)
        };
    };

    const listReoadController = () => setReloadList(!reloadList);
    
    return [data, listReoadController];
};

export default useRequestData;