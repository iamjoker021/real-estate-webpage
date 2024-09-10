import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


const Header = () => {
    return (
        <header className="padding">
            <div className="brand-name">
                <h1>Dream Lands</h1>
            </div>
            <DesktopNav />
            <MobileNav />
        </header>
    )
}

export default Header;