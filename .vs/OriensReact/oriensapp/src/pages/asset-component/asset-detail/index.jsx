import React, { useState } from 'react';
import '../assets-component.css';
import AssetDetailTab from '../asset_tabs/AssetDetailTab.js';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AssetSideTab from '../asset_side_tab/AssetSideTab.js';

export default function AssetsDetail({tabactive}) {
  const [sidesplit, setSidesplit] = useState(false);
  
   return (
     <>
        <div className='page_content_outer_wrap'>
          <div className={`asset_detail_section_outer_wrap ${sidesplit ? "active" : "false"}`}>
            <div className='assets_deatil_main_outer_wrap'>
              <div className='page_title_outer_wrap assets_detail_title_outer_wrap'>
                <h1>Assets#: 54371: Dosing</h1>
                <div className='assets_detail_active_wrap'>
                  <h4 className='asset_active'>Active</h4>
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
              <div className='assets_tab_section_wrap'>
                <AssetDetailTab/>
              </div>
            </div>
            <div className='assets_deatil_side_section_outer_wrap'>
              <AssetSideTab tabactive={sidesplit} settabactive={setSidesplit}/>
            </div>
          </div>
        </div>
     </>
    )
}


