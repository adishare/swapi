import React from "react";
import LogoGeekseat from "../assets/img/geekseat.png";

const Footer = () => {
    return (
        <footer
            className="bg-white text-muted"
            style={{ borderTop: "1px solid #e8e9eb" }}
        >
            <div className="container py-3 px-4">
                <div className="row py-4">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <img
                            src="img/logo.png"
                            alt=""
                            width="180"
                            className="mb-3"
                        />
                        <img
                            src={LogoGeekseat}
                            width="200"
                            alt="Geekseat Logo"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">
                            Author
                        </h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <a href="https://www.linkedin.com/in/fathulqo" className="text-info" target="_blank" rel="noopener noreferrer">Fathul Qorib Alaudit</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">
                            Github
                        </h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <a href="https://www.github.com/adishare" className="text-info" target="_blank" rel="noopener noreferrer">adishare</a>
                            </li>
                     
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-light py-2">
                <div className="container text-center">
                    <p className="text-muted mb-0 py-2">© 2020 fathulqo</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
