import NavList from "./NavList"

const Header = () => {
    return (
        <header className="padding">
            <div className="brand-name">
                <h1>Dream Lands</h1>
            </div>
            <NavList />
        </header>
    )
}

export default Header;