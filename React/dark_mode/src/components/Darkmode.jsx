
const DarkMode = () => {
    const set_dark_mode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selected_theme", "dark");
    }
    
    const set_light_mode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("selected_theme", "light");
    };

    const toggle_theme = (e) => {
        if (e.target.checked) set_dark_mode();
        else set_light_mode();
    };

    const selected_theme = localStorage.getItem("selected_theme");

    if (selected_theme === "dark") {
        set_dark_mode();
    }

    return (
        <div className="dark_mode">
                <h5>Dark Mode</h5>
                <input onChange={toggle_theme} defaultChecked={selected_theme === "dark"} className="dark_mode_input" type="checkbox" id="darkmode_toggle" />
                <label className="dark_mode_label" htmlFor="darkmode_toggle">
                    <i id="sun" className="far fa-sun"></i>
                    <i id="moon" className="far fa-moon"></i>
                </label>
        </div>
    );
};

export default DarkMode;