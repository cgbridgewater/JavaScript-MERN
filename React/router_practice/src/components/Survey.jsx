import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Survey = (props) => {
    const [ color1 , setColor1 ] = useState("");
    const [color2, setColor2] = useState("");
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([])


    const sendSurvey = (e) => {
        e.preventDefault();   // prevent page refresh
        const errorList = [];  // store array of errors if they exist
        // validation check
        if (color1.length <2) {
            errorList.push("Task must contain at least 2 characters!")
        }
        if (color2.length <2) {
            errorList.push("Task must contain at least 2 characters!")
        }
        if (errorList.length > 0) {
            setErrors(errorList);
        } else { // if all validations pass run the rest

            // When the user clicks the submit input in the form, 
            //we will navigate to the "/results" path
        navigate("/results/"+(color1) + "/" + (color2));
        setErrors([]);

        // OOOORRRRR .... When the user clicks submit, they will return to the previous page they were on.
        // navigate(-1);
        }}


        
return (
    <>
        {/* map and display errors if they exist */}
        {errors.map((err, i) => (
            <p className="ErrorText" key={i}>
                {err}
            </p>
        ))}
        {/* form to collect data */}
        <form onSubmit = { sendSurvey }>
            <label>Pick A Color:</label>
            <input className='Survey'
            type="text" 
            onChange={ (e) => 
            setColor1(e.target.value) } 
            value={ color1 }
            />
            <br />
            <label>Pick Another Color:</label>
            <input className='Survey'
            onChange={ (e) => 
            setColor2(e.target.value) } 
            value={ color2 }
            ></input>
            <br />
            <input className='SurveyButton'
            type="submit"
            value="Submit Survey"
            />
        </form>
    </>
    );
}

export default Survey;