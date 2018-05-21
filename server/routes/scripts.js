'use strict'
var axios = require("axios");

module.exports = 
{
   httpcall :  function (url) {
        return axios.get(url)
            .then(function (data) {
                return data;
            })
            .catch(function (err) {
                return JSON.stringify(err);
            });
   }
}

 
