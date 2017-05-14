import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Search from './Search';

class Main extends Component {
    render() {

        return (
            <div className="MainWrapper">
                <Header />
                    <Search />
                <Footer />
            </div>
        );
    }
}


export default Main;