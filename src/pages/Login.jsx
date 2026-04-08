import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm/LoginForm";
import Subhero from "../components/Subhero/Subhero";

export default function Login() {

    return (
        <section className="login-page">

            <Header />

            <main>
                <Subhero height="350px" title="Account Login" titleSize="1.5rem" subtitle="Login" />

                <LoginForm />
            
            </main>

            <Footer />

        </section>
    )

}