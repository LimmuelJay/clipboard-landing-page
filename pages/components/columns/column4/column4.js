import Column4Styled from "@/pages/components/columns/column4/column4.styled"
import Image from "next/image";

const Column4 = () => {
    return (  
        <Column4Styled>
            <div className="top-column">
                <Image height={45} width={150} src="/assets/images/logo-google.png" />
                <Image height={45} width={150} src="/assets/images/logo-ibm.png" />
                <Image height={23} width={100} src="/assets/images/logo-microsoft.png" />
                <Image height={45} width={120} src="/assets/images/logo-hp.png" />
                <Image height={25} width={100} src="/assets/images/logo-vector-graphics.png" />
            </div>

            <div className="bot-column">
                <div className="description">
                    <h2>Clipboard for iOS and Mac OS</h2>      
                    <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p> 
                </div>

                <div className="btn-div">
                    <button className="btn-ios">Download for iOS</button>
                    <button className="btn-mac">Download for Mac</button>   
                </div>
            </div>
        </Column4Styled>
    );
}
 
export default Column4;