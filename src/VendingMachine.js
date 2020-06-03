import React from 'react';
import  {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import Snack from './Snack';
import SnackList from './SnackList'
import './VendingMachine.css';


function VendingMachine() {

    return (
        <div className="VendingMachine">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><NavLink exact to='/blueberries'>Blueberries</NavLink></li>
                        <li><NavLink exact to='/carrots'>Carrots</NavLink></li>
                        <li><NavLink exact to='/kale'>Kale Chips</NavLink></li>
                    </ul>
                </nav>
                <Route exact path='/'>
                    <h1> Healthy Snacks Vending Machine</h1>
                    <SnackList />
                </Route>
                <Route exact path='/blueberries'>
                    <Snack img={'https://image.shutterstock.com/image-photo/blueberries-isolated-on-white-background-260nw-667701004.jpg'} />
                </Route>
                <Route exact path='/carrots'>
                    <Snack img={'https://lh3.googleusercontent.com/proxy/_qCqotzlOyr9-BrdDD6xpWr1lY83tPC_N_v_l3GXdJJBYColOmlQ34UlLYC4soylGRcdNqv7dkk699C1l4buubiiwUDkfEwE1DhQ6-q4DvP1N6IPHEDhGTXPv0ayCpoEkBUkE67FKjLADwd-ooYXNQ'}/>
                </Route>
                <Route exact path='/Kale'>
                    <Snack img={'https://www.aspicyperspective.com/wp-content/uploads/2019/09/baked-kale-chips-5.jpg'}/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default VendingMachine;