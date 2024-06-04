import MainStyled from "@/pages/components/main/main.styled";
import Column1 from "@/pages/components/columns/column1/column1"
import Column2 from "@/pages/components/columns/column2/column2"
import Column3 from "@/pages/components/columns/column3/column3"
import Column4 from "@/pages/components/columns/column4/column4"
import Header from "@/pages/components/customs/header/header"
import Footer from "@/pages/components/customs/footer/footer"

const Main = () => {
    return (
        <MainStyled>
            <div className="header">
                <Header />
            </div>

            <div className="body"> 
                <Column1 />
                <Column2 />
                <Column3 />
                <Column4 />
            </div>

            <div className="footer">
                <Footer />
            </div>
        </MainStyled>
    )
}
 
export default Main;