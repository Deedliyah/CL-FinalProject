import React, { Component } from 'react';
// import '../assets/css/style.css'

export class ClientsSection extends Component {
    render() {
        return (
            <section id="clients" class="clients">
                <div class="container" data-aos="fade-up">

                    <div class="owl-carousel clients-carousel">
                        <img src="assets/img/clients/client-1.png" alt=""></img>
                        <img src="assets/img/clients/client-2.png" alt=""></img>
                        <img src="assets/img/clients/client-3.png" alt=""></img>
                        <img src="assets/img/clients/client-4.png" alt=""></img>
                        <img src="assets/img/clients/client-5.png" alt=""></img>
                        <img src="assets/img/clients/client-6.png" alt=""></img>
                        <img src="assets/img/clients/client-7.png" alt=""></img>
                        <img src="assets/img/clients/client-8.png" alt=""></img>
                    </div>

                </div>
            </section>
        )
    }
}

export default ClientsSection