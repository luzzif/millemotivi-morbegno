import axios from "axios";

export const mailForwarderClient = axios.create({
    baseURL: process.env.REACT_APP_MAIL_FORWARDER_URL
});
