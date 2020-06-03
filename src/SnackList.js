import React from 'react';
import  {Link} from 'react-router-dom';



function SnackList() {

    return (
        <ul className="SnackList">
            <li><Link to='/blueberries'>Blueberries</Link></li>
            <li><Link to='/carrots'>Carrots</Link></li>
            <li><Link to='/kale'>Kale Chips</Link></li>
        </ul>
    );
}

export default SnackList;