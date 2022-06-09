import './footer.css'
import {NavLink} from "react-router-dom";
import AnalyticsEventTracker from "./AnalyticsEventTracker";

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
                                    href="http://borgfrontbigmem-env.eba-xxe2h3wr.us-east-2.elasticbeanstalk.com"
                                    onClick={() => AnalyticsEventTracker('External Links', 'MEDVAC Link', 'clicked')}>MEDVAC
                                    APP</a></li>
                                <li><a href="https://dev3395.d20mm6b3fjxaop.amplifyapp.com/"
                                       onClick={() => AnalyticsEventTracker('External Links', 'Incubator Link', 'clicked')} target="_blank">The INCUBATOR</a></li>
                                <li><a href="#"
                                       onClick={() => AnalyticsEventTracker('External Links', 'SIR Link', 'clicked')} target="_blank">SIR REPORT</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="https://armyfuturescommand.com/software-factory/"
                                       onClick={() => AnalyticsEventTracker('Software Factory', 'Clicked Company button', 'clicked')} target="_blank">Company</a></li>
                                <li><NavLink page="/team" to="/team">Team</NavLink></li>
                                <li><a href="https://armyfuturescommand.com/software-factory-2/"
                                       onClick={() => AnalyticsEventTracker('Software Factory', 'Clicked Careers Button', 'Routed to SWF Application')} target="_blank">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Team Sith</h3>
                            <p>Driven by passion, fueled by hate, masters kindness to control the Jedi council.</p>
                        </div>
                        <div className="col item social">
                            <a href="https://www.facebook.com/ArmyFutures/" target="_blank"><i className="icon ion-social-facebook"/></a>
                            <a href="https://twitter.com/armyfutures" target="_blank"><i className="icon ion-social-twitter"/></a>
                            <a href="https://www.instagram.com/armyfutures/" target="_blank"><i className="icon ion-social-instagram"/></a></div>
                    </div>
                    <p className="copyright">{(new Date().getFullYear())} Copyright © Team SITH</p>
                </div>
            </footer>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>);

}

export default Footer;