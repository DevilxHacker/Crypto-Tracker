import axiosInstance from "../helper/axiosInstance";

export async function fetchHistoricData(id,currency,day,interval) {
    try {
        const response = await axiosInstance.get(`coins/${id}/market_chart?vs_currency=${currency}&days=${day}&interval=${interval}`);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}