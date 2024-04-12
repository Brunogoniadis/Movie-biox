import React, { useState } from 'react';
import { HeaderWrapper } from './styles.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('search', searchTerm);

        if (!searchTerm) return

        navigate(`/search?q=${searchTerm}`)

        setSearchTerm('')
    }

    return (
        <HeaderWrapper>

            <form onSubmit={handleSubmitSearch}>
                <input
                    placeholder='digite aqui'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
            </form>
        </HeaderWrapper>
    );

};

export default Header;
