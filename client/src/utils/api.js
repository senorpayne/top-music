import axios from "axios"; 

export default {
    getscrapedData: function() {
        return axios.get("/api/getscrapedData");

    }


}