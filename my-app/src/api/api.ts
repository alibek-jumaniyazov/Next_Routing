import axios from "axios";
import { API_MODE, domain, urls } from "./urls";
type Props = {
    name: string
};


export async function getNewsCategory({ name }: Props) {
    try{
        const response = axios.get(`${domain}${API_MODE}${urls.get.category(name)}`)
        return (await response).data
    }catch(err){
        console.log(err);
    }
}
