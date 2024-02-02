import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Login (props) {

    const navigate = useNavigate()
    const [ errors, setErrors ] = useState("");
    const [ state, setState ] = useState ({
        login: {
            userName:"",
            password:""
        }
    });;

    const { login } = state;
    const handleLoginInputs = (e) => {
        props.setAuthorized("");
        setState({...state, login: {...state.login, [e.target.name]: e.target.value}})
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login", login, {withCredentials: true})
            .then(res => { 
                console.log(res)
                const userId = res.data.user._id
                console.log("UserID", userId)
                navigate(`/profile`);
            })
            .catch(err =>  {
                setErrors(err.response);
                console.log("errors exist!", errors);
            })
        }

    return (
        // MAIN CONTAINER
        <div className="MainContainer">
            {/* AUTH ERROR TAG */}
            <h2 className='Unauthorized'>{props.authorized}</h2>
            {/* LOGIN CONTAINER */}
            <div className="LoginContainer">
                {/* <!-- FORM WRAPPER --> */}
                <div className="FormWrapper">
                    {/* FORM TITLE */}
                    <h1 className="Title">Login Here:</h1>
                    {/* <!-- FORM SECTION  --> */}
                    <form className="RegForm"  onSubmit={handleLogin}>
                        {/* EMAIL */}
                        { errors ? 
                            <div className='InputContainer'>
                                <label htmlFor="email" style={{color:"red"}}>< i className="fas fa-envelope fa-sm" style={{color: "red"}}></i>&nbsp; User Name:</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    id='email' 
                                    placeholder='Invalid Login' 
                                    onChange={handleLoginInputs}
                                />
                            </div>
                            :
                            <div className='InputContainer'>
                                <label htmlFor="email">< i className="fas fa-envelope fa-sm" style={{color: "#C89211"}}></i>&nbsp; User Name:</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    id='email' 
                                    placeholder='Enter An Email' 
                                    onChange={handleLoginInputs}
                                />
                            </div>
                        }
                        {/* <!-- PASSWORD SECTION --> */}
                        { errors? 
                            <div className='InputContainer'>
                                <label htmlFor="password" style={{color:"red"}}>< i className="fas fa-key fa-sm" style={{color: "red"}}></i>&nbsp; Password:</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id='password' 
                                    placeholder='Invalid Login' 
                                    onChange={handleLoginInputs}
                                />
                            </div>
                            :
                            <div className='InputContainer'>
                                <label htmlFor="password">< i className="fas fa-key fa-sm" style={{color: "#C89211"}}></i>&nbsp; Password:</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id='password' 
                                    placeholder='Enter Password' 
                                    onChange={handleLoginInputs}
                                />
                            </div>
                        }
                        {/* <!-- FORM BUTTON --> */}
                        <button type="submit" className='FormButton' >SUBMIT</button>
                        {/* <!-- SIGN IN LINK --> */}
                        <p className='SignIn'>Need to sign up?  <Link to="/register" className='Gold'>Register Here!</Link></p>
                    </form>
                    {/* <!-- END FORM SECTION --> */}
                    {/* LINK BACK TO MAP */}
                    <Link className="MapLink" to="/">Back To The Map</Link>
                </div>
                {/* END FORM CONTAINER */}
            </div>
            {/* END MAIN CONTAINER */}
        </div>
    )
}

export default Login