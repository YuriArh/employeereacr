import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {
    const data = [
        {name: 'Попка', salary: 1000, increase: false, id: 1},
        {name: 'Зилибобка', salary: 500, increase: false, id: 2},
        {name: 'Говненка', salary: 600, increase: true, id: 3}
    ];
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmploersList data={data}/>
            <EmployersAddForm/>
        </div>
    )
};

export default App;