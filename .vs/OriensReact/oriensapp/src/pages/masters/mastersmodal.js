import React, {useState, useEffect} from 'react';
import '../masters/mastersstyle.css'
import { Configuration } from "../../config/index";
import requestJson from './masterRequest'
import masterKeys from './masterKeys'
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';
import Select from 'react-select';
import MasterDataUtility from "./MasterDataUtility"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,   Modal, 
  ModalBody } from 'reactstrap';
const PopUpModal = ({show, formInputdata, onCancel, editUser,headerlist
  ,formMode,masterName}) => {

const [MasterDataOptions,setMasterDataOptions] = useState(null);
const [MasterForSelectControl,setMasterForSelectControl] = useState([]);
const [AssetCategoryList,setAssetCategoryList] = useState([]);
const [AssetTypeList,setAssetTypeList] = useState([]);    
const [AssetWarrantyList,setAssetWarrantyList] = useState([]);    
const [AssetPriorityList,setAssetPriorityList] = useState([]);    
const [AssetCriticalityList,setAssetCriticalityList] = useState([]);    
const [AssetStatusList,setAssetStatusList] = useState([]);    
const [AssetList,setAssetList] = useState([]);    
const [FailureClassList,setFailureClassList] = useState([]);    
const [UomList,setUomList] = useState([]);    
const [selectedOption, setSelectedOption] = useState(null);
    
    // handle onChange event of the dropdown
    const handleSelectOptionChange = e => {
      setSelectedOption(e);
    }

const getAPIUrl = (methodType) => {
  var apiUrl='./masterPostAPI.json';
  if(methodType=="POST"){
    apiUrl=require('./masterPostAPI.json');
  }
  else if(methodType=="PUT"){
    apiUrl=require('./masterPutAPI.json');
  }
  else if(methodType=="DELETE"){
    apiUrl=require('./masterDeleteAPI.json');
  }
  var methodAPIUrl = apiUrl.filter(a => a.masterName == masterName);
  return methodAPIUrl[0].apiURL;     
}
const BASE_URL = (url) => Configuration.BASE_URL + url;    

const AssetCatgPostUrl=BASE_URL(getAPIUrl('POST'));  
const AssetCatgPutUrl=BASE_URL(getAPIUrl('PUT'));  
const AssetCatgDeleteUrl=BASE_URL(getAPIUrl('DELETE')); 
const [InitialJsonInput, setInitialJsonInput] = useState();
const [RequestJson, setRequestJson] = useState(requestJson);
const [formJsonData, setformJsonData] = useState();
const [JsonInput, setJsonInput] = useState();
const editFlag = false;
const [startDate, setStartDate] = React.useState(
  setHours(setMinutes(new Date(), 0), 9)
);
const initialMinTime = editFlag
  ? setHours(setMinutes(new Date(), 0), 18)
  : setHours(setMinutes(new Date(), 0), 0);
const [minTime, setMinTime] = React.useState(initialMinTime);
const [maxTime, setMaxTime] = React.useState(
  setHours(setMinutes(new Date(), 59), 23)
);


const [MasterKeyList, setMasterKeyList] = useState();
  useEffect(() => {
    
    if (editUser) setFormData(editUser);
  }, [editUser]);

  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  }
  const closePopUp = () => {
    onCancel();
  }
  var getMasterListApi = require('./masterGetAPI.json');
 
  const [MasterDataList, setMasterDataList] = useState([]);
  const  getMasterList=(parentName) =>{ debugger;
   var lstGetApi = getMasterListApi.filter(a => a.masterName == parentName);
   const getMasterListAPIUrl=BASE_URL(lstGetApi[0].apiURL);
   
   var tempJsonList=[{"label" : "Select" ,"value" : "0"}];
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
      if(parentName=="assetsType"){debugger;
        dynamicJson["label"] =  paramJsonItem["assetTypeName"];
      }
      if(parentName=="assetsWarranty"){debugger;
        dynamicJson["label"] =  paramJsonItem["warrantyName"];
      }
      
      if(parentName=="assetsPriority"){debugger;
        dynamicJson["label"] =  paramJsonItem["priorityName"];
      }
      
      if(parentName=="assetsCriticality"){debugger;
        dynamicJson["label"] =  paramJsonItem["criticalityName"];
      }
      
      if(parentName=="assetsStatus"){debugger;
        dynamicJson["label"] =  paramJsonItem["statusName"];
      }
      if(parentName=="assets"){debugger;
        dynamicJson["label"] =  paramJsonItem["assetName"];
      }
      if(parentName=="failureClass"){debugger;
        dynamicJson["label"] =  paramJsonItem["failureClassName"];
      }
      if(parentName=="uom"){debugger;
        dynamicJson["label"] =  paramJsonItem["uomName"];
      }
//      dynamicJson["label"] =  paramJsonItem["assetCategoryName"];
      dynamicJson["value"] = paramJsonItem["id"];
      tempJsonList.push(dynamicJson);
      //setMasterForSelectControl(tempJsonList);
      //var jsonConvert=Json.parse(dynamicJson);
     });
     if(parentName=="assetCategory"){
      setAssetCategoryList(tempJsonList);
      return AssetCategoryList;
    }
    if(parentName=="assetsType"){
      setAssetTypeList(tempJsonList);
      return AssetTypeList;
    }
    
    if(parentName=="assetsWarranty"){
      setAssetWarrantyList(tempJsonList);
      return AssetWarrantyList;
    }
    if(parentName=="assetsPriority"){
      setAssetPriorityList(tempJsonList);
      return AssetPriorityList;
    }
    if(parentName=="assetsCriticality"){
      setAssetCriticalityList(tempJsonList);
      return AssetCriticalityList;
    }

    if(parentName=="assetsStatus"){
      setAssetStatusList(tempJsonList);
      return AssetStatusList;
    }
    
    if(parentName=="assets"){
      setAssetList(tempJsonList);
      return AssetList;
    }
    
    if(parentName=="failureClass"){
      setFailureClassList(tempJsonList);
      return FailureClassList;
    }
    
    if(parentName=="uom"){
      setUomList(tempJsonList);
      return UomList;
    }
     //return tempJsonList;
   }
   ,
         err => {
           }

   );

 }
 const getMasterForSelectControl=(listName)=>{
  if(listName=="assetCategory"){
    return AssetCategoryList;
  }
  if(listName=="assetsType"){
    return AssetTypeList;
  }
  if(listName=="assetsWarranty"){
    return AssetWarrantyList;
  }
  if(listName=="assetsPriority"){
    return AssetPriorityList;
  }
  if(listName=="assetsCriticality"){
    return AssetCriticalityList;
  }
  if(listName=="assetsStatus"){
    return AssetStatusList;
  }
  if(listName=="assets"){
    return AssetList;
  }

  if(listName=="failureClass"){
    return FailureClassList;
  }

  if(listName=="uom"){
    return UomList;
  }
 }
  const initialFormState = () => {
    //RequestJson.filter(a => a.masterName == masterName)[0].requestJson
    setMasterKeyList(masterKeys);
    setInitialJsonInput(RequestJson.filter(a => a.masterName == masterName)[0].requestJson[0]);
    getMasterList('assetCategory');
    getMasterList('assetsType');
    getMasterList('assetsWarranty');
    getMasterList('assetsPriority');
    getMasterList('assetsCriticality');
    getMasterList('assetsStatus');
    getMasterList('assets');
    getMasterList('failureClass');
    getMasterList('uom');
  } 
  const getMasterSelectOptions =(listType)=>{
if(listType=="assetCategory"){
  return AssetCategoryList;
}
if(listType=="assetsType"){
  return AssetTypeList;
}
if(listType=="assetsWarranty"){
  return AssetWarrantyList;
}
//warrantyName
  }
  const postJsonData = () =>  {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(JsonInput)
    };
    fetch(AssetCatgPostUrl, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}
const putJsonData = () =>  {
  // Simple POST request with a JSON body using fetch
  
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formInputdata)
  };
  fetch(AssetCatgPutUrl, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
}

const deleteJsonData = () =>  {
  var masterKeyName=MasterKeyList.filter(a => a.masterName==masterName)[0].keyName;
  var masterKeyValue=formInputdata[masterKeyName];

  const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formInputdata)
  };
  console.log(AssetCatgDeleteUrl);

  fetch(AssetCatgDeleteUrl + '/' + masterKeyValue, requestOptions)
      .then(response => response.json())
      //.then(data => this.setState({ postId: data.id }));
}


  const [formData, setFormData] = useState(initialFormState);

  const onInputChange = event => {
    
    const { name, value } = event.target;
    // var tempformInputdata=formInputdata;
    // tempformInputdata[name]=value;
    // //setformJsonData(tempformInputdata);
    // let tempJson=InitialJsonInput;
    // InitialJsonInput[name]=value;
    //  setJsonInput(tempJson);
    //  setInitialJsonInput(tempJson);
    //  let tempJsonInput=JsonInput;
    let tempJson=InitialJsonInput;
    tempJson[name]=value;
     setJsonInput(tempJson);
     setInitialJsonInput(tempJson);
     let tempJsonInput=JsonInput;
  }

  const submitData = event => {
    event.preventDefault();
    if(formMode=='Edit'){
      putJsonData();
    }
    
    else{
      postJsonData();
    }
    //postJsonData();
    //onSubmit(formData);
    //refreshPage();
    onCancel();
    
  }

  const dateChanged=(date)=>{
    this.setState({
      currentDate: date
    })
  }
  
 
  const updateControlDate=(name,value)=>{
    let tempJson=InitialJsonInput;
    InitialJsonInput[name]=value;
     setJsonInput(tempJson);
     setInitialJsonInput(tempJson);
  }
  const updateControlSelect=(name,value)=>{
    //let tempJson=InitialJsonInput;
    InitialJsonInput[name]=value.value;
    let tempJson=InitialJsonInput;
     setJsonInput(tempJson);
     setInitialJsonInput(tempJson);
     let tempJsonInput=JsonInput;
  }
  const getControlDate=(name,value)=>{
    // let tempJson=InitialJsonInput;
    // InitialJsonInput[name]=value;
    //  setJsonInput(tempJson);
    //  var dateValue=value;

    if(InitialJsonInput[name].toString().indexOf("<")==-1){
      value= InitialJsonInput[name];
    }
    return value;
  }

  const getFormFields =()=>{
    if(formMode=='Delete'){
      deleteJsonData();
    }
    else{
      if(headerlist != null){ 
        let tempMasterForSelectControl=MasterForSelectControl;
        return Object.keys(headerlist).map((data)=>{
          if(headerlist[data].controlType!=null && 
            headerlist[data].controlType=="datePicker"){

            return <li>
            <label  className="lblCaption">{headerlist[data].htmlHeader}</label>
            <DatePicker
            visiblity={'hidden'}
            selected={getControlDate(headerlist[data].jsonHeader,startDate)}
            onChange={(date) => {
              //console.log();
              setStartDate(date);
              updateControlDate(headerlist[data].jsonHeader,date);
            }}
            dateFormat="yyyy-MM-dd"
            name={headerlist[data].jsonHeader} />
            </li>



          


          }
          else if(headerlist[data].controlType!=null && 
            headerlist[data].controlType=="selectOption"){

            return <li>
            <label  className="lblCaption">{headerlist[data].htmlHeader}</label>
            <Select
        placeholder="Select Option"
        name={headerlist[data].jsonHeader}
        value={selectedOption} // set selected value
        options={ getMasterForSelectControl(headerlist[data].parentName)} // set list of the data
        onChange={(optionSelected) => {
          //console.log();
          handleSelectOptionChange();
          updateControlSelect(headerlist[data].jsonHeader,optionSelected);
        }}
        //onChange={handleSelectOptionChange} // assign onChange function
      />
            </li>
            
            
          
        


          }
          else{

            return   <li>
            <label  className="lblCaption">{headerlist[data].htmlHeader}</label>
            <input type="text" name={headerlist[data].jsonHeader}
            //value={formInputdata[headerlist[data].jsonHeader]}
              onChange={onInputChange} autoFocus autoComplete="off" />
            </li>

          }
      
       
      })
    }
      
      
      }
      
   }

  return (
    show ? (
      <Modal isOpen={true} toggle={true} className="filter_popup_outer_wrap">
      <ModalBody>
        <div className='popup_filter_header_outer_wrap'>
          <h4>NEW ASSET</h4>
          <p className='close_popup' onClick={closePopUp}>&#10006;</p>
        </div>
        <div className="modal-section">
          {/* <div id="resp-table">
            <div id="resp-table-body" class="filter_form_outer_wrap">
                {getFormFields()}
            </div>
          </div> */}

          <div className='filter_form_outer_wrap'>
            <ul>
            {getFormFields()}
            </ul>
          </div>
         
        </div>
        <div className='more_filter_footer_wrap'>
          <button type="button" className='mastercancel' onClick={onCancel}>Cancel</button>
          <button type="submit" className='mastersave'>Submit</button>
        </div>
      </ModalBody>
  </Modal>
    ) : null
  );
}

export default PopUpModal;