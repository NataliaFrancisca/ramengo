import Illustration from "../Illustration/Illustration";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form-lamen');
    const button = document.querySelector("#navigate-form");

    button?.addEventListener('click', () => {
        form?.scrollIntoView({behavior: "smooth"});
    });
});

const Header = `
    <header id="header-component">

        <a href="/" id="link-page"> ramenGO! </a>
        
        <section id="container-header"> 
            ${Illustration}

            <article id="header-message">

                <div id="group-title">
                    <p id="title-custom">ラlメン</p>
                    <h1 id="title">GO!</h1>
                </div>
            
                <p id="text-header">Enjoy a good ramen in the comfort of your house. Create your own ramen and choose your favorite flavour combination!</p>

                <button id="navigate-form">ORDER NOW </button>
            </article>
        </section>

    </header>
`

export default Header;