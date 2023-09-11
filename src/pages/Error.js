import { Link, useRouteError } from 'react-router-dom';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';

function ErrorPage() {
    const error = useRouteError();

    let title;
    let message;

    switch (error.status) {
        case 401: 
            title = "Innlogging kreves.";
            message = "Du har ikke tilgang til denne siden.";            
            break;
        case 403:
            title = "Ingen tilgang.";
            message = "Vennligst logg inn igjen og forsøk på nytt.";
            break;
        case 404: 
            title = "Ops!";
            message = "Vi kunne ikke finne siden du så etter.";
            break;
        default: 
            title = "Det oppsto en feil.";
            message = error.statusText;
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