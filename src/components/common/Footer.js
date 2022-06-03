import './footer.css'
const Footer = () => {

    return(<>
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="http://borgfrontendtooltipsfinal-env.eba-nn3dttb7.us-east-2.elasticbeanstalk.com/">MEDVAC APP</a></li>
                                <li><a href="https://dev3395.d20mm6b3fjxaop.amplifyapp.com/">The INCUBATOR</a></li>
                                <li><a href="#">SIR REPORT</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Team Sith</h3>
                            <p>Driven by passion, fueled by hate, masters kindness to control the Jedi council.</p>
                        </div>
                        <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a
                            href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i
                            className="icon ion-social-snapchat"></i></a><a href="#"><i
                            className="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p className="copyright">Team SITH</p>
                </div>
            </footer>
        </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script></>);

}

export default Footer;