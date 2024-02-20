import SearchBar from "../searchbar/SearchBar";
import Button from "../button/Button";


const Nav = ({ onSearch }) => {

    return (
        <div className="nav">
            <div className="left-buttons">
                <Button link="/home" text="Home" />
                <Button link="/about" text="About" />
                <Button link="favorites" text="Favorites" />
            </div>
            <div className="right-search">
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}

export default Nav;