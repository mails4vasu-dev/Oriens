import React, {useState,useEffect} from 'react';
import '../masters/mastersstyle.css'
import masterHeaders from './masterHeaders'
import { Configuration } from "../../config/index";
import requestJson from './masterRequest'
import masterKeys from './masterKeys'
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';
import Select from 'react-select';
import grid_icon from '../../assets/images/tabel_input_ico.png';
import tree_icon from '../../assets/images/tree_input_ico.png';
import MasterDataUtility from "./MasterDataUtility"
import { useLocation } from 'react-router-dom';
import DynamicTable from "./dynamicmastertable";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,   Modal, 
  ModalBody } from 'reactstrap';
  var formSelectListData=[];
  
const PopUpModal = ({show, formInputdata, onCancel, editUser,headerlist
  ,formMode,masterName,masterTitle,formSelectData}) => {
  
 
var selectOptionsAssetCatg=null;    
const [formControlValue, setformControlValue] = useState();
const [ColumnHeaders, setColumnHeaders] = useState([]);
const [MasterHeaderList, setMasterHeaderList] = useState(masterHeaders);
const query = new URLSearchParams(useLocation().search);
const [MasterDataOptions,setMasterDataOptions] = useState(null);
const [MasterForSelectControl,setMasterForSelectControl] = useState([]);
const [AssetCategoryList,setAssetCategoryList] = useState([]);
const [AssetCategoryItem,setAssetCategoryItem] = useState([]);
const [AssetTypeList,setAssetTypeList] = useState([]);    
const [AssetWarrantyList,setAssetWarrantyList] = useState([]);    
const [AssetPriorityList,setAssetPriorityList] = useState([]);    
const [AssetCriticalityList,setAssetCriticalityList] = useState([]);    
const [AssetStatusList,setAssetStatusList] = useState([]);    
const [AssetList,setAssetList] = useState([]);    
const [FailureClassList,setFailureClassList] = useState([]);    
const [UomList,setUomList] = useState([]);    
const [LocationList,setLocationList] = useState([]);    
const [LocationTypeList,setLocationTypeList] = useState([]);    
const [selectedOption, setSelectedOption] = useState([]);
const [formdataColection, setformdataColection] = useState(formInputdata);
const [formSelectValueList, setformSelectValueList] = useState([]);
const [paramcontentInPopUp,setparamcontentInPopUp]= useState(false); 
const [paramshowInWindow,setparamshowInWindow]= useState(false); 
    // handle onChange event of the dropdown

useEffect(() => {
   if(formInputdata!=null){
    var localformSelectData=formInputdata['parentCategoryId'];
    var catgList=AssetCategoryList.filter(item=>item.value==localformSelectData);
    setSelectedOption(catgList);
  }
  
}, [formInputdata]);    
const handleSelectOptionChange = e => {
  setSelectedOption(e);
  formSelectListData=e;
  //selectOptionsAssetCatg=e;
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
  // useEffect(() => {
    
  //   if (editUser) setFormData(editUser);
  // }, [editUser]);

  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  }
  const closePopUp = () => {
    onCancel();
  }
  var getMasterListApi = require('./masterGetAPI.json');
 
  const [MasterDataList, setMasterDataList] = useState([]);
  const  getMasterList=(parentName) =>{ 
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
      if(parentName=="assetsType"){
        dynamicJson["label"] =  paramJsonItem["assetTypeName"];
      }
      if(parentName=="assetsWarranty"){
        dynamicJson["label"] =  paramJsonItem["warrantyName"];
      }
      
      if(parentName=="assetsPriority"){
        dynamicJson["label"] =  paramJsonItem["priorityName"];
      }
      
      if(parentName=="assetsCriticality"){
        dynamicJson["label"] =  paramJsonItem["criticalityName"];
      }
      
      if(parentName=="assetsStatus"){
        dynamicJson["label"] =  paramJsonItem["statusName"];
      }
      if(parentName=="assets"){
        dynamicJson["label"] =  paramJsonItem["assetName"];
      }
      if(parentName=="failureClass"){
        dynamicJson["label"] =  paramJsonItem["failureClassName"];
      }
      if(parentName=="uom"){
        dynamicJson["label"] =  paramJsonItem["uomName"];
      }
      if(parentName=="location"){
        dynamicJson["label"] =  paramJsonItem["locationName"];
      }
      if(parentName=="locationType"){
        dynamicJson["label"] =  paramJsonItem["locationTypeName"];
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
    if(parentName=="location"){
      setLocationList(tempJsonList);
      return LocationList;
    }

    if(parentName=="locationType"){
      setLocationTypeList(tempJsonList);
      return LocationTypeList;
    }
     //return tempJsonList;
   }
   ,
         err => {
           }

   );

 }
 
 const getMasterForSelectControl=(listName,keyName,paramformSelectValueList)=>{
   
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
  if(listName=="location"){
      return LocationList;
  }
  if(listName=="locationType"){
      return LocationTypeList;
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
    getMasterList('location');
    getMasterList('locationType');
    setparamcontentInPopUp(false);
    setparamshowInWindow(false);
    
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
  debugger;
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
  

  fetch(AssetCatgDeleteUrl + '/' + masterKeyValue, requestOptions)
      .then(response => response.json())
      //.then(data => this.setState({ postId: data.id }));
}


  
  

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
    let tempJson=JsonInput;
    
    if(JsonInput==null){
      var tempJsonString=  "{" + '"' + name+  '"' + ":"+ '"'+ value +  '"' + "}";
     // tempJson=JSON.parse(tempJsonString);
      //console.log(tempJsonString);
      tempJson=JSON.parse(tempJsonString);
    }
    else{
      tempJson[name]=value;
      formInputdata[name]=value;
      
    }
   
    //tempJson[name]=value;
     setJsonInput(tempJson);
     setInitialJsonInput(tempJson);
     if(formMode=="Edit"){
      setformControlValue(tempJson);
     }
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
  const showListPopUp=(paramMasterName)=>{
    setparamcontentInPopUp(true);
    setparamshowInWindow(false);
    setColumnHeaders(MasterHeaderList.filter(a => a.masterName == paramMasterName)[0].headerName);
  }
  
  const hideListPopUp=()=>{
    setparamcontentInPopUp(false);
    setparamshowInWindow(false);
    
  }
  
  const updateControlDate=(name,value)=>{
    let tempJson=JsonInput;
    
    if(JsonInput==null){
      var tempJsonString=  "{" + '"' + name+  '"' + ":"+ '"'+ value +  '"' + "}";
     // tempJson=JSON.parse(tempJsonString);
      //console.log(tempJsonString);
      tempJson=JSON.parse(tempJsonString);
    }
    else{
      tempJson[name]=value;
    }

  //  let tempJson=InitialJsonInput;
    InitialJsonInput[name]=value;
     setJsonInput(tempJson);
     setInitialJsonInput(tempJson);
  }
  const updateControlSelect=(name,value)=>{
    //let tempJson=InitialJsonInput;
    InitialJsonInput[name]=value.value;
    formInputdata[name]=value.value;
   // let tempJson=InitialJsonInput;

   let tempJson=JsonInput;
   
   if(JsonInput==null){
     var tempJsonString=  "{" + '"' + name+  '"' + ":"+ '"'+ value.value +  '"' + "}";
    // tempJson=JSON.parse(tempJsonString);
    // console.log(tempJsonString);
     tempJson=JSON.parse(tempJsonString);
   }
   else{
     tempJson[name]=value.value;
   }


     setJsonInput(tempJson);
     setInitialJsonInput(tempJson);
     let tempJsonInput=JsonInput;
  }
  const getControlDate=(name,value)=>{
    if(InitialJsonInput[name]!=null){
      if(InitialJsonInput[name].toString().indexOf("<")==-1){
        value= InitialJsonInput[name];
      }
    }
    
    return value;
  }
  
 
  const getControlValue =(paramformControlValue,paramcontrolValue)=>{
  if(paramformControlValue!=null && paramcontrolValue!=null){
    console.log(paramformControlValue[paramcontrolValue]);
    return paramformControlValue[paramcontrolValue];
  }
  }
   
  const [formData, setFormData] = useState(initialFormState);
  
  const getFormFields =()=>{ debugger;
     
    
    if(formControlValue==null){
      setformControlValue(formInputdata);
    }
    else if(formControlValue["id"] != formInputdata["id"]){
      setformControlValue(formInputdata);
    }
    
    if(formMode=='Delete'){
      deleteJsonData();
    }
    else{
      if(headerlist != null){ 
       // setformControlValue(formInputdata);
        let tempMasterForSelectControl=MasterForSelectControl;
        return Object.keys(headerlist).map((data)=>{
          if(headerlist[data].controlType!=null && 
            headerlist[data].controlType=="datePicker"
            &&headerlist[data].edit !="false"){

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
            headerlist[data].controlType=="selectOption"
            &&headerlist[data].edit !="false"){

            return <li>
            <label  className="lblCaption">{headerlist[data].htmlHeader}</label>
            
            <Select
                    placeholder="Select Option"
                    className="masterUIselect"
                    name={headerlist[data].jsonHeader}
                   // value={formSelectListData} 
                   value={selectedOption} 
                    options={ getMasterForSelectControl(headerlist[data].parentName,headerlist[data].jsonHeader,formSelectValueList)} // set list of the data
                    onChange={(optionSelected) => {
                      debugger;
                      handleSelectOptionChange();
                      updateControlSelect(headerlist[data].jsonHeader,optionSelected);
                    }}
                    />
            </li>
            
            
          
        


          }

          
          else if(headerlist[data].edit !="false"){
            if(headerlist[data].showicons =="true"){
              return   <li>
              <label  className="lblCaption">{headerlist[data].htmlHeader}</label>
              <div className='input_with_icons'>
                
               
              <input type="text" 
                name={headerlist[data].jsonHeader} 
                onChange={onInputChange} 
                autoFocus autoComplete="off" 
                placeholder={'Enter '+headerlist[data].htmlHeader}/>
                <button type="button" className='grid_icon' 
                onClick=
                {() => {
                  showListPopUp(headerlist[data].headerListKey);
                }}
                >
                <img src={grid_icon} alt="grid_icon"/>
              </button>
              <button type="button" className='tree_icon'>
                <img src={tree_icon} alt="tree_icon"/>
              </button>
              </div>
              </li>
  
            }
            else{
              return   <li>
            <label  className="lblCaption">{headerlist[data].htmlHeader}</label>
            {/* <input type="text" 
                name="txtnew" 
                value ={getControlValue(formControlValue,headerlist[data].jsonHeader)}
                /> */}
            <input type="text" 
              name={headerlist[data].jsonHeader} 
              value ={getControlValue(formControlValue,headerlist[data].jsonHeader)}
              onChange={onInputChange} autoFocus autoComplete="off" 
              placeholder={'Enter '+headerlist[data].htmlHeader}/>
            </li>

            }

          }
      
       
      })
    }
      
      
      }
      
   }
  
  return (
    show ? (
      <div>
<Modal isOpen={true} toggle={true} className="filter_popup_outer_wrap">
      <ModalBody>
        <div className='popup_filter_header_outer_wrap'>
          <h4>{'New '+masterTitle}</h4>
          <p className='close_popup' onClick={closePopUp}>&#10006;</p>
        </div>
        <div className="modal-section">
          <div className='filter_form_outer_wrap'>
            <ul>
            {getFormFields()}
            
            </ul>
          </div>
         
        </div>
        <div className='more_filter_footer_wrap'>
          <button type="button" className='mastercancel' onClick={onCancel}>Cancel</button>
          <button type="submit" className='mastersave' onClick={submitData}>Submit</button>
        </div>

        <DynamicTable headerList={ColumnHeaders} masterName="assetsLocation" 
        contentInPopUp={paramcontentInPopUp} showInWindow={paramshowInWindow} 
        onCancel={hideListPopUp} />
      </ModalBody>
  </Modal>
      </div>
      
    ) : null
  );
}

export default PopUpModal;