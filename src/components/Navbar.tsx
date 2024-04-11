import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            
            <input type="text" />

            <Link to='/'>MoviesLib</Link>
            <Link to='movie/1'>testete</Link>
            <Link to='/search'>teste</Link>

        </>
    )
}