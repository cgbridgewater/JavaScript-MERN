import React, {useState} from "react";


const Tab2 = () => {

        const [shake, setShake] = useState(false);

        const animate = () => {
                // Button begins to shake
                setShake(true);

                // Button stops shake after 2 seconds
                setTimeout(() => setShake(false),2000);
        }




        return (
                <div>

                        <h1>TESTING Tab 2</h1>



                        <button id="ShakingButton" onClick={animate} className={shake ? `shake` : null}>Shake Me!</button>

                        <img style={{marginTop:"-200px"}} className="Pika" src="https://i.pinimg.com/originals/5a/c0/f4/5ac0f4d991159670000f0eeb1136e3cb.gif" alt="sleepingpikachu"/>
                </div>
        );
};


export default Tab2