import { Link, useRouteError } from 'react-router-dom';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';

function ErrorPage() {
    const error = useRouteError();

    let title = "Det oppsto en feil.";
    let message = "Det har beklageligvis oppstått noe rot i systemet, vennligst ta kontakt om dette vedvarer.";


    if (error.status === 401) {
        title = "Innlogging kreves.";
        message = "Du har ikke tilgang til denne siden.";
    } 
    
    if (error.status === 403) {
        title = "Ingen tilgang.";
        message = "Vennligst logg inn igjen og forsøk på nytt.";
    } 
    
    if (error.status === 404) {
        title = "Ops!";
        message = "Vi kunne ikke finne siden du så etter.";
    }

    return (<>
        <Navigation/>

        <main>
            <section className="error_section">
                <h1>{title}</h1>
                <p>{message}</p>
                <Link to=".." relative="path">Gå tilbake</Link>
            </section>
        </main>

        <Footer/>
    </>);
}

export default ErrorPage;