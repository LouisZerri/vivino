import axios from "axios";

export function getAllWines() {
    return axios
        .get("http://localhost:8000/wines")
        .then((response) => response.data);
}
