import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function FetchData() {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []);

    if (!data) return null;

    return {
        data,
        setData,
    };
}
