import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";


export default function NavBar() {

    return (

        <Menu pointing style={{ marginTop: '10px' }}>

            <Menu.Item
                name="Home"
                icon="home"
                style={{ marginLeft: '20px' }}
                as={Link} to='/'
            />
            <Menu.Item
                name="Quotify"
                as={Link} to='/quotify'
            />
            <Menu.Item
                name="Mol Renderer"
                as={Link} to='/renderer'
            />
        </Menu >
    );

}