
import { Link } from "react-router-dom";



const ErrorPage = () => {
    return (
        
        <section>
            <h1>L'adresse de la page est incorrect !</h1>
            <p aria-label='page introuvable'>404 Page not found !</p>             
            <button aria-label='retour a l accueil' ><Link to="/">Page d'accueil</Link></button>                                        
        </section>

        )    
    
}

export default ErrorPage