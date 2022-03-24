import {Component} from  'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Попка', salary: 1000, increase: false, rise: false, id: 1},
                {name: 'Зилибобка', salary: 500, increase: false, rise: true, id: 2},
                {name: 'Говненка', salary: 600, increase: true, rise: false, id: 3}
            ],
            term: ''
        }

        this.maxId = 4
    }

deleteItem = (id) => {
    this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
        }
    })
}

addItem = (name, salary) => {
    const newItem = {
        name,
        salary,
        rise: false,
        increase: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        return {
            data: [...data, newItem]
        }
    })
}

onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })
    }))
}

onToggleRise = (id) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if (item.id === id) {
                return {...item, rise: !item.rise}
            }
            return item;
        })
    }))
}

searchEmp = (items, term) => {
    if (term.length === 0) {
        return items
    }
    return items.filter(item => {
        return item.name.indexOf(term) > -1
    })
}

onUpdateSearch = (term) => {
    this.setState({term});
}

    render() {
        const {data, term} = this.state
        const increasedEmployees = data.filter(item => item.increase === true)
        const visibleData = this.searchEmp(data, term);
        return (
            <div className="app">
                <AppInfo 
                number={data.length}
                increasedNumber={increasedEmployees.length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
    
                <EmploersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
};

export default App;