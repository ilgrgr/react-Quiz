import React from 'react';
import TestList from './testList/testList';
import './menu.css';

const Menu = (props) => {

    const styleMenu =['menu']
    
    const styleMenuOff = "menu_off"
    const styleMenuOn ="menu_on"
    

    props.menuTogle ? styleMenu.push(styleMenuOn) : styleMenu.push(styleMenuOff)
    

    return(
        
        <React.Fragment>
        <div className={styleMenu.join(' ')}>
            <div className='menu__ico'
                onClick={ () => {
                    props.onClickMenuHendler(props.menuTogle)   
                } }
            />
            <h2>Выбери Тест</h2>
            
            <TestList />

        </div>
        { props.menuTogle ? <div className='backgraund'></div> : null }

        </React.Fragment>
    )
    
}

export default Menu;