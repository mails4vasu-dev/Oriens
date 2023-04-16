import React, { useState,useEffect } from 'react';
import '../assets-component.css';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import product_img from '../../../assets/images/product.png';
import close_icon from '../../../assets/images/close.png';
import save_icon from '../../../assets/images/save.png';
import { Link, json } from 'react-router-dom';
import { Table } from 'reactstrap';
import leftarrow from '../../../assets/images/left-arrow.png';
import back_arrow from '../../../assets/images/back_arrow.png';
import { Configuration } from "../../../config/index";
import grid_icon from '../../../assets/images/tabel_input_ico.png';
import tree_icon from '../../../assets/images/tree_input_ico.png';
import Switch from "react-switch";
import DatePicker from 'react-date-picker';
import { Modal, ModalBody } from 'reactstrap';
import TreeFilter from './TreeFilter';
import  GenericAPI from '../../../utility/GenericApi'
import  APIFunctions from '../../../utility/APIFunctions'
import '../../masters/mastersstyle.css'
import Select from 'react-select';
import { useLocation } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
export default function AssetDetailEditTab({tabactive}) {
  const query = new URLSearchParams(useLocation().search);
  var queryAssetId=query.get('AssetId');
  var formInputData= null;
  const [FormInputData,setFormInputData] = useState(formInputData);   
  const [AssetTypeList,setAssetTypeList] = useState([]); 
  const [CriticalityList,setCriticalityList] = useState([]); 
  const [CriticalityItem,setCriticalityItem] = useState([]); 
  const [PriorityList,setPriorityList] = useState([]); 
  const [PriorityItem,setPriorityItem] = useState([]); 
  const [FailureClassList,setFailureClassList] = useState([]); 
  const [FailureClassItem,setFailureClassItem] = useState([]); 
  const [LocationList,setLocationList] = useState([]); 
  const [LocationItem,setLocationItem] = useState([]); 
  const [AssetCatgList,setAssetCatgList] = useState([]); 
  const [AssetCatgItem,setAssetCatgItem] = useState([]); 
  const [SelectedItem,setSelectedItem]=useState([]);
  const [AssetName,setAssetName] = useState(''); 
  const [SerialNo,setSerialNo] = useState(''); 
  const [Model,setModel] = useState(''); 
  const [YTDCost,setYTDCost] = useState(''); 
  const [PurchasePrice,setPurchasePrice] = useState(''); 
  const [LTDCost,setLTDCost] = useState(''); 
  const [InstallationDate,setInstallationDate] = useState(''); 
  const [YTDMTBF,setYTDMTBF] = useState(''); 
  const [Manufacturer,setManufacturer] = useState(''); 
  const [Supplier,setSupplier] = useState(''); 
  const [selectedValue, setSelectedValue] = useState(3);
  const AssetDetailUrl="/assets_detail?AssetId="+queryAssetId;
  // handle onChange event of the dropdown
  const [isLoaded, setIsLoaded] = useState(false);
const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps
const[LocationName,setLocationName]= useState('');
const navigate = useNavigate();
useEffect(() => {
    setIsLoaded(true);
}, [AssetTypeList]);

useEffect(() => {
   
    
}, [isLoaded]);
  const handleTypeSelectChange = (jsonKey,e,formData) => {
    setAssetTypeItem(e);
    formData[jsonKey]=e.value;
   setFormInputData(formData);
  }

  const handlePrioritySelectChange = (jsonKey,e,formData) => {
    setPriorityItem(e);
    formData[jsonKey]=e.value;
   setFormInputData(formData);
  }

  const handleCriticalitySelectChange = (jsonKey,e,formData) => {
    setCriticalityItem(e);
    formData[jsonKey]=e.value;
   setFormInputData(formData);
  }
  const handleCatgSelectChange = (jsonKey,e,formData) => {debugger;
    setAssetCatgItem(e);
    formData[jsonKey]=e.value;
   setFormInputData(formData);
  }
  
  const handleFailureSelectChange = (jsonKey,e,formData) => {
    setFailureClassItem(e);
    formData[jsonKey]=e.value;
   setFormInputData(formData);
  }
  const UpdateAsset=(formData)=>{
    APIFunctions.APIFunctions("assets",formData);debugger;
    
    //navigate(AssetDetailUrl);
  }   
  const closeLocationTreeView=(locName)=>{
    NewTreetoggle();
    setLocationName(locName);
   
  }   
  //closeTreeView
  const getDefaultValue=(assetTypeList)=>{
    var list=assetTypeList.filter(obj => obj.value === AssetItem.assetTypeId);
    //APIFunctions.APIFunctions("assets",formData);
   
  }   
 
  

  const [activeTab, setActiveTab] = useState('1');
  const BASE_URL = (url) => Configuration.BASE_URL + url;
  var queryAssetId=query.get('AssetId');
  const AssetItemUrl=BASE_URL('/assets/getbyid/'+queryAssetId);
  const AssetPartsUrl=BASE_URL('/assetparts/partsbyassetid/'+queryAssetId);
    var assetItemLocal=null;
  const [NewTreeModel, setNewTreetoggle] = React.useState(false);
  const NewTreetoggle = () =>{
    //trLocation.closePopUp();
    setNewTreetoggle(!NewTreeModel)
  };
  const closeTreeView = (locationId) =>{
    setNewTreetoggle(!NewTreeModel)
  };


    const [AssetItem, setAssetItem]= useState([]);
    const [AssetPartsList, setAssetParts]= useState([]);
    const [AssetTypeItem, setAssetTypeItem]= useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };

    const [value, onChange] = useState(new Date());


    const onInputChange = (jsonKey,event,formData)  => {debugger;
        const { name, value } = event.target;
        if(jsonKey=="assetName"){
            setAssetName(value)
        }
        if(jsonKey=="serialNumber"){
            setSerialNo(value)
        }
        if(jsonKey=="model"){
            setModel(value)
        }
        if(jsonKey=="purchasePrice"){
            setPurchasePrice(value)
        }
        if(jsonKey=="installationDate"){
            setInstallationDate(value)
        }
        if(jsonKey=="YTDCost"){
            setYTDCost(value)
        }
        if(jsonKey=="LTDCost"){
            setLTDCost(value)
        }
        if(jsonKey=="YTDMTBF"){
            setYTDMTBF(value)
        }
        if(jsonKey=="Supplier"){
            setSupplier(value)
        }
        debugger;
        formData[jsonKey]=value;
        setFormInputData(formData);
        console.log(formData);
    }


    useEffect(() => {
        fetch(AssetItemUrl)
    .then(res => {
        if (res.status >= 400) {
            throw new Error("Server responds with error!")
        }
        return res.json()
    })
    .then(data => {debugger;
        var p_asssetItem=data.result;
        setAssetItem(p_asssetItem);
        setAssetName(p_asssetItem.assetName);
        setSerialNo(p_asssetItem.serialNumber);
        setModel(p_asssetItem.model);
        setPurchasePrice(p_asssetItem.purchasePrice);
        setInstallationDate(p_asssetItem.installationDate);
        setFormInputData(p_asssetItem);
        formInputData=p_asssetItem;
        assetItemLocal=p_asssetItem;
        fetch(AssetPartsUrl)
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Server responds with error!")
            }
            return res.json()
        })
        .then(data => {
            setAssetParts(data.result);
            var assetTypeItem=GenericAPI.GenericAPI('assetsType');
            var assetPrItem=GenericAPI.GenericAPI('assetsPriority');
            var assetCrItem=GenericAPI.GenericAPI('assetsCriticality');
            debugger;
            var assetCatgItem=GenericAPI.GenericAPI('assetCategory');
            var assetFcItem=GenericAPI.GenericAPI('failureClass');
            setAssetTypeList(assetTypeItem);
            setPriorityList(assetPrItem);
            setCriticalityList(assetCrItem);
            setLocationList(GenericAPI.GenericAPI('assetsLocation'));
            setFailureClassList(assetFcItem);
            setAssetCatgList(assetCatgItem);
            setTimeout(() => {
                setAssetTypeItem(assetTypeItem.filter(item=>item.value==assetItemLocal.assetTypeId));
                setPriorityItem(assetPrItem.filter(item=>item.value==assetItemLocal.assetPriorityId));
                setCriticalityItem(assetCrItem.filter(item=>item.value==assetItemLocal.assetCriticalityId));
                setFailureClassItem(assetFcItem.filter(item=>item.value==assetItemLocal.failureClassesId));
                setAssetCatgItem(assetCatgItem.filter(item=>item.value==assetItemLocal.assetCategoryId));
                //setIsPageLoaded(true);
              }, 1500)
        },
          err => {
               
            })
        
    },
      err => {
           
        })


       
      }, []);
    

  return (
    <div className='asset_detail_tabs_outer_wrap'>
        <div className='asset_detail_nav_wrap'>
            <Nav tabs>
                <NavItem>
                    <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        General 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab ==='2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        Parts/BOM
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    Work
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                        Specifications
                    </NavLink>
                </NavItem>
            </Nav>
            <div className='asset_edit_icon_outer_wrap'>
                <button type="button">
                    <img src={save_icon} alt="save_icon.png" 
                     onClick=
                     {() => {
                        UpdateAsset(FormInputData);
                     }}
                   />
                </button>
                <Link to={AssetDetailUrl}>
                    <img src={close_icon} alt="close_icon.png"/>
                </Link>
            </div>
        </div>
        
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <div className='asset_detail_tab_row_wrap'>
                    <div className='asset_detail_tab_left_card_wrap'>
                        <div className='asset_detail_tab_header_card_wrap'>
                            <h4>Basic</h4>
                        </div>
                        <div className='asset_detail_tab_header_body_wrap'>
                            <div className='asset_detail_tab_field_row_wrap'>
                                <div className='asset_detail_tab_fields_wrap filter_form_outer_wrap'>
                                    <ul>
                                       
                                        <li>
                                            <h4>Asset Name</h4>
                                            <input type="text" placeholder='Enter Asset Name' 
                                            name="assetName"
                                            onChange={(optionSelected) => {
                                                onInputChange("assetName",optionSelected,FormInputData);
                                              }}
                                            autoFocus autoComplete="off" 
                                            value={AssetName }/>
                                        </li>
                                        <li>
                                            <h4>Asset Type</h4>
                                        <Select
                                        name="ddlAssetType"
                                        placeholder="Select"
                                        className="masterUIselect"
                                        value={AssetTypeItem} // set selected value
                                        options={AssetTypeList} // set list of the data
                                        onChange={(optionSelected) => {
                                            handleTypeSelectChange("assetTypeId",optionSelected,FormInputData);
                                          }}
                                        />


                                        </li>
                                        
                                        <li>
                                            <h4>Asset Desc</h4>
                                            <input type="text" placeholder='Enter Asset Desc' value="Dosing"/>
                                        </li>
                                        <li>
                                            <h4>Priority</h4>
                                            <Select
                                        placeholder="Select"
                                        className="masterUIselect"
                                        value={PriorityItem} // set selected value
                                        options={PriorityList} // set list of the data
                                        onChange={(optionSelected) => {
                                            handlePrioritySelectChange("assetPriorityId",optionSelected,FormInputData);
                                          }}
                                        />

                                        </li>
                                        <li>
                                            <h4>Criticality</h4>
                                            <Select
                                        placeholder="Select"
                                        className="masterUIselect"
                                        value={CriticalityItem} // set selected value
                                        options={CriticalityList} // set list of the data
                                        onChange={(optionSelected) => {
                                            handleCriticalitySelectChange("assetCriticalityId",optionSelected,FormInputData);
                                          }}
                                        />
                                        </li>
                                        <li>
                                            <h4>Parent</h4>
                                            <div className='input_with_icons'>
                                                <input type="text" placeholder='Enter Parent ID' value="Dosing-grp"/>
                                                <button type="button" className='grid_icon'>
                                                    <img src={grid_icon} alt="grid_icon"/>
                                                </button>
                                                <button type="button" className='tree_icon'>
                                                    <img src={tree_icon} alt="tree_icon"/>
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>Failure class</h4>
                                            <Select
                                        placeholder="Select"
                                        className="masterUIselect"
                                        value={FailureClassItem} // set selected value
                                        options={FailureClassList} // set list of the data
                                        onChange={(optionSelected) => {
                                            handleFailureSelectChange("failureClassesId",optionSelected,FormInputData);
                                          }}
                                        />
                                        </li>
                                        <li>
                                            <h4> Location</h4>
                                            <div className='input_with_icons'>
                                                <input type="text" placeholder='Enter Location ID' value={LocationName}/>
                                                <button type="button" className='grid_icon'>
                                                    <img src={grid_icon} alt="grid_icon"/>
                                                </button>
                                                <button type="button" className='tree_icon' onClick={NewTreetoggle}>
                                                    <img src={tree_icon} alt="tree_icon"/>
                                                </button>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>Rotating</h4>
                                            <div className='toggle_switvh_common_outer_wrap'>
                                                <span class={`toggle_label ${checked ? "inactive" : "active"}`}>In Active</span>
                                                <Switch
                                                onChange={handleChange}
                                                checked={checked}
                                                className={`react-switch ${checked ? "active" : "inactive"}`}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                />
                                                <span class={`toggle_label ${checked ? "active" : "inactive"}`}>Active</span>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>Asset category</h4>
                                            <Select
                                        placeholder="Select"
                                        className="masterUIselect"
                                        value={AssetCatgItem} // set selected value
                                        options={AssetCatgList} // set list of the data
                                        onChange={(optionSelected) => {
                                            handleCatgSelectChange("assetCategoryId",optionSelected,FormInputData);
                                          }}
                                        />
                                        </li>
                                    </ul>
                                </div>
                                <div className='asset_detail_img_wrap'>
                                    <img src={product_img} alt="product_img"/>
                                  
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className='asset_detail_tab_right_card_wrap'>
                        <div className='asset_detail_tab_header_card_wrap'>
                            <h4>Additional Info</h4>
                        </div>
                        <div className='asset_detail_tab_header_body_wrap'>
                            <div className='asset_detail_tab_field_row_wrap'>
                                <div className='asset_detail_tab_fields_wrap filter_form_outer_wrap'>
                                    <ul>
                                        <li>
                                            <h4>Serial number</h4>
                                            <input type="text" 
                                            placeholder='Enter Serial number' value={SerialNo}
                                            onChange={(optionSelected) => {
                                                onInputChange("serialNumber",optionSelected,FormInputData);
                                              }}
                                            />
                                        </li>
                                        <li>
                                            <h4>Manufacturer</h4>
                                            <input type="text" placeholder='Enter Manufacturer' value={Manufacturer}
                                                onChange={(optionSelected) => {
                                                    onInputChange("Manufacturer",optionSelected,FormInputData);
                                                  }}
                                            />
                                        </li>
                                        <li>
                                            <h4>Model</h4>
                                            <input type="text" placeholder='Enter Model' value={Model}
                                            onChange={(optionSelected) => {
                                                onInputChange("model",optionSelected,FormInputData);
                                              }}
                                            />
                                        </li>
                                        <li>
                                            <h4>YTD Cost</h4>
                                            <input type="text" placeholder='Enter YTD Cost' value={YTDCost}
                                              onChange={(optionSelected) => {
                                                onInputChange("YTDCost",optionSelected,FormInputData);
                                              }}
                                            />
                                        </li>
                                        <li>
                                            <h4>Purchase Price</h4>
                                            <input type="text" placeholder='Enter Purchase Price' value={PurchasePrice}
                                            onChange={(optionSelected) => {
                                                onInputChange("purchasePrice",optionSelected,FormInputData);
                                              }}
                                            />
                                        </li>
                                        <li>
                                            <h4>LTD Cost</h4>
                                            <input type="text" placeholder='Enter LTD Cost' value={LTDCost}
                                             onChange={(optionSelected) => {
                                                onInputChange("LTDCost",optionSelected,FormInputData);
                                              }}
                                            />
                                        </li>
                                        <li>
                                            <h4>Installation Date</h4>
                                            <div className='date_input_field_outer_wrap'>
                                                <DatePicker value={InstallationDate}
                                                
                                                onChange={(optionSelected) => {
                                                    onInputChange("installationDate",optionSelected,FormInputData);
                                                  }}
                                                />    
                                            </div>
                                        </li>
                                        <li>
                                            <h4>YTD MTBF</h4>
                                            <input type="text" placeholder='Enter YTD MTBF' value={YTDMTBF}
                                              onChange={(optionSelected) => {
                                                onInputChange("YTDMTBF",optionSelected,FormInputData);
                                              }}
                                            />
                                        </li>
                                        <li>
                                            <h4>Supplier</h4>
                                            <input type="text" placeholder='Enter Supplier' value={Supplier}
                                             onChange={(optionSelected) => {
                                                onInputChange("Supplier",optionSelected,FormInputData);
                                              }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>       
                </div>
            </TabPane>
            <TabPane tabId="2">
                <div className='asset_document_section_outer_wrap'>
                    <div className='asset_table_outer_wrap'>
                        <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                            <h1>Parts</h1>
                        </div>
                        <div className='asset_table_inner_wrap'>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <td>Part ID</td>
                                        <td>Part Name</td>
                                        <td>Qty</td>
                                    </tr>
                                </thead>

                                <tbody>

                                {AssetPartsList.map((assetPart, index) => (  
              <tr data-index={index}>  
               
            
               <td className='asset_id_col'>{assetPart.id}</td>
                <td>{assetPart.partName}</td>
                <td>2</td>

              </tr>  
            ))}   

                                
                                </tbody>
                            </Table>
                        </div>
                        <div className="pagination_outer_wrap">
                            <div className="select_per_page_outer_wrap">
                                <label>
                                    Rows per page:
                                </label>
                                <select >
                                    <option value="10" selected>10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                                <p><span>1-10</span> of <span>13</span></p>
                            </div>
                            <div className="pagination_navigation_wrap">
                                <ul>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="nextback">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="next_back_arrow">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane tabId="3">
                <div className='asset_document_section_outer_wrap'>
                    <div className='asset_table_outer_wrap'>
                        <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                            <h1>Work Orders</h1>
                        </div>
                        <div className='asset_table_inner_wrap'>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <td>WO ID</td>
                                        <td>Description</td>
                                        <td>Status ID</td>
                                        <td>Planned Start Date</td>
                                        <td>Planned End Date</td>
                                        <td>Actual Start Date</td>
                                        <td>Actual End Date</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>SPDF2021</td>
                                        <td>Racking Assemble(A144)</td>
                                        <td>JDF05242.0</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                        <td>2022-03-11</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="pagination_outer_wrap">
                            <div className="select_per_page_outer_wrap">
                                <label>
                                    Rows per page:
                                </label>
                                <select >
                                    <option value="10" selected>10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                                <p><span>1-10</span> of <span>13</span></p>
                            </div>
                            <div className="pagination_navigation_wrap">
                                <ul>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                    <li className="prev_back">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="nextback">
                                        <Link to="/">
                                            <img src={leftarrow} alt="left-arrow"/>
                                        </Link>
                                    </li>
                                    <li className="next_back_arrow">
                                        <Link to="/">
                                            <img src={back_arrow} alt="back_arrow"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane tabId="4">
                <div className={`asset_specification_outer_wrap ${tabactive ? "active" : "false"}`}>
                    <div className='asset_document_section_outer_wrap'>
                        <div className='asset_table_outer_wrap'>
                            <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                                <h1>Technical Specification</h1>
                            </div>
                            <div className='asset_table_inner_wrap'>
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <td>Technical ID</td>
                                            <td>Technical Name</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>00012631</td>
                                            <td>Motor 3</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="pagination_outer_wrap">
                                <div className="select_per_page_outer_wrap">
                                    <label>
                                        Rows per page:
                                    </label>
                                    <select >
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                    <p><span>1-10</span> of <span>13</span></p>
                                </div>
                                <div className="pagination_navigation_wrap">
                                    <ul>
                                        <li className="prev_back">
                                            <Link to="/">
                                                <img src={back_arrow} alt="back_arrow"/>
                                            </Link>
                                        </li>
                                        <li className="prev_back">
                                            <Link to="/">
                                                <img src={leftarrow} alt="left-arrow"/>
                                            </Link>
                                        </li>
                                        <li className="nextback">
                                            <Link to="/">
                                                <img src={leftarrow} alt="left-arrow"/>
                                            </Link>
                                        </li>
                                        <li className="next_back_arrow">
                                            <Link to="/">
                                                <img src={back_arrow} alt="back_arrow"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='asset_document_section_outer_wrap'>
                        <div className='asset_table_outer_wrap'>
                            <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                                <h1>Attributes</h1>
                            </div>
                            <div className='asset_table_inner_wrap'>
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <td>Attributes ID</td>
                                            <td>Attributes Name</td>
                                            <td>UOM ID</td>
                                            <td>Attribute text value</td>
                                            <td>Attribute numeric value</td>
                                            <td>Attribute date value</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>Racking Assemble(A144)</td>
                                            <td>PSD344-2.0</td>
                                            <td>Odometer</td>
                                            <td>DTF0234-12</td>
                                            <td>2022-03-11</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="pagination_outer_wrap">
                                <div className="select_per_page_outer_wrap">
                                    <label>
                                        Rows per page:
                                    </label>
                                    <select >
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                    <p><span>1-10</span> of <span>13</span></p>
                                </div>
                                <div className="pagination_navigation_wrap">
                                    <ul>
                                        <li className="prev_back">
                                            <Link to="/">
                                                <img src={back_arrow} alt="back_arrow"/>
                                            </Link>
                                        </li>
                                        <li className="prev_back">
                                            <Link to="/">
                                                <img src={leftarrow} alt="left-arrow"/>
                                            </Link>
                                        </li>
                                        <li className="nextback">
                                            <Link to="/">
                                                <img src={leftarrow} alt="left-arrow"/>
                                            </Link>
                                        </li>
                                        <li className="next_back_arrow">
                                            <Link to="/">
                                                <img src={back_arrow} alt="back_arrow"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
        </TabContent>

        {/* Tree popup */}
        <Modal isOpen={NewTreeModel} toggle={NewTreetoggle} className="filter_popup_outer_wrap">
              <ModalBody>
                <div className='popup_filter_header_outer_wrap'>
                  <h4>Filter</h4>
                  <p className='close_popup' onClick={NewTreetoggle}>&#10006;</p>
                </div>
                <div className='Tree_structure_menu_wrap'>
                    <TreeFilter id="#trLocation" TreeType="location" 
                    onCancel={closeLocationTreeView}
                    />
                </div>
               
              </ModalBody>
          </Modal>
    </div>
    
  );
}