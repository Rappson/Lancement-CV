import '../../style/App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='container'>
            <div className='sidebar row'>
                <ul className="main-menu row">
                    <Link to='#'>
                        <li className='col-3 btn btn-secondary'>Présentation</li>
                    </Link>

                    <Link to="#">
                        <li className='col-3 btn btn-secondary'>Expériences</li>
                    </Link>

                    <Link to="#">
                        <li className='col-3 btn btn-secondary'>A propos de moi</li>
                    </Link>

                    <Link to="#">
                        <li className='col-3 btn btn-secondary'>Commentaires</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar()