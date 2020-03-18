import React from 'react';
import { CityLogo } from '../Ui/icons';
 import styled from'styled-components'
const FooterComponent=styled.footer`
text-align: center;
     font-size: 16px;
     color: #ffffff;
     padding: 30px 0px;
         background: #0d1831;

.img_cover{
     margin: 0 auto;
}

.footer_discl {
     margin: 10px 0px;
}
`;
const Footer = () => {
     return (
          <FooterComponent>
               <div className="footer_logo">
                    <CityLogo
                         width="70px"
                         height="70px"
                         link={true}
                         linkTo="/"
                    />
               </div>
               <div className="footer_discl">
                    Manchester city 2018.All rights reserved.
            </div>

          </FooterComponent>
     );
};

export default Footer;
