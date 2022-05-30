import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined  } from '@ant-design/icons';
import {  NavLink } from "react-router-dom";

const menuItems = [
    {
        key: '/',
        icon:<HomeOutlined/>,
        label: (<NavLink to='/'> Home </NavLink>),
    },
    {
        key: '/pathfind',
        label: (<NavLink to='/pathfind'> Pathfinding </NavLink>),
    },
    {
        key: '/sorting',
        label: (<NavLink to='/sorting'> Sorting </NavLink>),
    },
    {
        key: '/graphs',
        label: (<NavLink to='/graphs'> Graphs </NavLink>),
    },
]


function Navigation(props) {
    return(
        <Menu mode="horizontal" items={menuItems} theme='dark' defaultSelectedKeys={[props.default]}>

        </Menu>

    )
}
export default Navigation;
