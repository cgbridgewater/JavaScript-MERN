import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import DisclaimerSocials from '../components/DisclaimerSocials';

function UpdateSocials (props) {

    const navigate = useNavigate();
    const [ userToken, setUserToken ] = useState("");
    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ JVM, setJVM ] = useState("");
    const [ spotify, setSpotify ] = useState("");
    const [ instagram, setInstagram ] = useState("");
    const [ facebook, setFacebook ] = useState("");
    const [ errors, setErrors ] = useState("");

    useEffect(() => {
        window.scrollTo(0,0) // scroll to top
        axios.get("http://localhost:8000/api/user/profile", {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${userToken}`, // Include the User Token
            },
        })
        .then((res) => {
        setUserName(res.data.userName);
        setEmail(res.data.email);
        setJVM(res.data.JVM);
        setSpotify(res.data.spotify);
        setInstagram(res.data.instagram);
        setFacebook(res.data.facebook);
        })
        .catch((err) => {
            props.setAuthorized("Please log in to access profile pages!");
            console.log("NO REP!");
        navigate("/login")
        });
    }, [userToken]);

    const handleUpdate = (e) => {
        e.preventDefault()
        const data ={
            userName,
            email,
            JVM,
            spotify,
            facebook,
            instagram,
        }
        axios.put("http://localhost:8000/api/user/update", data, {withCredentials: true})
            .then(res => { 
                console.log("Profile Updated!")
                navigate(`/profile`);
            })
            .catch(err =>  {
                setErrors(err.response.data.errors);
                console.log("errors exist!", errors);
            })
    }

    return (
        // MAIN CONTAINER
        <div className="MainContainer">
            {/* LOGIN CONTAINER */}
            <div className="LoginContainer">
                {/* <!-- FORM WRAPPER --> */}
                <div className="FormWrapper">
                    {/* FORM TITLE */}
                    <h1 className="Title">Update Profile Info:</h1>
                    {/* <!-- FORM SECTION  --> */}
                    <form className="RegForm"  onSubmit={handleUpdate}>
                        {/* USER NAME */}
                        { errors.userName ? 
                            <div className='InputContainer'>
                                <label htmlFor="userName" style={{color:"red"}}>< i className="fas fa-user fa-sm" style={{color: "red"}}></i>&nbsp; User Name:</label>
                                <input 
                                    type="text" 
                                    name="userName" 
                                    id='userName' 
                                    value={userName}
                                    placeholder='Enter User Name' 
                                    onChange={(e) => setUserName(e.target.value)}
                                    />
                            </div>
                        :
                            <div className='InputContainer'>
                                <label htmlFor="userName">< i className="fas fa-user fa-sm" style={{color: "#C89211"}}></i>&nbsp; User Name:</label>
                                <input 
                                    type="text" 
                                    name="userName" 
                                    id='userName' 
                                    value={userName}
                                    placeholder='Enter User Name' 
                                    onChange={(e) => setUserName(e.target.value)}
                                    />
                            </div>
                        }
                        {/* EMAIL */}
                        { errors.email ? 
                            <div className='InputContainer'>
                                <label htmlFor="email" style={{color:"red"}}>< i className="fas fa-envelope fa-sm" style={{color: "red"}}></i>&nbsp; Email:</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id='email'
                                    value={email}
                                    placeholder='Enter An Email' 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        :
                            <div className='InputContainer'>
                                <label htmlFor="email">< i className="fas fa-envelope fa-sm" style={{color: "#C89211"}}></i>&nbsp; Email:</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id='email' 
                                    value={email}
                                    placeholder='Enter An Email' 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        }
                        {/* JVM TEAM SELECT */}
                        <div className='InputContainer'>
                            <label htmlFor="JVM">< i className="fas fa-user-friends fa-sm" style={{color: "#C89211"}}></i>&nbsp; JVM Team:</label>
                            <select 
                                type="text" 
                                name="JVM" 
                                id='JVM' 
                                placeholder='Enter JVM Team' 
                                onChange={(e) => setJVM(e.target.value)}
                                value= {JVM}
                            >
                                <option value="">No Team Selected</option>
                                <option value="Gallo">Team Gallo</option>
                                <option value="Pato">Team Pato</option>
                                <option value="Paloma">Team Paloma</option>
                            </select>
                        </div>
                        <p className='ProfileSubTitle'>(Only enter account handles below, not entire links)</p>
                        {/* INSTAGRAM */}
                        { errors.instagram ? 
                            <div className='InputContainer'>
                                <label htmlFor="email" style={{color:"red"}}>< i className="fas fa-envelope fa-sm" style={{color: "red"}}></i>&nbsp; Instagram:</label>
                                <input 
                                    type="text" 
                                    name="instagram" 
                                    id='instagram' 
                                    value={instagram}
                                    placeholder='Enter Your Handle' 
                                    onChange={(e) => setInstagram(e.target.value)}
                                    />
                            </div>
                        :
                            <div className='InputContainer'>
                                <label htmlFor="instagram">< i className="fas fa-envelope fa-sm" style={{color: "#C89211"}}></i>&nbsp; Instagram:</label>
                                <input 
                                    type="text" 
                                    name="instagram" 
                                    id='instagram' 
                                    value={instagram}
                                    placeholder='Enter Your Handle' 
                                    onChange={(e) => setInstagram(e.target.value)}
                                    />
                            </div>
                        }
                        {/* Facebook */}
                        { errors.facebook ? 
                            <div className='InputContainer'>
                                <label htmlFor="facebook" style={{color:"red"}}>< i className="fab fa-facebook fa-sm" style={{color: "red"}}></i>&nbsp; Facebook:</label>
                                <input 
                                    type="text" 
                                    name="facebook" 
                                    id='facebook' 
                                    value={facebook}
                                    placeholder='Enter Facebook Handle' 
                                    onChange={(e) => setFacebook(e.target.value)}
                                    />
                            </div>
                        :
                            <div className='InputContainer'>
                                <label htmlFor="facebook">< i className="fab fa-facebook fa-sm" style={{color: "#C89211"}}></i>&nbsp; Facebook:</label>
                                <input 
                                    type="text" 
                                    name="facebook" 
                                    id='facebook' 
                                    value={facebook}
                                    placeholder='Enter Facebook Handle' 
                                    onChange={(e) => setFacebook(e.target.value)}
                                    />
                            </div>
                        }
                        {/* Spotify */}
                        { errors.spotify ? 
                            <div className='InputContainer'>
                                <label htmlFor="facebook" style={{color:"red"}}>< i className="fab fa-spotify fa-sm" style={{color: "red"}}></i>&nbsp; Spotify:</label>
                                <input 
                                    type="text" 
                                    name="spotify" 
                                    id='spotify' 
                                    value={spotify}
                                    placeholder='Enter Spotify Handle' 
                                    onChange={(e) => setSpotify(e.target.value)}
                                    />
                            </div>
                        :
                            <div className='InputContainer'>
                                <label htmlFor="spotify">< i className="fab fa-spotify fa-sm" style={{color: "#C89211"}}></i>&nbsp; Spotify:</label>
                                <input 
                                    type="text" 
                                    name="spotify" 
                                    id='spotify' 
                                    value={spotify}
                                    placeholder='Enter Spotify Handle' 
                                    onChange={(e) => setSpotify(e.target.value)}
                                    />
                            </div>
                        }
                        {/* SUBMIT BUTTON */}
                        <button type="submit" className='FormButton' >SUBMIT</button>
                    </form>
                    {/* <!-- END FORM SECTION --> */}
                    {/* LINK BACK TO PROFILE */}
                    <Link className="MapLink" to="/profile">Back To Profile</Link>
                </div>
                {/* END FORM CONTAINER */}
            </div>
            {/* DISCLAIMER INSERT */}
            <DisclaimerSocials />
            {/* END MAIN CONTAINER */}
        </div>
    )
}

export default UpdateSocials