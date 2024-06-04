import FooterStyled from "@/pages/components/customs/footer/footer.styled"
import Image from "next/image";

const Footer = () => {
    return (  
        <FooterStyled>
            <div className="main-column">
                <div className="logo">
                    <Image height={50} width={50} src="/assets/images/logo.svg"/>
                </div>
                <div className="buttons">
                        <a href='#'><h3>FAQs</h3></a>
                        <a href='#'><h3>Privacy Policy</h3></a>
                        <a href='#'><h3>Install Guide</h3></a>
                        <a href='#'><h3>Contact Us</h3></a>
                        <a href='#'><h3>Press Kit</h3></a>
                </div>

                <div className="icons">
                    <Image height={24} width={24} src="/assets/images/icon-facebook.svg" />
                    <Image height={20} width={24} src="/assets/images/icon-twitter.svg" />
                    <Image height={24} width={24} src="/assets/images/icon-instagram.svg" />
                </div>
            </div>
        </FooterStyled>
    );
}
 
export default Footer;