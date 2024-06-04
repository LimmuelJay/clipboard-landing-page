import Column2Styled from "@/pages/components/columns/column2/column2.styled"
import Image from "next/image";

const Column2 = () => {
    return (  
        <Column2Styled>
            <div className="main-column">
                <div className="top-column">
                    <h2>Access Clipboard anywhere</h2>
                    <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
                </div>

                <div className="bot-column">
                    <img src="/assets/images/image-devices.png" />  
                </div>
            </div>
        </Column2Styled>
    );
}
 
export default Column2;