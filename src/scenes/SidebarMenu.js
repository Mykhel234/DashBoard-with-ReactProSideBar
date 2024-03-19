import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import style from 'styled-components'
import { AiOutlineGlobal } from "react-icons/ai";

import React, { useState } from 'react'

const SidebarMenu = () => {

    const [click, setClick] = useState("")

    const handleClicks =(MenuItemsNames)=>{
        setClick(MenuItemsNames)
    }

  return (
        <Container>
            <Menu>
                <SubMenus label="Charts">
                    <MenuItems
                        active={click === "PieCharts"}
                        onClick={() => handleClicks("PieCharts")}
                    > Pie charts <AiOutlineGlobal size={"20px"}/></MenuItems>
                    <MenuItems
                        active={click === "Line charts"}
                        onClick={() => handleClicks("Line charts")}
                    > Line charts </MenuItems>
                </SubMenus>
                <MenuItem
                    active={click === "Documentation"}
                    onClick={() => handleClicks("Documentation")}
                > Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
                <SubMenus label="Charts">
                    <MenuItems> Pie charts </MenuItems>
                    <MenuItems> Line charts </MenuItems>
                </SubMenus>
                <MenuItems> Documentation </MenuItems>
                <MenuItems> Calendar </MenuItems>
                <SubMenus label="Charts">
                    <MenuItems> Pie charts </MenuItems>
                    <MenuItems> Line charts </MenuItems>
                </SubMenus>
                <MenuItems> Documentation </MenuItems>
                <MenuItems> Calendar </MenuItems>
                <MenuItems> Documentation </MenuItems>
                <MenuItems> Calendar </MenuItems>
                <SubMenus label="Charts">
                    <MenuItems> Pie charts </MenuItems>
                    <MenuItems> Line charts </MenuItems>
                </SubMenus>
            </Menu>
        </Container>
    )
}

export default SidebarMenu

const Container = style(Sidebar)`
height: 100vh;
background: red;
`

const SubMenus = style(SubMenu)`
:hover {
    background: green !important;
}
`

// const MenuItems = style(AiOutlineGlobal)``

const MenuItems = style(MenuItem)`
background-color: ${(props) => (props.active ? "green" : "#fbafaf")};

&:hover {
    background-color: ${(props) => (props.active ? "green" : "green")}; 
}
`
