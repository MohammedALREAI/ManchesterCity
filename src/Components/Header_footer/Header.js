import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';

import {CityLogo} from '../Ui/icons';

import styled from 'styled-components'
const header_logo=styled.div`
`;


const AppBarComponent = styled(AppBar)`
 background-color: '#98c5e9';
                         box-Shadow: 'none';
                         padding: '10px 0';
                         border-Bottom: '2px solid #00285e'`;

class Header extends Component {
    render() {
        return (
            <AppBarComponent position="fixed">
                <Toolbar style={{
                    display: 'flex'
                }}>
                    <div style={{
                        flexGrow: 1
                    }}>
                        <header_logo>
                            <CityLogo
                            link={true}
                            linkTo="/"
                            width="70px"
                            height="70px"/>
                        </header_logo>
                    </div>

                    <Link to="/the_team">
                        <Button color="inherit" style={{}}>The team</Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button color="inherit">Matches</Button>
                    </Link>

                </Toolbar>
            </AppBarComponent>
        );
    }
}

export default Header;
