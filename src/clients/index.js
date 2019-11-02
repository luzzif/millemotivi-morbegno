import axios from "axios";

export const mailForwarderClient = axios.create({
    baseURL: "https://morbegnoprint-mail-forwarder.herokuapp.com/"
});
