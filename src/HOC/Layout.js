import React from 'react';
import { Header, Footer} from '../Components/Header_footer/index';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;
