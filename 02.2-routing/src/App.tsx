import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from "./components/Site.module.css";
import {Adidas} from './components/pages/Adidas';
import {Puma} from './components/pages/Puma';
import {Error404} from './components/pages/Error404';
import {Model} from './components/pages/Model';



function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={({isActive}) => isActive ? styles.active : ''} to='/adidas/'>Adidas</NavLink></div>
                    <div><NavLink className={({isActive}) => isActive ? styles.active : ''} to='/puma/'>Puma</NavLink></div>
                </div>
                <Routes>
                    <Route path={'/adidas'} element={<Adidas/>}/>
                    <Route path={'/puma'} element={<Puma/>}/>
                    <Route path='/*' element={<Error404/>}/>
                    <Route path='/' element={<Navigate to='/adidas'/>}/>

                    <Route path={'/:brand/:id'} element={<Model /> }/>
                </Routes>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
