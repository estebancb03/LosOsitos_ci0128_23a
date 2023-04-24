import Container from "../components/Container";import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Button from "../components/Button";

const PicnicCampingButtons = () => {
    return <>
        <NavMenu/>
        <Container>
            <Title name={"Reservation"} />
            <div className="grid grid-cols-2">
                <div className="h-20">
                    <div className="h-10 mr-5 my-5">
                    <Button className="mx-5 mr-5" text="Camping" type="add"/>
                    </div>
                </div>
                <div className="h-20">
                    <div className="h-10 ml-5 my-5">
                    <Button className="mx-5 mr-5" text="Picnic" type="add"/>
                    </div>
                </div>
            </div>
        </Container>
        <Footer />
    </>
}

export default PicnicCampingButtons
