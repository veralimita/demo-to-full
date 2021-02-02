const axios = require('axios');
const basePath = process.env.API_URL;

const getList = async function () {
    await axios.get(basePath);
}

export default {
    getList
}
