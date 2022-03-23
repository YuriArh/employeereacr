

import './app-info.css';

const AppInfo = ({number, increasedNumber}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Oriflame</h1>
            <h2>Общее число сотрудников: {number}</h2>
            <h2>Премию получат: {increasedNumber}</h2>
        </div>
    )
}

export default AppInfo;