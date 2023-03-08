import React, { useState } from 'react';
import './mastersstyle.css';
import PopUpModal from './mastersmodal';
import masterHeaders from './masterHeaders'
import { useLocation } from 'react-router-dom';
import DynamicTable from "./dynamicmastertable";
import '../asset-component/assets-component.css';

export default function MastersDashBoardComponent() {
  
  const query = new URLSearchParams(useLocation().search);
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState();
    const [FormMode, setFormMode] = useState('Create');
    const [MasterHeaderList, setMasterHeaderList] = useState(masterHeaders);
    //  var colHeader=MasterHeaderList[0].filter(a => a.masterName == query.get('masterName'));
    const [ColumnHeaders, setColumnHeaders] = useState([]);
    const [popUpStyle, setpopUpStyle] = useState();
    const [currentUser, setCurrentUser] = useState(null);
   
    const toggleModal = (user,mode) => {
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
      toggleModal(user,'Delete');
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
  setFormMode('Create');
  setColumnHeaders(MasterHeaderList.filter(a => a.masterName == query.get('masterName'))[0].headerName);
} 
const [resetFormData, setresetFormData] = useState(initialFormState);

const showPopupModal = (e) => {
 
}
   return (
    <div>
      <div className="header">
        <span className="title">Masters</span>
      </div>


      <div className='page_content_outer_wrap'>
	<div className='page_title_outer_wrap'>

	</div>
	<div className='assets_filter_outer_wrap'>


		<div className='filter_bottom_setting_wrap'>
		  <div className='filter_top_left_setting_wrap'>
			<button type='button' className='new_assets_btn_wrap blue_button_wrap' 
      onClick={toggleModal}>
        <span>+</span> New</button>
		  
		  </div>
      
		</div>

    <PopUpModal show={showModal} headerlist={ColumnHeaders}  formInputdata={userData} 
      formMode={FormMode} masterName={query.get('masterName')} 
      onCancel={hideForm}/>
<DynamicTable headerList={ColumnHeaders} onEdit={editUserHandler} 
      onDelete={deleteUser} masterName={query.get('masterName')} />
   
	</div>

</div>




    
    </div>
    )
}


