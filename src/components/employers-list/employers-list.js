import EmpoyersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css'

const EmploersList = () => {
    return (
        <ul className="app-list list-group">
            <EmpoyersListItem/>
            <EmpoyersListItem/>
            <EmpoyersListItem/>
        </ul>
    )
}

export default EmploersList