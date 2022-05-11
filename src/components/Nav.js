import {useState} from 'react'
// Import styling and animation
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {fadeIn} from '../animation'

import logo from '../img/logo.svg'

import {fetchSearch} from '../actions/gamesAction'
// Redux
import {useDispatch} from 'react-redux'

const Nav = () =>{

    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState('')

    const inputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(textInput))
        setTextInput("")
    }

    const clearSearched = () => {
        dispatch({type: "CLEAR_SEARCHED"})
    }

    return(
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitHandler}>Search</button>
            </form>
        </StyledNav>
    )   
}


const StyledNav = styled(motion.nav)`
    width: 100%;
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        padding: 0.5rem;
        font-size: 1.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        font-weight: bold;
    }
    button{
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        cursor: pointer;
        background-color: #ff7676;
        color: white
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
`

export default Nav