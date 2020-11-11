import React, { Component } from 'react';

class Navbar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <a className="navbar-brand p-2" href="#">Project Tracker</a>
            </nav>
        );
    }
}

export default Navbar;