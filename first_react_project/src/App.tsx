import Alert from "./assets/Components/Alert";
import Button from "./assets/Components/Button";
import {useState} from "react";

function App() {

    const [alert_visible, setAlertVisibility] = useState(false);
    return <div>
        {alert_visible &&  <Alert onClose={()=>{setAlertVisibility(false)}} text={"hello world"}/>}
        <Button onClick={() => {
            setAlertVisibility(true)
        }} color={"secondary"} button_text={"Press me"}/>
    </div>;
}

export default App;