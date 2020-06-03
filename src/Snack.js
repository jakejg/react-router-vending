import React from 'react';
import  {Link} from 'react-router-dom';
import './Snack.css';

function Snack({img}) {
    return (
        <div className="Snack">
            <img src={img}></img>
            <button><Link to='/'>Go back</Link></button>
        </div>
    );
}

export default Snack;