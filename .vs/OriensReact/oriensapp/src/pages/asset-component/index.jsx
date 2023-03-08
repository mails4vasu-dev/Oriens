import React,{useState} from 'react';
import search_icon from '../../assets/images/search.png';
import filter_icon from '../../assets/images/filter.png';
import export_icon from '../../assets/images/export.png';
import grid_icon from '../../assets/images/tabel_input_ico.png';
import tree_icon from '../../assets/images/tree_input_ico.png';
import './assets-component.css';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,   Modal, 
   ModalBody } from 'reactstrap';
import AssetsTable from './asset-table.js';
import Switch from "react-switch";

export default function AssetsComponent() {
  const [modal, setModal] = React.useState(false);
  const [NewAssetmodal, setNewAssetmodal] = React.useState(false);

  const toggle = () => setModal(!modal);
  const NewAssettoggle = () => setNewAssetmodal(!NewAssetmodal);

  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

   return (
     <>
        <div className='page_content_outer_wrap'>
          <div className='page_title_outer_wrap'>
            <h1>Assets: All Assets</h1>
          </div>
          <div className='assets_filter_outer_wrap'>
            <div className='filter_top_setting_wrap'>
              <div className='filter_top_left_setting_wrap'>
                <div className='filter_input_wrap input_common_border'>
                  <input type="text" placeholder='Asset #'/>
                </div>
                <div className='filter_input_wrap input_common_border'>
                  <input type="text" placeholder='Asset name'/>
                </div>
                <div className='search_filter_input_wrap  input_common_border'>
                  <input type="text" placeholder='Asset name'/>
                  <button type="button" className='search_icon_btn_wrap blue_button_wrap'>
                    <img src={search_icon} alt="search_icon"/>
                  </button>
                </div>
                <div className='filter_dropdown_wrap filter_arrow' onClick={toggle}>
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
            {/* Second Filter */}
            <div className='filter_bottom_setting_wrap'>
              <div className='filter_top_left_setting_wrap'>
                <button type='button' className='new_assets_btn_wrap blue_button_wrap' onClick={NewAssettoggle}><span>+</span> New Asset</button>
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
            {/* End Second filter */}
            {/* Asset Table */}
            <AssetsTable />
            {/* End Asset Table */}
          </div>
          {/* Filter Popup */}
          <Modal isOpen={modal} toggle={toggle} className="filter_popup_outer_wrap">
              <ModalBody>
                  <div className='popup_filter_header_outer_wrap'>
                    <h4>More Filter</h4>
                    <p className='close_popup' onClick={toggle}>&#10006;</p>
                  </div>
                  <div className='filter_form_outer_wrap'>
                    <ul>
                      <li>
                        <label>Asset Key</label>
                        <select>
                          <option>Search by asset name / #</option>
                        </select>
                      </li>
                      <li>
                        <label>Team</label>
                        <select>
                          <option>Search by Team name</option>
                        </select>
                      </li>
                      <li>
                        <label>Category</label>
                        <select>
                          <option>Search by Category name</option>
                        </select>
                      </li>
                      <li>
                        <label>Part</label>
                        <select>
                          <option>RO1_PMP_AMPSA/1/PV</option>
                        </select>
                      </li>
                      <li>
                        <label>File</label>
                        <select>
                          <option>RO1_PMP_AMPSA/1/PV</option>
                        </select>
                      </li>
                      <li>
                        <label>Status</label>
                        <select>
                          <option>RO1_PMP_AMPSA/1/PV</option>
                        </select>
                      </li>
                      <li>
                        <label>Created By</label>
                        <select>
                          <option>Search by Person</option>
                        </select>
                      </li>
                      <li>
                        <label>Completed By</label>
                        <select>
                          <option>Search by Person</option>
                        </select>
                      </li>
                      <li className='filter_last_full_width'>
                        <select>
                          <option>Saved Filters</option>
                          <option>Team</option>
                          <option>Contact</option>
                          <option>Part Number</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  <div className='more_filter_footer_wrap'>
                    <a href="/#" className='search_btn_wrap'>Search</a>
                    <button type="button" className='save_filter'>+ Save Filter</button>
                  </div>
              </ModalBody>
          </Modal>

          {/* New Asset Create Popup Design */}
          <Modal isOpen={NewAssetmodal} toggle={NewAssettoggle} className="filter_popup_outer_wrap">
              <ModalBody>
                <div className='popup_filter_header_outer_wrap'>
                  <h4>NEW ASSET</h4>
                  <p className='close_popup' onClick={NewAssettoggle}>&#10006;</p>
                </div>
                <div className='filter_form_outer_wrap'>
                  <ul>
                    <li>
                      <label>Asset ID</label>
                      <input type="text" placeholder='Enter Asset ID'/>
                    </li>
                    <li>
                      <label>Asset Type ID</label>
                      <select>
                        <option selected>--</option>
                      </select>
                    </li>
                    <li>
                      <label>Asset Name</label>
                      <input type="text" placeholder='Enter Asset Name'/>
                    </li>
                    <li>
                      <label>Priority ID</label>
                      <select>
                        <option selected>--</option>
                      </select>
                    </li>
                    <li>
                      <label>Asset Desc</label>
                      <input type="text" placeholder='Enter Asset Desc'/>
                    </li>
                    <li>
                      <label>Criticality ID</label>
                      <select>
                        <option selected>--</option>
                      </select>
                    </li>
                    <li>
                      <label>Parent ID</label>
                      <div className='input_with_icons'>
                        <input type="text" placeholder='Enter Parent ID'/>
                        <button type="button" className='grid_icon'>
                          <img src={grid_icon} alt="grid_icon"/>
                        </button>
                        <button type="button" className='tree_icon'>
                          <img src={tree_icon} alt="tree_icon"/>
                        </button>
                      </div>
                    </li>
                    <li>
                      <label>Failure class ID</label>
                      <select>
                        <option selected>--</option>
                      </select>
                    </li>
                    <li>
                      <label>Location ID</label>
                      <div className='input_with_icons'>
                        <input type="text" placeholder='Enter Location ID'/>
                        <button type="button" className='grid_icon'>
                          <img src={grid_icon} alt="grid_icon"/>
                        </button>
                        <button type="button" className='tree_icon'>
                          <img src={tree_icon} alt="tree_icon"/>
                        </button>
                      </div>
                    </li>
                    <li>
                      <label>Rotating</label>
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
                      <label>Asset Category ID</label>
                      <select>
                        <option selected>--</option>
                      </select>
                    </li>
                    <li className='filter_last_full_width'>
                      <select>
                        <option>ADDITIONAL INFO</option>
                        <option>Team</option>
                        <option>Contact</option>
                        <option>Part Number</option>
                      </select>
                    </li>
                  </ul>
                </div>
                <div className='more_filter_footer_wrap'>
                  <a href={void(0)} className='search_btn_wrap' onClick={NewAssettoggle} >Cancel</a>
                  <button type="button" className='save_filter'>Create Asset</button>
                </div>
              </ModalBody>
          </Modal>
        </div>
     </>
    )
}


