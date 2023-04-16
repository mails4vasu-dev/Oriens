import React from "react";
import { Route, Routes } from 'react-router-dom';
import DashBoardComponent from '../pages/dashboard';
import AssetsComponent from '../pages/asset-component';
import MastersComponent from '../pages/masters';
import Header from '../layout/Header';
import SidebarComponent from '../layout/Sidebar';
import AssetsDetail from '../pages/asset-component/asset-detail'
import AssetsDetailEdit from '../pages/asset-component/asset_detail_edit'
import { useLocation } from 'react-router-dom';
const MainRouter = () => {
    const location = useLocation();
    
    return (
        <>
            <div className='layout_outer_wrap'>
                <Header />
                <div className='main_content_outer_wrap' style={{ display: 'flex', height: '100%' }}>
                    <div className={"side_bar_section_outer_wrap" } style={{ display: 'flex', height: '100vh' }} >
                        <SidebarComponent/>
                    </div>
                    <div className={`main ${location.pathname === '/assets_detail'? "asset_detail_main_page" : "" || location.pathname === '/assets_detail_edit'? "asset_detail_main_page" : "" }`}>
                        <Routes>  
                            <Route path='/' element={<DashBoardComponent />} />
                            <Route path="/masters" element={<MastersComponent/>} />
                            <Route path="/assets" element={<AssetsComponent />} />
                            <Route path="/assets_detail" element={<AssetsDetail/>} />
                            <Route path="/assets_detail_edit" element={<AssetsDetailEdit/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainRouter;