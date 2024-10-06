import axios from "axios";

export async function getApi(url : string) {
    const feedbackUrl = "http://localhost:7001/admin-v1/";
    const response = await axios.get(url, {
        baseURL : feedbackUrl,
        headers : {
            Authorization : `Bearer ${sessionStorage.getItem('token')}`
        }
    });

    if (response.status === 200) {
        return response.data;
    } else {
        return new Error("API 호출 실패");
    }
}