import React, { useEffect } from 'react';
import { Configuration } from "../../config/index";
const BASE_URL = (url) => Configuration.BASE_URL + url;
const AssetCatgUrl=BASE_URL('/assetcategory/getall'); 
const GetMasterData = props => {
    
    useEffect(() => {
        const fetchData = async () => {
      
            const response = await fetch(AssetCatgUrl);
               const data = await response.json();
               return data.result;
           
        }
    })

}

export default {GetMasterData};
