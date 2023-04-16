import { React,useEffect,useState } from "react";
import { Configuration } from "../../config/index";
import { Table } from 'reactstrap';
import Checkbox from "../../Component/Checkbox.js";
import leftarrow from '../../assets/images/left-arrow.png';
import back_arrow from '../../assets/images/back_arrow.png';
import { Link } from "react-router-dom";
import '../asset-component/assets-component.css';
import { Modal,ModalBody } from 'reactstrap';
function DynamicTable({headerList, onEdit, onDelete,masterName,contentInPopUp
,showInWindow,onCancel}){
  //const [GetAPIList, setGetAPIList] = useState(data);
  const [pageNumber, setpageNumber] = useState(1);
  
  const [assetPage, setassetPageData] = useState([]);
  var getApi = require('./masterGetAPI.json');
  const BASE_URL = (url) => Configuration.BASE_URL + url;
  getApi = getApi.filter(a => a.masterName == masterName);
  const AssetCatgUrl=BASE_URL(getApi[0].apiURL); 
  //const [MasterDataList, setMasterDataList] = useState([]);
  const [MasterDataList, setMasterDataList] = useState([]);
  const [RowCount, setRowCount] = useState([]);
  const [TotalPages, setTotalPages] = useState([]);
  //const [HTMLHeaderList, setHTMLHeaderList] = useState([headerList]);
  //setheaderList(headerList);
  const [MasterKeyList, setMasterKeyList] = useState([]);
  const [MasterPageData, setMasterPageData] = useState([]);

  const TableListData =()=>{
   if(MasterPageData==null || MasterPageData.length==0 || pageNumber==1){
    fetch(AssetCatgUrl)
    .then(response => response.json())
    .then(data => {
      setMasterDataList(data.result);
      var rowList=data.result;
      var pageData=[];
      var iRowLength=rowList.length < 10 ? rowList.length-1:9;
      for(var iRowIndex=0;iRowIndex<=iRowLength;iRowIndex++){
          pageData.push(rowList[iRowIndex]);
      }
      setMasterPageData(pageData);
      //return data.result;
      return MasterPageData;
    });
   }
    
  }


 // get table heading data
 const ThData =()=>{
  
  
  let objData=TableListData();
    if(MasterDataList != null && MasterDataList.length >0){
      
   return Object.keys(headerList).map((data)=>{
    var currHeader=headerList[data].jsonHeader;
    var colHeader=headerList.filter(a => a.jsonHeader == data);
     if(MasterDataList[0][currHeader] !=null && 
      headerList[data].visible!="false"){
     return <td key={data}>{headerList[data].htmlHeader}</td>
     }
 }
 
)
    }
    
 }

// get table row data
const tdData =() =>{
  
  //let objData=TableListData();
  if(MasterDataList != null && MasterDataList.length >0){
    return MasterDataList.map((data)=>{
      return(
          <tr>
            <td className="wd2px">
                                <Checkbox
                                    type="checkbox"
                                    name="selectAll"
                                    id="selectAll"
                                   
                                />
                            </td>
               {




                  Object.keys(headerList).map((v)=>{
        
                      var colCell=headerList[v];
                      var cellValue=data[colCell.jsonHeader];
                      var pageRedirect="assets_detail?AssetId=" + data["id"];
                    if(colCell.visible!="false" && colCell.controlType!="hidden" ){

                      if(colCell.controlType=="link"){
                        return <td>
                        <div></div>
                        <div>
                          <a href={pageRedirect} >{cellValue}</a>
                        </div>
                        </td>
                      }
                      else{
                        return <td>
                      <div></div>
                      <div>
                        {cellValue}
                      </div>
                      </td>
                      }
                    }
        
                  })
               }
               <td class="action_icon_outer_wrap"> 
               <button type="button" className="edit_icon" onClick={() => onEdit(data)}>
                        <svg   width="512" height="512" x="0" y="0" viewBox="0 0 401.523 401"  class="">
                            <g>
                                <path d="M370.59 250.973c-5.524 0-10 4.476-10 10v88.789c-.02 16.562-13.438 29.984-30 30H50c-16.563-.016-29.98-13.438-30-30V89.172c.02-16.559 13.438-29.98 30-30h88.79c5.523 0 10-4.477 10-10 0-5.52-4.477-10-10-10H50c-27.602.031-49.969 22.398-50 50v260.594c.031 27.601 22.398 49.968 50 50h280.59c27.601-.032 49.969-22.399 50-50v-88.793c0-5.524-4.477-10-10-10zm0 0" fill="#000000" data-original="#000000" class=""></path>
                                <path d="M376.629 13.441c-17.574-17.574-46.067-17.574-63.64 0L134.581 191.848a9.997 9.997 0 0 0-2.566 4.402l-23.461 84.7a9.997 9.997 0 0 0 12.304 12.308l84.7-23.465a9.997 9.997 0 0 0 4.402-2.566l178.402-178.41c17.547-17.587 17.547-46.055 0-63.641zM156.37 198.348 302.383 52.332l47.09 47.09-146.016 146.016zm-9.406 18.875 37.62 37.625-52.038 14.418zM374.223 74.676 363.617 85.28l-47.094-47.094 10.61-10.605c9.762-9.762 25.59-9.762 35.351 0l11.739 11.734c9.746 9.774 9.746 25.59 0 35.36zm0 0" fill="#000000" data-original="#000000" class=""></path>
                            </g>
                        </svg>
                    </button>
                    <button type="button" className="edit_icon delete_icon" 
                    onClick={() => onDelete(data)}>
                        <svg  width="512" height="512" x="0" y="0" viewBox="0 0 512 512"  class="">
                            <g>
                                <path d="M424 64h-88V48c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16H88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283C87.788 491.919 108.848 512 134.512 512h242.976c25.665 0 46.725-20.081 47.945-45.717L439.256 176H448c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zM208 48c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zM80 104c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40H80zm313.469 360.761A15.98 15.98 0 0 1 377.488 480H134.512a15.98 15.98 0 0 1-15.981-15.239L104.78 176h302.44z" fill="#000000" data-original="#000000" class=""></path>
                                <path d="M256 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16zM336 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16zM176 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" fill="#000000" data-original="#000000" class=""></path>
                            </g>
                        </svg>
                    </button>
                
              </td>
          </tr>
      )
    })

  }
    
}


const tdCommands =() =>{
  
  return(
    <td>
   <button onClick={() => onEdit()}>Edit</button>
      <button onClick={() => onDelete()}>Delete</button>
    </td>
 )
    
}

const nextPage =() => {
  setpageNumber(pageNumber+1);

  setRowCount(MasterDataList.length);
  if(MasterDataList.length<10){
      setTotalPages(MasterDataList.length);
  }
  else{
      setTotalPages(MasterDataList.length/10);
  }
  var iRowCount=MasterDataList.length-1;
  var upperBound=(10*(pageNumber+1))-1;
  var lowerBound=upperBound-9;
  upperBound=(upperBound>iRowCount?iRowCount:upperBound);
  lowerBound=(lowerBound>iRowCount?iRowCount:lowerBound);
  //upperBound=upperBound>=MasterDataList.length?(MasterDataList.length)-1:(10*(pageNumber+1))-1;
  //lowerBound=lowerBound>=MasterDataList.length?(MasterDataList.length)-1:(upperBound-9);
  var pageData=[];
  for(var iRowIndex=lowerBound;iRowIndex<=upperBound;iRowIndex++){
      pageData.push(MasterDataList[iRowIndex]);
  }
  setMasterPageData(pageData);

}
const closePopUp = () => {
  onCancel();
}
const previousPage =() => { 
  setpageNumber(pageNumber-1);

  setRowCount(MasterDataList.length);
  if(MasterDataList.length<10){
      setTotalPages(MasterDataList.length);
  }
  else{
      setTotalPages(MasterDataList.length/10);
  }
  var upperBound=(10*(pageNumber-1))-1;
  var lowerBound=upperBound-9;
  upperBound=upperBound>=MasterDataList.length?(MasterDataList.length)-1:(10*(pageNumber-1))-1;
  lowerBound=lowerBound>=MasterDataList.length?(MasterDataList.length)-1:(upperBound-9);
  var pageData=[];
  for(var iRowIndex=lowerBound;iRowIndex<=upperBound;iRowIndex++){
      pageData.push(MasterDataList[iRowIndex]);
  }
  setMasterPageData(pageData);
 }
 const getPageContent =() =>{
    return <div className='asset_table_outer_wrap'>
          

    <div className='asset_table_inner_wrap'>
    <Table hover responsive>
  <thead>
  <tr>
      <td className="wd2px">
                                <Checkbox
                                    type="checkbox"
                                    name="selectAll"
                                    id="selectAll"
                                   
                                />
                            </td>
    {ThData()}
  <td>Action</td></tr>
  </thead>
  <tbody>
  
    {tdData()}
    
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
                          <button className="pageButton">
                              <img src={back_arrow} alt="back_arrow" className="pagination_navigation_img"/>
                          </button>
                      </li>
                      <li className="prev_back">
                          <button className="pageButton" onClick={previousPage}>
                              <img src={leftarrow} alt="left-arrow" 
                              className="pagination_navigation_img"/>
                          </button>
                      </li>
                      <li className="nextback">
                          <button className="pageButton" onClick={nextPage}>
                              <img src={leftarrow} alt="left-arrow" 
                              className="pagination_navigation_img"/>
                          </button>
                      </li>
                      <li className="next_back_arrow">
                          <button className="pageButton">
                            <img src={back_arrow} alt="back_arrow" 
                            className="pagination_navigation_img"/>
                            </button>
                      </li>
                  </ul>
              </div>
          </div>
   
</div>


 }
  return (
    contentInPopUp? 
    <Modal isOpen={true} toggle={true} className="masterPopUp">
    <ModalBody className="masterPopUpBody">
    <div>
          <h4>{'New '+masterName}</h4>
          <p className='close_popup' onClick={closePopUp}>&#10006;</p>
        </div>
    {getPageContent()}
    </ModalBody>
  </Modal>
  :showInWindow?getPageContent():null
    

  )
}
export default DynamicTable;