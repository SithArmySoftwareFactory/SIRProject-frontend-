import './footer.css'
import {NavLink} from "react-router-dom";

const Footer = () => {

    return (<>
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a
                                    href="http://borgfrontendtooltipsfinal-env.eba-nn3dttb7.us-east-2.elasticbeanstalk.com/" target="_blank">MEDVAC
                                    APP</a></li>
                                <li><a href="https://dev3395.d20mm6b3fjxaop.amplifyapp.com/" target="_blank">The INCUBATOR</a></li>
                                <li><a href="#">SIR REPORT</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="https://armyfuturescommand.com/software-factory/" target="_blank">Company</a></li>
                                <li><NavLink page="/team" to="/team">Team</NavLink></li>
                                <li><a href="https://armyfuturescommand.com/software-factory-2/" target="_blank">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Team Sith</h3>
                            <p>Driven by passion, fueled by hate, masters kindness to control the Jedi council.</p>
                        </div>
                        <div className="col item social">
                            <a href="https://www.facebook.com/ArmyFutures/" target="_blank"><i className="icon ion-social-facebook"/></a>
                            <a href="https://twitter.com/armyfutures" target="_blank"><i className="icon ion-social-twitter"/></a>
                            <a href="#"><i className="icon ion-social-snapchat"/></a>
                            <a href="https://www.instagram.com/armyfutures/" target="_blank"><i className="icon ion-social-instagram"/></a></div>
                    </div>
                    <p className="copyright">Team SITH</p>
                </div>
            </footer>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>);

}

export default Footer;