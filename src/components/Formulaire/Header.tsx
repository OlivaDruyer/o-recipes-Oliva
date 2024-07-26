import { Image, Input, Button } from "semantic-ui-react";
import logo from '../../assets/logo-recipe.png';
import './Header.css';

function Form() {
    return(
        <div className="header">
        <div className="logo"> 
            <Image src={logo} size="mini" />
        </div>
        <div className="form">  
            <Input placeholder="email" />
            <Input placeholder="password" />
           <Button >Click here</Button>
        </div>
        </div>
    );
}

export default Form;