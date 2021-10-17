import * as React from "react"
import { Link } from "gatsby"


const NavBar = (props) => {

    let homePageClass = "nav-item w-nav-link";
    let photosPageClass = "nav-item w-nav-link"
    let aboutPageClass = "nav-item w-nav-link";
    let memoriesPageClass = "nav-item w-nav-link";
    switch(props.page)
    {
        case "home":
            homePageClass += " w--current";
            break;
        case "photos":
            photosPageClass += " w--current";
            break;
        case "about":
            aboutPageClass += " w--current";
            break;
        case "memories":
            memoriesPageClass += " w--current";
            break;
    }

    return (
        <div data-animation="default" data-collapse="small" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navigation w-nav">
            <div className="navi-wrap w-container">
            <h1 className="title">In memory of Peter Cleland</h1>
            <nav role="navigation" className="nav-menu w-nav-menu">
                <Link to="/" aria-current="page" className={homePageClass}>Home</Link>
                <Link to="/photos" className={photosPageClass}>Photos</Link>
                <Link to="/memories" className={memoriesPageClass}>Stories &amp; Memories</Link>
                <Link to="/about" className={aboutPageClass}>Facts</Link>
            </nav>
            <div className="w-nav-button">
                <div className="icon w-icon-nav-menu" />
            </div>
            </div>
      </div>
    );
}

export default NavBar