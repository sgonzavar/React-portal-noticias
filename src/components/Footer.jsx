import React from 'react'

import '../styles/Footer.css'

const Footer = () => {

    const date = new Date();
    
    return (
        <>
            <footer className="page-footer  cyan darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">News Content</h5>
                            <p className="grey-text text-lighten-4">Can you read about news in Colombia</p>
                        </div>
                        <div className="col l4 offset-l2 s12">                      
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © {date.getFullYear()}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer