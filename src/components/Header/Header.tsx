import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from './styles.js';
import { Link, useNavigate } from 'react-router-dom';

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
        setBorderColor('#EA524F');
        setSearchIcon('#EA524F');
        setSearchBackgroundColor('rgba(0, 0, 0, 0.5)');
    };

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);

    };


    const checkIsMobile = () => {
        const mobileWidth = 768;
        setIsMobile(window.innerWidth < mobileWidth);
    };


    useEffect(() => {
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    if (isMobile) {
        return (
            <HeaderWrapper>
                <button className="menuIcon" onClick={toggleNav}>
                    <i className="material-icons">menu</i>
                </button>
                <h2>Logo</h2>

                {isNavVisible && (
                    <nav onClick={toggleNav}>
                        <button onClick={handleExpandClick}>
                            <Link to="/">Movies</Link>
                        </button>
                        <button onClick={handleExpandClick}>
                            <Link to="/tv">TV Shows</Link>
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
            <h2>Logo</h2>
            <nav>
                <Link onClick={handleLinkClick} to="/">Movies</Link>
                <Link onClick={handleLinkClick} to="/tv">TV Shows</Link>
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
