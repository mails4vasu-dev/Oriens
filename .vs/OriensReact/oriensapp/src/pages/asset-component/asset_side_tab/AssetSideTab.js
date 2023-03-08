import React, { useState } from 'react';
import '../assets-component.css';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import doc_ico from '../../../assets/images/asset_icon/doc_ico.png';
import changests_ico  from '../../../assets/images/asset_icon/changests_ico.png';
import assignedto_ico from '../../../assets/images/asset_icon/assignedto_ico.png';
import meter_ico from '../../../assets/images/asset_icon/meter_ico.png';
import warenty_ico from '../../../assets/images/asset_icon/warenty_ico.png';
import transfer_ico from '../../../assets/images/asset_icon/transfer_ico.png';
import log_ico from '../../../assets/images/asset_icon/log_ico.png';
import { Table } from 'reactstrap';
import leftarrow from '../../../assets/images/left-arrow.png';
import back_arrow from '../../../assets/images/back_arrow.png';
import { Link } from 'react-router-dom';
import { Configuration } from "../../../config/index";
const BASE_URL = (url) => Configuration.BASE_URL + url;
export default function AssetSideTab({tabactive, settabactive}) {
  const [sideactiveTab, setSideactiveTab] = useState('0');
  const MetersUrl=BASE_URL('/meter/getall');
  const [MetersList, setMeter]= useState([]);
//   console.log(tabactive);
  if(sideactiveTab === '1'){
    tabactive= true;
    settabactive(true);
    console.log(tabactive);
  }
  else if(sideactiveTab === '2'){
    tabactive= true;
    settabactive(true);
    console.log(tabactive);
  }else if(sideactiveTab === '3'){
    tabactive= true;
    settabactive(true);
    console.log(tabactive);
  }
  else if(sideactiveTab === '4'){
    tabactive= true;
    settabactive(true);
    console.log(tabactive);
  }else if(sideactiveTab === '5'){
    tabactive= true;
    settabactive(true);
    console.log(tabactive);
  }else if(sideactiveTab === '6'){
    tabactive= true;
    settabactive(true);
    console.log(tabactive);
  }else if(sideactiveTab === '7'){
    tabactive= true;
    settabactive(true);
    console.log(tabactive);
  }else{
    tabactive= false;
    settabactive(false);
    console.log(tabactive);
  }
  fetch(MetersUrl)
  .then(res => {
      if (res.status >= 400) {
          throw new Error("Server responds with error!")
      }
      return res.json()
  })
  .then(data => {
    console.log(data.result);
      setMeter(data.result);
  },
    err => {
         
      })
  return (
    <div className='asset_side_tabs_outer_wrap'>
        <div className='asset_side_nav_wrap'>
            <Nav tabs>
                <NavItem>
                    <NavLink className={sideactiveTab === '1' ? 'active' : ''} onClick={() => setSideactiveTab('1')}>
                        <img src={doc_ico} alt="doc_ico" />
                        <p>Doc</p> 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={sideactiveTab ==='2' ? 'active' : ''} onClick={() => setSideactiveTab('2')}>
                        <img src={changests_ico} alt="changests_ico" />
                        <p>Change<br></br>Status</p> 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={sideactiveTab === '3' ? 'active' : ''} onClick={() => setSideactiveTab('3')}>
                        <img src={assignedto_ico} alt="assignedto_ico" />
                        <p>Assigned<br></br>To</p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={sideactiveTab === '4' ? 'active' : ''} onClick={() => setSideactiveTab('4')}>
                        <img src={meter_ico} alt="meter_ico" />
                        <p>Meter</p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={sideactiveTab === '5' ? 'active' : ''} onClick={() => setSideactiveTab('5')}>
                        <img src={warenty_ico} alt="warenty_ico" />
                        <p>Warranty</p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={sideactiveTab === '6' ? 'active' : ''} onClick={() => setSideactiveTab('6')}>
                        <img src={transfer_ico} alt="transfer_ico" />
                        <p>Transfer</p>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={sideactiveTab === '7' ? 'active' : ''} onClick={() => setSideactiveTab('7')}>
                        <img src={log_ico} alt="log_ico" />
                        <p>Log</p>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        
        <TabContent activeTab={sideactiveTab}>
            <TabPane tabId="1">
                <div className='asset_document_section_outer_wrap'>
                    <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                        <h1>Documents</h1>
                    </div>
                    <div className='asset_table_outer_wrap'>
                        <div className='asset_table_inner_wrap'>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <td>Doc ID</td>
                                        <td>Doc Name</td>
                                        <td>Doc Type</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className='asset_id_col'>PSD344-2.0</td>
                                        <td>SoftTech</td>
                                        <td>2</td>
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
            <TabPane tabId="2">
                <div className='change_status_form_outer_wrap'>
                    <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                        <h1>Change Status</h1>
                        <div className='asset_edit_icon_outer_wrap'>
                            <Link to="/">
                                {/* <img src={edit_icon} alt="edit_icon.png"/> */}
                            </Link>
                        </div>
                    </div>
                    <div className='change_detail_content_wrap'>
                        <div className='change_detail_inner_title_wrap'>
                            <h4>Details</h4>
                        </div>
                        <form className='change_status_form_outer_wrap'>
                            <div className='input_common_border'>
                                <label>
                                    Asset ID
                                </label>
                                <input type="text" placeholder="--" />
                            </div>
                            <div className='input_common_border'>
                                <label>
                                    Asset Name
                                </label>
                                <input type="text" placeholder="--" />
                            </div>
                            <div className='input_common_border'>
                                <label>
                                    Status
                                </label>
                                <select>
                                    <option selected>--</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </TabPane>
            <TabPane tabId="3">
                <div className='change_status_form_outer_wrap'>
                    <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                        <h1>Assigned To</h1>
                        <div className='asset_edit_icon_outer_wrap'>
                            <Link to="/">
                                {/* <img src={edit_icon} alt="edit_icon.png"/> */}
                            </Link>
                        </div>
                    </div>
                    <div className='change_detail_content_wrap'>
                        <div className='change_detail_inner_title_wrap'>
                            <h4>Details</h4>
                        </div>
                        <form className='change_status_form_outer_wrap two_col'>
                            <div className='input_common_border'>
                                <label>
                                    Owner ID
                                </label>
                                <select>
                                    <option selected>RO1_PMP</option>
                                    <option>RO1_PMP</option>
                                    <option>RO1_PMP</option>
                                </select>
                            </div>
                            <div className='input_common_border'>
                                <label>
                                    Production Responsible ID
                                </label>
                                <select>
                                <option selected>--</option>
                                    <option>Ruswili</option>
                                    <option>Pravin</option>
                                    <option>Mage</option>
                                </select>
                            </div>
                            <div className='input_common_border'>
                                <label>
                                    Maintenance Responsible ID
                                </label>
                                <select>
                                    <option selected>--</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </TabPane>
            <TabPane tabId="4">
                <div className='change_status_form_outer_wrap'>
                    <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                        <h1>Meter</h1>
                    </div>
                    <div className='asset_document_section_outer_wrap'>
                        <div className='asset_table_outer_wrap'>
                            <div className="asset_detail_tab_header_card_wrap">
                                <h4>Meter Group</h4>
                            </div>
                            <div className='asset_table_inner_wrap'>
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <td>Meter group ID</td>
                                            <td>Meter group Name</td>
                                        </tr>
                                    </thead>


                                    <tbody>

{MetersList.map((meterItem, index) => (  
<tr data-index={index}>  
<td className='asset_id_col'>{meterItem.meterGroupId}</td>
<td>{meterItem.meterName}</td>


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
                    <div className='asset_document_section_outer_wrap'>
                        <div className='asset_table_outer_wrap'>
                            <div className="asset_detail_tab_header_card_wrap">
                                <h4>Meters</h4>
                            </div>
                            <div className='asset_table_inner_wrap'>
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <td>Meter ID</td>
                                            <td>Meter Name</td>
                                            <td>Meter Type</td>
                                            <td>UOM ID</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>SPDF2021</td>
                                            <td>PSD344-2.0</td>
                                            <td>SoftTech</td>
                                            <td>PD28574857</td>
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
            <TabPane tabId="5">Tab 5 Content</TabPane>
            <TabPane tabId="6">Tab 6 Content</TabPane>
            <TabPane tabId="7">
                <div className='change_status_form_outer_wrap'>
                    <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                        <h1>Log</h1>
                    </div>
                    <div className='asset_document_section_outer_wrap'>
                        <div className='asset_table_outer_wrap'>
                            <div className="asset_detail_tab_header_card_wrap">
                                <h4>Activity Log</h4>
                            </div>
                            <div className='asset_table_inner_wrap'>
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <td>Date</td>
                                            <td>Log Type</td>
                                            <td>User ID</td>
                                            <td>Detail</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
                                        </tr>
                                        <tr>
                                            <td className='asset_id_col'>22-10-2022</td>
                                            <td>Packer</td>
                                            <td>Motor3</td>
                                            <td>--</td>
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
    </div>
  );
}