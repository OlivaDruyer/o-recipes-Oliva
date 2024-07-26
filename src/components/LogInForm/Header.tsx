import { Image, Input, Button } from "semantic-ui-react";
import logo from '../../assets/logo-recipe.png';
import { Link } from 'react-router-dom';
import './Header.css';
import axios from "axios";
import { useState } from "react";


interface HeaderProps {
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

function Form({ setToken }: HeaderProps) {
//STATE pour le pseudo
//au début pas de pseudo
const [pseudo, setPseudo] = useState<null | string>(null);


//STATE pour le message d'erreur
const [error, setError] = useState<null | string>(null);


    //fonction pour la requête vers le back - en 2eme paramètre les infos du formulaire - on attend la reponse et on console.log
    const checkCredentials = async (email:string, password: string) => {
        try{
        const response = await axios.post("https://orecipesapi.onrender.com/api/login",
        {
            email: email,
            password: password,
        }
    );
        console.log(response);
        //si on reçoit une 200 on enregistre le pseudo reçu dans le state
        setPseudo(response.data.pseudo);

        //On enregistre le JSONWEB de token dans le state de APP grace au setter setToken que App a envoyé via une props
        setToken(response.data.token);

        //et on vire la potentielle erreur du state
        setError(null);
    } catch (e) {
        //si on a catch une erreur et on reçoit une 401, on enregistre une erreur dans le state
        setError("Erreur de connexion");
    }
};
    return(
        <div className="header">
        <Link to="/">
                <div className="logo">
                    <Image src={logo} size="mini" />
                </div>
            </Link>  

            {pseudo ? (
            <>
             <p>Bonjour {pseudo}</p> 
              <Button onClick={() => {
            //on est deconnecté si le pseudo est null
            //on set le pseudo et on met à null
            setPseudo(null);
             }}>
                Déconnexion
            </Button>
             <Link to="/favs">Recettes préférées --en cours de construction--</Link>
             </>
        ) : (  //si on a un pseudo, on affiche ceci, sinon on affiche le formulaire avec un message d'erreur
        <form className="login"
                onSubmit={(e) => {
            //ne pas oublier le prevent
                e.preventDefault();
            //on veut envoyer une requête vers le back avec email+password pour qu'il nous dise si le user est connecté
            //après on recup les données des input avec un formData
            const form = e.currentTarget;
            const formData = new FormData(form)
            //Récupérer le mail
            const email = formData.get("email") as string;
            const password = formData.get("pass") as string;
                checkCredentials(email,password);

        }} 
            >
            <Input placeholder="email" name="email" />
            <Input placeholder="password" name="pass" />
           <Button >Ok</Button>
            {error && <p className="error">{error}</p>} 
        </form>
    )}
        </div>
    );
}


export default Form;