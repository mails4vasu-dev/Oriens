import React, { useState } from 'react';
import '../assets-component.css';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import product_img from '../../../assets/images/product.png';
import edit_icon from '../../../assets/images/edit_icon.png';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import leftarrow from '../../../assets/images/left-arrow.png';
import back_arrow from '../../../assets/images/back_arrow.png';
import { Configuration } from "../../../config/index";

export default function AssetDetailTab({tabactive}) {
  const [activeTab, setActiveTab] = useState('1');
  const BASE_URL = (url) => Configuration.BASE_URL + url;
  const AssetItemUrl=BASE_URL('/assets/getbyid/4eeb1bfb-7f84-4bd2-94f7-6f51f9d3c770');
  const AssetPartsUrl=BASE_URL('/assetparts/partsbyassetid/4eeb1bfb-7f84-4bd2-94f7-6f51f9d3c770');
 
   const [AssetItem, setAssetItem]= useState('1');
   const [AssetPartsList, setAssetParts]= useState([]);

    fetch(AssetItemUrl)
    .then(res => {
        if (res.status >= 400) {
            throw new Error("Server responds with error!")
        }
        return res.json()
    })
    .then(data => {
        setAssetItem(data.result);
    },
      err => {
           
        })


        fetch(AssetPartsUrl)
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Server responds with error!")
            }
            return res.json()
        })
        .then(data => {
            setAssetParts(data.result);
            console.log(data.result);
        },
          err => {
               
            })

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
                <Link to="/">
                    <img src={edit_icon} alt="edit_icon.png"/>
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
                                <div className='asset_detail_tab_fields_wrap'>
                                    <ul>
                                        <li>
                                            <h4>Asset ID</h4>
                                            <h5>{AssetItem.id }</h5>
                                        </li>
                                        <li>
                                            <h4>Asset Type ID</h4>
                                            <h5>{AssetItem.assetTypeId }</h5>
                                        </li>
                                        <li>
                                            <h4>Asset Name</h4>
                                            <h5>{AssetItem.assetName }</h5>
                                        </li>
                                        <li>
                                            <h4>Priority ID</h4>
                                            <h5>{AssetItem.assetPriorityID }</h5>
                                        </li>
                                        <li>
                                            <h4>Asset Desc</h4>
                                            <h5>{AssetItem.assetPriorityID }</h5>
                                        </li>
                                        <li>
                                            <h4>Criticality ID</h4>
                                            <h5>{AssetItem.failureClassesId }</h5>
                                        </li>
                                        <li>
                                            <h4>Parent ID</h4>
                                            <h5>{AssetItem.assetPriorityID }</h5>
                                        </li>
                                        <li>
                                            <h4>Failure class ID</h4>
                                            <h5>{AssetItem.failureClassesId }</h5>
                                        </li>
                                        <li>
                                            <h4>Location ID</h4>
                                            <h5>{AssetItem.locationName }</h5>
                                        </li>
                                        <li>
                                            <h4>Rotating</h4>
                                            <h5>{AssetItem.assetPriorityID }</h5>
                                        </li>
                                        <li>
                                            <h4>Asset category ID</h4>
                                            <h5>{AssetItem.assetCategoryId }</h5>
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
                                <div className='asset_detail_tab_fields_wrap'>
                                    <ul>
                                        <li>
                                            <h4>Serial number</h4>
                                            <h5>{AssetItem.serialNumber }</h5>
                                        </li>
                                        <li>
                                            <h4>Manufacturer</h4>
                                            <h5>{AssetItem.assetCategoryId }</h5>
                                        </li>
                                        <li>
                                            <h4>Model</h4>
                                            <h5>{AssetItem.model }</h5>
                                        </li>
                                        <li>
                                            <h4>YTD Cost</h4>
                                            <h5>{AssetItem.assetCategoryId }</h5>
                                        </li>
                                        <li>
                                            <h4>Purchase Price</h4>
                                            <h5>{AssetItem.purchasePrice }</h5>
                                        </li>
                                        <li>
                                            <h4>LTD Cost</h4>
                                            <h5>{AssetItem.assetCategoryId }</h5>
                                        </li>
                                        <li>
                                            <h4>Installation Date</h4>
                                            <h5>{AssetItem.installationDate }</h5>
                                        </li>
                                        <li>
                                            <h4>YTD MTBF</h4>
                                            <h5>{AssetItem.assetCategoryId }</h5>
                                        </li>
                                        <li>
                                            <h4>Supplier</h4>
                                            <h5>{AssetItem.assetCategoryId }</h5>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className='asset_detail_img_wrap'>
                                    <img src={product_img} alt="product_img"/>
                                </div> */}
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
    </div>
  );
}