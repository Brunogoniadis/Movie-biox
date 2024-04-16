import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from './styles.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoFont from "../../assets/Logo.svg"
const Header = () => {
    const [searchSize, setSearchSize] = useState('0px');
    const [searchBackgroundColor, setSearchBackgroundColor] = useState('transparent');
    const [borderColor, setBorderColor] = useState('transparent');
    const [searchIcon, setSearchIcon] = useState('white');
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(false);

    const navigate = useNavigate();

    const handleLinkClick = () => {
        setIsNavVisible(false);
    };


    const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!searchTerm) return;

        navigate(`/search?q=${searchTerm}`);
        setSearchTerm('');
        setSearchSize('0px');
        setBorderColor('transparent');
        setSearchIcon('white');
        setSearchBackgroundColor('transparent');
    };

    const handleExpandClick = () => {
        setSearchSize('210px');
        setBorderColor('rgb(14, 141, 150)');
        setSearchIcon('rgb(14, 141, 150)');
        setSearchBackgroundColor('rgba(0, 0, 0, 0.5)');
    };

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);

    };


    const checkIsMobile = () => {
        const mobileWidth = 768;
        setIsMobile(window.innerWidth < mobileWidth);
    };
    const location = useLocation();


    const isRetrospectiveRoute = (path: string) => {
        return location.pathname === path;
    };

    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    if (isMobile) {
        return (
            <HeaderWrapper type="aside">
                <button className="menuIcon" onClick={toggleNav}>
                    <i className="material-icons">menu</i>
                </button>

                <Link to="/">
                    <div className="logo">
                        <img src={LogoFont} alt="" />
                    </div>

                </Link>

                {isNavVisible && (
                    <nav onClick={toggleNav}>
                        <button onClick={handleExpandClick}>
                            <Link onClick={handleLinkClick} to="/" style={{ color: isRetrospectiveRoute('/') ? 'rgb(14, 141, 150)' : 'white' }}>Movies</Link>
                        </button>
                        <button onClick={handleExpandClick}>
                            <Link onClick={handleLinkClick} to="/tv" style={{ color: isRetrospectiveRoute('/tv') ? 'rgb(14, 141, 150)' : 'white' }}>TV Shows</Link>
                        </button>
                    </nav>
                )}
                <div className="formContainer">
                    <form onSubmit={handleSubmitSearch}>
                        <input
                            placeholder="Search"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                            style={{
                                backgroundColor: searchBackgroundColor,
                                width: '175px',
                                borderColor: borderColor
                            }}
                        />
                        <button
                            style={{
                                color: searchIcon
                            }}
                            className='buttonSearch' onClick={handleExpandClick}>
                            <i className="material-icons icon-small">search</i>
                        </button>
                    </form>
                </div>
            </HeaderWrapper>
        );
    }
    return (
        <HeaderWrapper>

            <div className="logo">
                <Link to="/">
                    <img src={LogoFont} alt="" />
                </Link>
            </div>

            <nav>
                <Link onClick={handleLinkClick} to="/" style={{ fontWeight: 'bold', fontSize: '20px', color: isRetrospectiveRoute('/') ? 'rgb(14, 141, 150)' : 'inherit' }}>Movies</Link>
                <Link onClick={handleLinkClick} to="/tv" style={{ fontWeight: 'bold', fontSize: '20px', color: isRetrospectiveRoute('/tv') ? 'rgb(14, 141, 150)' : 'inherit' }}>TV Shows</Link>
            </nav>
            <div className="formContainer">
                <form onSubmit={handleSubmitSearch}>
                    <input
                        placeholder="Search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        style={{
                            backgroundColor: searchBackgroundColor,
                            width: searchSize,
                            borderColor: borderColor
                        }}
                    />
                    <button
                        style={{
                            color: searchIcon
                        }}
                        className='buttonSearch' onClick={handleExpandClick}>
                        <i className="material-icons icon-small">search</i>
                    </button>
                </form>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
