import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles["header-area"]}>
      <div className={styles["item-college-nameNlogo-container"]}>
        <div className={styles["college-logo"]}>
          <img src="/GGESElogo.png" alt="college logo" />
        </div>

        <div className={styles["college-name"]}>
          <p>
            Guru Gobind Singh Educational Society's <br />
            Technical Campus.
          </p>
        </div>
      </div>
      <div className={styles["header-links-container"]}>
        <ul>
          <li className={styles["link-properties"]}>
            <a>NEWS & EVENTS</a>
          </li>
          <li className={styles["link-properties"]}>
            <a>WEBMAIL</a>
          </li>
          <li className={styles["link-properties"]}>
            <a>CONTACT</a>
          </li>
          <li className={styles["link-properties"]}>
            <a>GRIEVANCE</a>
          </li>
          <li className={styles["link-properties"]}>
            <a>FEE PAYMENT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

/*
<div class="header fixed-top" style="background-image: url(img/about/ggsestctop.jpg);
            background-repeat: repeat-x;">
            <nav class="navbar navbar-default">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="header_inner">
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                        <div class="headerLogo">
                                            <a class="navbar-brand logo clearfix" href="/home">
                                                <img src="\img\logo.png" alt="" class="img-responsive"></a>
                                        </div>

                                        <div class="headerTitle">
                                            <p class="ggest_title" style="">
                                                Guru Gobind Singh Educational Society's<br>
                                                Technical Campus
                                            </p>
                                        </div>
                                    </div>
                                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul class="nav navbar-nav navbar-right">
                                            <li class="active"><a href="/news-and-events">News &amp; Events</a></li>
                                            
                                            <li><a href="https://login.microsoftonline.com/" target="_blank">Webmail</a></li>
                                            <li><a href="/contact-us">Contact</a></li>
                                            <li><a href="http://grievance.ggsestc.ac.in/" target="_blank" style="padding-right:0!important;">Grievance</a></li>
                                            <li><a href="http://payment.ggsestc.ac.in/" target="_blank" style="padding-right:0!important;">Fee Payment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="toll-free1" style="width: 400px; height: 50px; z-index: 9; position: relative; float: right; margin-top: -35px; margin-bottom: -25px;">
                            <div style="float: right;"> <img src="/images/toll-free.png" style="width: 45px; float: left; margin-top: -13px" alt=""><span style="color:#ef4323;font-size:18px;">06542-265398</span>&nbsp;|&nbsp;<span style="color:#0096FF;">From Mon-Sat, 9:30 am - 4:30 pm</span></div>
                        </div>

                    </div>
                </nav>
        </div>
*/
