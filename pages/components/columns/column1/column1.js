import Column1Styled from "@/pages/components/columns/column1/column1.styled"
import Image from "next/image";

const Column1 = () => {
    return (  
        <Column1Styled>
            <div className="top-column">
                <h2>Keep track of your snippets</h2>
                <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
            </div>

            <div className="bot-column">
                <div className="img-wrapper">
                   <img src="/assets/images/image-computer.png" /> 
                </div>
                
                <div className="description">
                    <div className="header1">
                        <h3>Quick Search</h3>
                        <p>Easily search your snippets by content, category, web address, application, and more.</p> 
                    </div>

                    <div className="header2">
                        <h3>iCloud Sync</h3>
                        <p>Instantly saves and syncs snippets across all your devices.</p>
                    </div>

                    <div className="header3">
                        <h3>Complete History</h3>
                        <p>Retrieve any snippets from the first moment you started using the app.</p>  
                    </div>
                </div>
            </div>
        </Column1Styled>
    );
}
 
export default Column1;