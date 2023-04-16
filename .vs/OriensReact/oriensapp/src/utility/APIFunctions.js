import React, { useState } from 'react';
import { Configuration } from "../config/index";


const APIFunctions = (masterName,formInputData) => {
    const BASE_URL = (url) => Configuration.BASE_URL + url;
    
    var apiUrl='';
    apiUrl=require('../pages/masters/masterPutAPI.json');
    var methodAPIUrl = apiUrl.filter(a => a.masterName == masterName);
    const PutUrl=BASE_URL(methodAPIUrl[0].apiURL);  
    console.log(PutUrl);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formInputData)
    };
    fetch(PutUrl, requestOptions)
        .then(response => response.json())
        .then(data => {debugger;
           // this.setState({ postId: data.id })

        });
    
    return 0;
    }  
    


export default {APIFunctions};
