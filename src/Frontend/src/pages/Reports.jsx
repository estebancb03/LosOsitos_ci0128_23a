import Container from "../components/Containers/Container"
import NavMenu from "../components/NavMenu/NavMenu"
import Title from "../components/Title"
import DatePickerButton from "../components/Buttons/DatePickerButton"
import DropDownSelect from "../components/Buttons/DropDownSelect"
import Button from "../components/Buttons/Button"

const reportTypes = ["Visitors", "Income"]

const Reports = () => {
    return (
    <>
        <NavMenu/>
        <Container>
            <Title name="Reports"/>
            <div className="grid grid-cols-3 gap-4 my-5">
                <div><DropDownSelect text="Report type" options={reportTypes}/></div>
                <div><DatePickerButton text="Start date"/></div>
                <div><DatePickerButton text="End date"/></div>
            </div>
            <div>
                <Button text="Generate report" type="add"/>
            </div>
        </Container>
    </>
    )
}

export default Reports;