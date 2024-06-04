import HeaderStyled from "@/pages/components/customs/header/header.styled"
import Image from "next/image"; 

const Header = () => {
    return (  
        <HeaderStyled>
                <div className="img">
                    <Image height={100} width={100} src="/assets/images/logo.svg" />
                </div>
                <div className="title">
                    <h2>A history of everything you copy</h2>
                    <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
                </div>
                <div className="btn-div">
                    <button className="btn-ios">Download for iOS</button>
                    <button className="btn-mac">Download for Mac</button>  
                </div>
        </HeaderStyled>
    );
}
 
export default Header;