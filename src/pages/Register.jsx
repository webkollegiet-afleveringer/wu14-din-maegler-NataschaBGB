import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Subhero from "../components/Subhero/Subhero";

export default function Register() {

    return (
        <section className="register-page">

            <Header />

            <main>
                <Subhero height="350px" title="Account Register" titleSize="1.5rem" subtitle="Register" />

                <RegisterForm />
            
            </main>

            <Footer />

        </section>
    )

}