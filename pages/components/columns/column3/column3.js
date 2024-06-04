import Column3Styled from "@/pages/components/columns/column3/column3.styled"
import Image from "next/image";

const Column3 = () => {
    return (  
        <Column3Styled>
            <div className="top-column">
                <h2>Supercharge your workflow</h2>
                <p>We’ve got the tools to boost your productivity.</p>
            </div>

            <div className="bot-column">
                <div className="header1">
                    <Image height={40} width={44} src="/assets/images/icon-blacklist.svg" />
                    <h3>Create blacklists</h3>
                    <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                </div>

                <div className="header2">
                    <Image height={35.2} width={40} src="/assets/images/icon-text.svg" />
                    <h3>Plain text snippets</h3>
                    <p>Remove unwanted formatting from copied text for a consistent look.</p>
                </div>

                <div className="header3">
                    <Image height={32} width={50} src="/assets/images/icon-preview.svg" />
                    <h3>Sneak preview</h3>
                    <p>Quick preview of all snippets on your Clipboard for easy access.</p>      
                </div>
            </div>
        </Column3Styled>
    );
}
 
export default Column3;