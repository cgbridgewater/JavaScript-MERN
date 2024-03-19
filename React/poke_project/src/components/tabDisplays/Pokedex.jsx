import { useState } from 'react';
import axios from "axios";

const Pokedex = (props) => {

    const [shake, setShake] = useState(false);
    const animate = () => {
            // Button begins to shake
            setShake(true);
            // Button stops shake after 'n' seconds
            setTimeout(() => setShake(false),1500);
    }
    const pokedexLogo = require('./images/pokedex.png')
    const [ input , setInput ] = useState([]); //form input
    const [ errors, setErrors ] = useState([]); //validation errors
    const [ axiosName, setAxiosName] = useState(null) //pokemon api object return
    const [ error, setError] = useState(null) //api errors
    // const [ isError, setIsError] = useState(false)

    const sendSurvey = (e) => {
        e.preventDefault();   // prevent page refresh
        const errorList = [];  // store array of errors if they exist
        if (input.length === 0 ) { 
            errorList.push("Please give an input!")
        }
        if (errorList.length > 0) {
            setErrors(errorList);
        } else { // if all validations pass run the rest
            // When the user clicks the submit input in the form, this will navigate to the "/results" path
            // navigate(`/pokemon/${input}`);
                
            setErrors([]);
            axios
            .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
            .then(res => {
                setError(null);
                // setIsError(false)
                console.log("fetch single pokemon",res.data);
                setAxiosName(res.data);
            })    
            .catch((err) => 
            console.log("HELLLLLOOOOO",err),
            setError("https://i.pinimg.com/originals/1f/08/ca/1f08ca64f7e378a4e50f78cab8b854b0.png"),
            // setIsError(true)
            setAxiosName(null)
            )
            setInput("");
        }}


return (
    <div className='Container'>
        {/* pokedex logo */}
        <img className='PokedexLogo' src={pokedexLogo} alt="pokedex logo" />
        <hr className='PokedexHr' />
        <main>
            {/* map and display errors if they exist */}
            {errors.map((err, i) => (
                <p className='Error' class_id="ErrorText" key={i}>
                    {err}
                </p>
            ))}
            {/* form to collect data */}
            <form className='Form' onSubmit = { sendSurvey }>
            {/* input for search */}
                <div>
                    <label>Search by name or number:</label>
                    <input className='FormInput' class_id='Input'
                    type="text"  
                    onChange={ (e) => 
                        setInput(e.target.value) } 
                        value={ input }
                        />
                    {/* form submit button */}
                    <button 
                    id="ShakingButton" 
                    onClick={animate} 
                    className={shake ? `shake` : null} 
                    type="submit"
                    value="Submit!"
                    >Submit!</button>
                </div>
            </form>
        </main>
        <hr />


        <div className='spinnerContainer'>
            <div>
                <img className="Spinner" src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png" alt="" />
            </div>

            {/* turnary to show or hide data from api */}
            { axiosName?
            <div className='ResultShell'>
                        <div className='ID'>
                            <h1 style={{color:"yellow", fontSize:"50px"}}>
                                {axiosName.id} 
                            </h1>
                        </div>
                <div className='Results'>
                    <p className='Result'>
                        <br />
                        Weight:  &nbsp;&nbsp;&nbsp;&nbsp; {(axiosName.weight*0.1).toFixed(1)}kg 
                        <br />
                        Height:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {(axiosName.height*0.1).toFixed(1)}m 
                        <br />
                        Type:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {(axiosName.types[0].type.name).toUpperCase()} 
                        <br />
                        Species:  &nbsp;&nbsp;&nbsp; {(axiosName.species.name).toUpperCase()} 
                    </p>
                    <div>
                        <img className='ResultImage' src={axiosName.sprites.other.home.front_default} alt="" />
                    </div>
                    <div className='Name'> 
                        <h1 style={{color:"yellow", fontSize:"50px"}}>
                            {(axiosName.name).toUpperCase()} 
                        </h1>
                    </div>
                </div>
            </div>    
            :   
            null
            }
            {error?
            <div>
                <h2
                className='ErrorText'
                >Oh No!! No Pokémon Were Found. Try Again!</h2>
                <img className='ErrorImg' src={error} alt="error"/>
            </div>
                :
                null
            }
        </div>
        {/* bottom of page graphic */}
        {/* <img style={{marginTop:"-200px"}} className="Pika" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ee4b875-457c-4f95-8dc5-0817243a235a/d8ogz4y-a89404b5-cbfe-43ae-af86-1f46f45687bc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlZTRiODc1LTQ1N2MtNGY5NS04ZGM1LTA4MTcyNDNhMjM1YVwvZDhvZ3o0eS1hODk0MDRiNS1jYmZlLTQzYWUtYWY4Ni0xZjQ2ZjQ1Njg3YmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WZnwNsqwI_04nmi8uhfnmmGtsJaFT3KBhiwVI6cx9ZI" alt='ball'/> */}
    </div>
    );
}

export default Pokedex;

            
