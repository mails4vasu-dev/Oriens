import React, { useState } from 'react';
import './mastersstyle.css';
import PopUpModal from './mastersmodal';
import masterHeaders from './masterHeaders'
import { useLocation } from 'react-router-dom';
import DynamicTable from "./dynamicmastertable";
import '../asset-component/assets-component.css';
import masterKeys from './masterKeys'
import { Configuration } from "../../config/index";
import search_icon from '../../assets/images/search.png';
import filter_icon from '../../assets/images/filter.png';
import export_icon from '../../assets/images/export.png';
import grid_icon from '../../assets/images/tabel_input_ico.png';
import tree_icon from '../../assets/images/tree_input_ico.png';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,   Modal, 
  ModalBody } from 'reactstrap';
export default function MastersDashBoardComponent() {
  
  const query = new URLSearchParams(useLocation().search);
  const [MasterKeyList, setMasterKeyList] = useState();
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState();
    const [FormMode, setFormMode] = useState('');
    const [MasterHeaderList, setMasterHeaderList] = useState(masterHeaders);
    //  var colHeader=MasterHeaderList[0].filter(a => a.masterName == query.get('masterName'));
    const [ColumnHeaders, setColumnHeaders] = useState([]);
    const [popUpStyle, setpopUpStyle] = useState();
    const [currentUser, setCurrentUser] = useState(null);
    const [MasterTitle, setMasterTitle] = useState(null);
    
    const toggleModal = (user,mode) => {
      if(mode==null || mode==''){
        mode='Create';
      }
      setShowModal(true);
      setUserData(user);
      if(mode!='' && mode!=null){
        setFormMode(mode);
      }
      if(mode!='Delete'){
        showForm();
      }
      
    
    }
  
    const addUser = user => {
      if (currentUser) {
        setUserData(userData.map(data => (data.id === user.id ? user : data)));
        setCurrentUser(null);
        return;
      }
      user.id = userData.length + 1;
      setUserData([...userData, user]);
    }
  
    const editUserHandler = (user) => {
    //  setCurrentUser(user);
      toggleModal(user,'Edit');
    }
  
    const deleteUser = user => {
      setUserData(user);
      deleteJsonData(user);
      //toggleModal(user,'Delete');
    }
    
   
const showForm =() =>{
  setpopUpStyle("showPopUp");
}

const hideForm =() =>{
  setpopUpStyle("hidePopUp");
  setShowModal(false);
}
const initialFormState = () => {
  hideForm();
  setMasterKeyList(masterKeys);
  
  setColumnHeaders(MasterHeaderList.filter(a => a.masterName == query.get('masterName'))[0].headerName);
} 
const [resetFormData, setresetFormData] = useState(initialFormState);

const showPopupModal = (e) => {
 
}


const getAPIUrl = (methodType) => {
  var apiUrl='./masterPostAPI.json';
  if(methodType=="DELETE"){
    apiUrl=require('./masterDeleteAPI.json');
  }
  var methodAPIUrl = apiUrl.filter(a => a.masterName == query.get('masterName'));
  return methodAPIUrl[0].apiURL;     
}
const BASE_URL = (url) => Configuration.BASE_URL + url;    

const AssetCatgDeleteUrl=BASE_URL(getAPIUrl('DELETE')); 

const deleteJsonData = (user) =>  {
  //var masterName=query.get('masterName');
  var masterKeyName=MasterKeyList.filter(a => a.masterName==query.get('masterName'))[0].keyName;
  var masterKeyValue=user[masterKeyName];

  const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
  };
 // console.log(AssetCatgDeleteUrl);

  fetch(AssetCatgDeleteUrl + '/' + masterKeyValue, requestOptions)
      .then(response => response.json())
      //.then(data => this.setState({ postId: data.id }));
}
const getMasterTitle=()=>{
  if(MasterKeyList!=null){
    return MasterKeyList.filter(a => a.masterName==query.get('masterName'))[0].title;
  }
  

}
   return (
    <div class="page_content_outer_wrap">
      <div class="page_title_outer_wrap"><h1>{getMasterTitle()}</h1></div>
      
      
		<div className='assets_filter_outer_wrap'>
    <div className='filter_top_setting_wrap'>
              <div className='filter_top_left_setting_wrap'>
                <div className='filter_input_wrap input_common_border'>
                  <input type="text" placeholder={getMasterTitle() + ' #'}/>
                </div>
                <div className='filter_input_wrap input_common_border'>
                  <input type="text" placeholder={getMasterTitle() + ' Name'}/>
                </div>
                <div className='search_filter_input_wrap  input_common_border'>
                  <input type="text" placeholder={getMasterTitle() + ' Name'}/>
                  <button type="button" className='search_icon_btn_wrap blue_button_wrap'>
                    <img src={search_icon} alt="search_icon"/>
                  </button>
                </div>
                <div className='filter_dropdown_wrap filter_arrow'>
                  <UncontrolledDropdown>
                    <DropdownToggle>
                        <img src={filter_icon} alt="filter_icon"/>
                        <span>Filters</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className='filter_top_right_setting_wrap'>
                <div className='filter_input_wrap input_common_border'>
                  <input type="text" placeholder='Search' id="filter_search_bg"/>
                </div>
              </div>
            </div>
              <div className='filter_bottom_setting_wrap'>
              <div className='filter_top_left_setting_wrap'>
              <button type='button' className='new_assets_btn_wrap blue_button_wrap' 
              onClick={toggleModal}>
                <span>+</span> New</button>
                <p>Change Status</p>
                <div className='filter_dropdown_wrap filter_arrow'>
                  <UncontrolledDropdown>
                    <DropdownToggle>
                        <img src={export_icon} alt="export_icon"/>
                        <span>Export</span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>CV</DropdownItem>
                        <DropdownItem>XML</DropdownItem>
                        <DropdownItem>PDF</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className='filter_top_right_setting_wrap'>
                <div className='filter_dropdown_wrap drop_no_arrow three_dot_drop_outer_wrap'>
                  <UncontrolledDropdown>
                    <DropdownToggle>
                        <span className='three_dots'>...</span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem>Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </div>
<PopUpModal show={showModal} headerlist={ColumnHeaders}  formInputdata={userData} 
 formMode={FormMode} masterName={query.get('masterName')} 
 onCancel={hideForm} masterTitle={getMasterTitle()} formSelectData={userData}/>
   
<DynamicTable headerList={ColumnHeaders} onEdit={editUserHandler} 
      onDelete={deleteUser} masterName={query.get('masterName')} 
      contentInPopUp={false} showInWindow={true}/>
   


</div>




    
    </div>
    )
}


