import React,{Fragment} from "react";
import indianFood from "../../assets/indianFood.jpg";
import classes from '../Layout/Header.module.css';

const Header = ()=>{
    return(
    <>
        <header className={classes.header} >
           
                <p>React Meals</p>
                <button>Cart</button>
          
           
        </header>
        <div className={classes['main-image']}>
        <img src= {indianFood}/>
        </div>
        
    </>
    );
}

export default Header;