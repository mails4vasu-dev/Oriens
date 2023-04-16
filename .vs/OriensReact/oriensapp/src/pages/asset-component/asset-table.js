import React, { useState } from "react";
import './assets-component.css';
import { Table } from 'reactstrap';
import Checkbox from "../../Component/Checkbox.js";
import leftarrow from '../../assets/images/left-arrow.png';
import back_arrow from '../../assets/images/back_arrow.png';
import { Link } from "react-router-dom";
import { Configuration } from "../../config/index";
export default function AssetsTable() {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [RowCount, setRowCount] = useState([]);
    const BASE_URL = (url) => Configuration.BASE_URL + url;
    const url=BASE_URL('/assets/getall');
    const [assetList, setassetList] = React.useState([]);
    const [assetPage, setassetPageData] = React.useState([]);
    const [TotalPages, setTotalPages] = React.useState([]);
    //const [setIsCheck] = useState([]);
    //let assetList;   
    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        // setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };
    
    const handleClick = e => {
        const { checked } = e.target;
        setIsCheck([...isCheck]);
        if (!checked) {
            setIsCheck(isCheck);
        }
    };

function nextPage(){
    console.log("splice");
    setRowCount(assetList.length);
    if(assetList.length<10){
        setTotalPages(assetList.length);
    }
    else{
        setTotalPages(10);
    }
    //console.log(assetList.length);
    setassetPageData(assetList.splice(0,5));
   // console.log(assetList.splice(0,5));
}
const fetchassetList= async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setassetList(data.result);
      nextPage();
    } catch (error) {
      console.log(error);
    }
  };
fetchassetList();
   return (
     <>
        <div className='asset_table_outer_wrap'>
            <div className='asset_table_inner_wrap'>
                <Table hover responsive>
                    <thead>
                        <tr>
                            <td>
                                <Checkbox
                                    type="checkbox"
                                    name="selectAll"
                                    id="selectAll"
                                    handleClick={handleSelectAll}
                                    isChecked={isCheckAll}
                                />
                            </td>
                            <td>Asset ID</td>
                            <td>Asset Name</td>
                            <td>Site Name</td>
                            <td>Asset Status</td>
                            <td>Asset Category Name</td>
                            <td>Asset Type Name</td>
                            <td>Priority</td>
                            <td>Criticality</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>

  {assetPage.map((asset, index) => (  
              <tr data-index={index}>  
               <td>
                                <Checkbox
                                    type="checkbox"
                                    name="check_1"
                                    id="10"
                                    handleClick={handleClick}
                                    isChecked={isCheck}
                                />
                            </td>
               <td>{asset.id}</td>   
                 <td>{asset.assetName}</td>
                <td>{asset.startingUsage}</td>  
                <td>{asset.statusName}</td>  
                <td>{asset.categoryName}</td>  
                <td>{asset.assetTypeName}</td>  
                <td>{asset.priorityName}</td>  
                <td>{asset.criticalityName}</td>  
                <td class="action_icon_outer_wrap">
                    <button type="button" className="edit_icon">
                        <svg   width="512" height="512" x="0" y="0" viewBox="0 0 401.523 401"  class="">
                            <g>
                                <path d="M370.59 250.973c-5.524 0-10 4.476-10 10v88.789c-.02 16.562-13.438 29.984-30 30H50c-16.563-.016-29.98-13.438-30-30V89.172c.02-16.559 13.438-29.98 30-30h88.79c5.523 0 10-4.477 10-10 0-5.52-4.477-10-10-10H50c-27.602.031-49.969 22.398-50 50v260.594c.031 27.601 22.398 49.968 50 50h280.59c27.601-.032 49.969-22.399 50-50v-88.793c0-5.524-4.477-10-10-10zm0 0" fill="#000000" data-original="#000000" class=""></path>
                                <path d="M376.629 13.441c-17.574-17.574-46.067-17.574-63.64 0L134.581 191.848a9.997 9.997 0 0 0-2.566 4.402l-23.461 84.7a9.997 9.997 0 0 0 12.304 12.308l84.7-23.465a9.997 9.997 0 0 0 4.402-2.566l178.402-178.41c17.547-17.587 17.547-46.055 0-63.641zM156.37 198.348 302.383 52.332l47.09 47.09-146.016 146.016zm-9.406 18.875 37.62 37.625-52.038 14.418zM374.223 74.676 363.617 85.28l-47.094-47.094 10.61-10.605c9.762-9.762 25.59-9.762 35.351 0l11.739 11.734c9.746 9.774 9.746 25.59 0 35.36zm0 0" fill="#000000" data-original="#000000" class=""></path>
                            </g>
                        </svg>
                    </button>
                    <button type="button" className="edit_icon delete_icon">
                        <svg  width="512" height="512" x="0" y="0" viewBox="0 0 512 512"  class="">
                            <g>
                                <path d="M424 64h-88V48c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16H88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283C87.788 491.919 108.848 512 134.512 512h242.976c25.665 0 46.725-20.081 47.945-45.717L439.256 176H448c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zM208 48c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zM80 104c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40H80zm313.469 360.761A15.98 15.98 0 0 1 377.488 480H134.512a15.98 15.98 0 0 1-15.981-15.239L104.78 176h302.44z" fill="#000000" data-original="#000000" class=""></path>
                                <path d="M256 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16zM336 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16zM176 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" fill="#000000" data-original="#000000" class=""></path>
                            </g>
                        </svg>
                    </button>
                </td>
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
                    <p><span>1-{TotalPages}</span> of <span>{RowCount}</span></p>
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
                            <Link to="/" onClick={nextPage}>
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
     </>
    )
}


