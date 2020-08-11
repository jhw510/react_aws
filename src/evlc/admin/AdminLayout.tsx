import React from 'react'
import {Sidebar} from '../admin/common/sidebar_components';
import {Footer} from './common/footer.js';
import {Header} from '../admin/common/header_components'

const AdminLayout = (props:any) => {

    return (
            <>
                <div className="page-wrapper" >
                    <Header/>
                    <div className="page-body-wrapper">
                        <Sidebar />
                        <div className="page-body">
                            {props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </>
        )
}

export default AdminLayout
