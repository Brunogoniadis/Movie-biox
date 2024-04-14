import React, { useState } from 'react';
import { HeaderWrapper } from './styles.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchSize, setSearchSize] = useState('0px');
    const [searchBackgroundColor, setSearchBackgroundColor] = useState('transparent')
    const [borderColor, setBorderColor] = useState('transparent');
    const [searchIcon, setSearchIcon] = useState('white')
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!searchTerm) return;

        navigate(`/search?q=${searchTerm}`);
        setSearchTerm('');
        setSearchSize('0px');
        setBorderColor('transparent');
        setSearchIcon('white');
        setSearchBackgroundColor('transparent')
    };

    const handleExpandClick = () => {
        setSearchSize('210px');
        setBorderColor('#EA524F');
        setSearchIcon('#EA524F');
        setSearchBackgroundColor('rgba(0, 0, 0, 0.5)')
    };





    return (
        <HeaderWrapper>

            <h2>Logo</h2>

            <nav>
                <a href="#">Home</a>
                <a href="#">TV Shows</a>
                <a href="#">Movies</a>
                <a href="#">My List</a>
            </nav>

            <div className="formContainer">
                <form onSubmit={handleSubmitSearch}

                >
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
