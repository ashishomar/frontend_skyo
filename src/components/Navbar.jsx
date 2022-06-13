import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'

import React from 'react'
import "./navbar.css"

const Navbar = () =>
{
    return (
        <div className="navContainer">
            <div className="navWrapper">
                <div className="navLeft">
                    <span className="navLanguage">EN</span>
                    <div className="navSearchContainer">
                        <input type="text" className='searchInput' />
                        <Search style={{ color: "grey", fontSize: 16, cursor: 'pointer' }} />
                    </div>
                </div>
                <div className="navCenter">
                    <h1 className="logo">SKYO.</h1>
                </div>
                <div className="navRight">
                    <div className="MenuItem">REGISTER</div>
                    <div className="MenuItem">SIGN IN</div>
                    <div className="MenuItem">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar