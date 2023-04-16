import React, { useState } from 'react';
import { Configuration } from "../config/index";


const GenericAPI = (parentName) => {
    const BASE_URL = (url) => Configuration.BASE_URL + url;
    var tempJsonList=[{"label" : "Select" ,"value" : "0"}];
    const AssetCatgUrl=BASE_URL('/assetcategory/getall'); 
   // const [MasterSelectList,setMasterSelectList] = useState([]);    
    var getMasterListApi = require('../pages/masters/masterGetAPI.json');
    var lstGetApi = getMasterListApi.filter(a => a.masterName == parentName);
    const getMasterListAPIUrl=BASE_URL(lstGetApi[0].apiURL);
    console.log(getMasterListAPIUrl);
    
   
    fetch(getMasterListAPIUrl)
    .then(response => response.json())
    .then(data => {   
      Object.keys(data.result).map((jsonItem)=>{
       var paramJsonList=data.result;
       var paramJsonItem= paramJsonList[jsonItem];
      
       var dynamicJson={"label" : "Select" ,"value" : "0"};
       if(parentName=="assetCategory"){
         dynamicJson["label"] =  paramJsonItem["assetCategoryName"];
       }
       if(parentName=="assetsType"){
        dynamicJson["label"] =  paramJsonItem["assetTypeName"];
      }
       if(parentName=="assetsPriority"){
        dynamicJson["label"] =  paramJsonItem["priorityName"];
      }
      if(parentName=="failureClass"){
        dynamicJson["label"] =  paramJsonItem["failureClassName"];
      }
      if(parentName=="assetsCriticality"){
        dynamicJson["label"] =  paramJsonItem["criticalityName"];
      }
      if(parentName=="location"){
        dynamicJson["label"] =  paramJsonItem["locationName"];
      }
       dynamicJson["value"] = paramJsonItem["id"];
       tempJsonList.push(dynamicJson);
       
      });
     
     
    }
    
    );
    return tempJsonList;
    }  
    


export default {GenericAPI};
