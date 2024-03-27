import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css'; 
import style from 'styled-components'
import { AiOutlineGlobal } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'







const SidebarMenu = () => {

   const [selected, setSelected] = useState('')
   const [collapsed, setCollapsed] = useState(false)

  return (
  
        <Container 
             collapsed={collapsed}
        >
            <Button 
                    onClick={() => setCollapsed(!collapsed)} 
                    style={{margin: '10px'}}
                >CLICK ME</Button>
            <Menu>
                
                    <MenuItems
                        active= {selected === "Dashboard"}
                        onClick={()=>{setSelected( "Dashboard")}}
                    >{collapsed ? <IoHomeOutline size={"15px"} style={{marginTop: "2px"}}/> : (<div><IoHomeOutline size={"15px"} style={{marginTop: "2px"}}/><Link 
                    to="/piechart" 
                    style={{textDecoration: "none", color: "black", marginLeft: "5px"}}
                >Dashboard</Link></div>)}
                        
                        
                        
                    </MenuItems>
                <SubMenus label="Charts">                   
                    <MenuItems
                        active= {selected === "Pie Chart"}
                        onClick={()=>{setSelected( "Pie Chart")}}
                    >{!collapsed && <Link to="/piechart" style={{textDecoration: "none", color: "black"}}>Pie charts </Link>}
                        
                    {collapsed && <AiOutlineGlobal size={"20px"}/>}
                    </MenuItems>
                    <MenuItems
                        active= {selected === "Line charts"}
                        onClick={()=>{setSelected( "Line charts")}}
                    >
                        <Link to= "Linecharts" style={{textDecoration: "none", color: "black"}}>
                            Line charts 
                        </Link>
                    </MenuItems>
                </SubMenus>
                <MenuItems
                    active= {selected === "Documentation"}
                    onClick={()=>{setSelected( "Documentation")}}
                > Documentation </MenuItems>
                <MenuItems
                    active= {selected === "Calendar"}
                    onClick={()=>{setSelected( "Calendar")}}
                > Calendar </MenuItems>
                <SubMenus label="Customer Details">
                    <MenuItems
                        active= {selected === "Contact Informations"}
                        onClick={()=>{setSelected( "Contact Informations")}}
                    > Contact Informations </MenuItems>
                    <MenuItems
                        active= {selected === "Invoices"}
                        onClick={()=>{setSelected( "Invoices")}}
                    >Invoices</MenuItems>
                </SubMenus>
                <MenuItems
                    active= {selected === "Profile Forms"}
                    onClick={()=>{setSelected( "Profile Forms")}}
                > Profile Forms </MenuItems>
                <MenuItems
                    active= {selected === "Calendar"}
                    onClick={()=>{setSelected( "Calendar")}}
                > Calendar </MenuItems>
                {/* <SubMenus label="Charts">
                    <MenuItems
                        active= {selected === "Calendar"}
                        onClick={()=>{setSelected( "Pie Chart")}}
                    > Pie charts </MenuItems>
                    <MenuItems
                        active= {selected === "Pie Chart"}
                        onClick={()=>{setSelected( "Pie Chart")}}
                    > Line charts </MenuItems>
                </SubMenus> */}
                <MenuItems
                    active= {selected === "Pie Chart"}
                    onClick={()=>{setSelected( "Pie Chart")}}
                > Documentation </MenuItems>
                <MenuItems
                    active= {selected === "Pie Chart"}
                    onClick={()=>{setSelected( "Pie Chart")}}
                > Calendar </MenuItems>
                <MenuItems
                    active= {selected === "Pie Chart"}
                    onClick={()=>{setSelected( "Pie Chart")}}
                > Documentation </MenuItems>
                <MenuItems
                    active= {selected === "Pie Chart"}
                    onClick={()=>{setSelected( "Pie Chart")}}
                > Calendar </MenuItems>
                {/* <SubMenus label="Charts">
                    <MenuItems
                        active= {selected === "Pie Chart"}
                        onClick={()=>{setSelected( "Pie Chart")}}
                    > Pie charts </MenuItems>
                    <MenuItems
                        active= {selected === "Pie Chart"}
                        onClick={()=>{setSelected( "Pie Chart")}}
                    > Line charts </MenuItems>
                </SubMenus> */}
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

const MenuItems = style(MenuItem)`
background-color: ${(props) => (props.active ? "green" : "#fbafaf")};

text-decorations: none !important;
color: black;
:hover {
    background-color: ${(props) => (props.active ? "green" : "green")} !important; 
}
`
const Button = style.button``
const ProSidebar = style.div``