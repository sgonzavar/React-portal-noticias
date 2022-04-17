import React from 'react'

import '../styles/Footer.css'

const Footer = () => {

    const date = new Date();
    
    return (
        <>
            <footer class="page-footer  cyan darken-3">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">News Content</h5>
                            <p class="grey-text text-lighten-4">Can you read about news in Colombia</p>
                        </div>
                        <div class="col l4 offset-l2 s12">                      
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © {date.getFullYear()}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer