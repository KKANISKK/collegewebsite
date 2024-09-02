import { IoCallOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
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
            <br />
            <li className={styles["link-properties"]}>
              <a>
                <IoCallOutline />
              </a>
            </li>
            <li className={styles["link-properties"]}>
              <a className={styles["number-properties"]}>06542-265398</a>
            </li>
            <li className={styles["link-properties"]}>
              <a>From Mon-Sat, 9:30 am - 4:30 pm</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["menu-bar-div"]}>
        {" "}
        <ul className={styles["menu-bar-ul"]}>
          {" "}
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              HOME
            </a>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              ABOUT
              <MdOutlineArrowDropDown />
            </a>
            <div className={styles["sub-menu-1"]}>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">President's Desk</a>
                </li>
                <li>
                  <a href="#">Director's Desk</a>
                </li>
                <li>
                  <a href="#">How GGSESTC Is Different From Others </a>
                </li>
                <li>
                  <a href="#">Visitors Of This Year</a>
                </li>
                <li>
                  <a href="#">Appreciation Letter</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              ADMISSION <MdOutlineArrowDropDown />
            </a>
            <div className={styles["sub-menu-1"]}>
              <ul>
                <li>
                  <a href="#">BTech</a>
                </li>
                <li>
                  <a href="#">MBA</a>
                </li>
                <li>
                  <a href="#">BBA & BCA</a>
                </li>
                <li>
                  <a href="#">Polytechnic (Diploma in Engineering)</a>
                </li>
                <li>
                  <a href="#">
                    Scholarship{" "}
                    <div className={styles["right-arrow-button-properties"]}>
                      <IoMdArrowDropright />
                    </div>
                  </a>
                  <div className={styles["sub-menu-2"]}>
                    <ul>
                      <li>
                        <a href="#">Merit Scholarship</a>
                        {/* <p>MeritScholarship</p> */}
                      </li>
                      <li>
                        <a href="#">Government Scholarship</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              ACADEMICS <MdOutlineArrowDropDown />
            </a>
            <div className={styles["sub-menu-1"]}>
              <ul>
                <li>
                  <a href="#">
                    B.Tech{" "}
                    <div className={styles["right-arrow-button-properties"]}>
                      <IoMdArrowDropright />
                    </div>
                  </a>
                  <div className={styles["sub-menu-2"]}>
                    <ul>
                      <li>
                        <a href="#">Civil Engineering</a>
                      </li>
                      <li>
                        <a href="#">Computer Science & Engg</a>
                      </li>
                      <li>
                        <a href="#">Electronics and Communication Engg</a>
                      </li>
                      <li>
                        <a href="#">Electrical and Electronics Engg</a>
                      </li>
                      <li>
                        <a href="#">Mechanical Engineering</a>
                      </li>
                      <li>
                        <a href="#">Computer Science & Engg(Cyber Security)</a>
                      </li>
                      <li>
                        <a href="#">Computer Science & Engg(Data Science)</a>
                      </li>
                      <li>
                        <a href="#">Fashion Technology</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Masters in Business Administration </a>
                </li>
                <li>
                  <a href="#">Working Professionals</a>
                </li>
                <li>
                  <a href="#">Polytechnic (Diploma in Engineering) </a>
                </li>
                <li>
                  <a href="#">BBA</a>
                </li>
                <li>
                  <a href="#">BCA</a>
                </li>
                <li>
                  <a href="#">
                    Academic Council{" "}
                    <div className={styles["right-arrow-button-properties"]}>
                      <IoMdArrowDropright />
                    </div>{" "}
                  </a>
                  <div className={styles["sub-menu-2"]}>
                    <ul>
                      <li>
                        <a href="#">Academics Supervision</a>
                      </li>
                      <li>
                        <a href="#">SOP Of Academics Council</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Ph.D.(Management) Proposed</a>
                </li>
                <li>
                  <a href="#">Basic Science & Humanity</a>
                </li>
                <li>
                  <a href="#">
                    R & D{" "}
                    <div className={styles["right-arrow-button-properties"]}>
                      <IoMdArrowDropright />
                    </div>{" "}
                  </a>
                  <div className={styles["sub-menu-2"]}>
                    <ul>
                      <li>
                        <a href="#">Vision</a>
                      </li>
                      <li>
                        <a href="#">Mission</a>
                      </li>
                      <li>
                        <a href="#">Research Consultancy</a>
                      </li>
                      <li>
                        <a href="#">Dean (R&D) Message</a>
                      </li>
                      <li>
                        <a href="#">Publications</a>
                      </li>
                      <li>
                        <a href="#">Research Facilities</a>
                      </li>
                      <li>
                        <a href="#">Research Advisory Committee</a>
                      </li>
                      <li>
                        <a href="#">Major Area Of Research</a>
                      </li>
                      <li>
                        <a href="#">Intellectual Property Right (IPR) </a>
                      </li>
                      <li>
                        <a href="#">Conferences</a>
                      </li>
                      <li>
                        <a href="#">Innovations </a>
                      </li>
                      <li>
                        <a href="#">Incubation Centre’s</a>
                      </li>
                      <li>
                        <a href="#">Call of Proposal</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">National Education Policy(NEP)</a>
                </li>
                <li>
                  <a href="#">Board of Studies(BOS)</a>
                </li>
                <li>
                  <a href="#">Intellextual Property Right(IPR)</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              MBA <MdOutlineArrowDropDown />
            </a>
            <div className={styles["sub-menu-1"]}>
              <ul>
                <li>
                  <a href="#">MBA</a>
                </li>
                <li>
                  <a href="#">Add-On Courses</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              POLYTHENIC
            </a>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              LIFE@CAMPUS <MdOutlineArrowDropDown />
            </a>
            <div className={styles["sub-menu-1"]}>
              <ul>
                <li>
                  <a href="#">Library</a>
                </li>
                <li>
                  <a href="#">Hostel</a>
                </li>
                <li>
                  <a href="#">Central Workshopk</a>
                </li>
                <li>
                  <a href="#">Clubs & Committee</a>
                </li>
                <li>
                  <a href="#">Cultural Events & Festivals</a>
                </li>
                <li>
                  <a href="#">Medicals</a>
                </li>
                <li>
                  <a href="#">Banks & ATM</a>
                </li>
                <li>
                  <a href="#">Transport</a>
                </li>
                <li>
                  <a href="#">GGSESTC Film Division</a>
                </li>
                <li>
                  <a href="#">Curricular Activities</a>
                </li>
                <li>
                  <a href="#">Sports</a>
                </li>
                <li>
                  <a href="#">Campus Division</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              ADMINISTRATION <MdOutlineArrowDropDown />
            </a>
            <div className={styles["sub-menu-1"]}>
              <ul>
                <li>
                  <a href="#">Governing Body</a>
                </li>
                <li>
                  <a href="#">Faculties</a>
                </li>
                <li>
                  <a href="#">Administrative Staff</a>
                </li>
                <li>
                  <a href="#">Student Councelor</a>
                </li>
                <li>
                  <a href="#">Code Of Conduct</a>
                </li>
                <li>
                  <a href="#">
                    Institutional Development Committee (CDC) Annual Report
                  </a>
                </li>
                <li>
                  <a href="#">Statutory and Various Administrative Committee</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              PLACEMENT <MdOutlineArrowDropDown />
            </a>
            <div className={styles["sub-menu-1"]}>
              <ul>
                <li>
                  <a href="#">T&P Cell</a>
                </li>
                <li>
                  <a href="#">Placement Record</a>
                </li>
                <li>
                  <a href="#">Pre Placement Traning</a>
                </li>
                <li>
                  <a href="#">T&P Notice</a>
                </li>
                <li>
                  <a href="#">Recent Placements</a>
                </li>
                <li>
                  <a href="#">Illustrious Placements</a>
                </li>
                <li>
                  <a href="#">IIICell</a>
                </li>
                <li>
                  <a href="#">Internship/Industrial Visit</a>
                </li>
                <li>
                  <a href="#">GATE & Novel Software Coordination</a>
                </li>
                <li>
                  <a href="#">Pre-Incubation Centre</a>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              NAAC <MdOutlineArrowDropDown />
              <div className={styles["sub-menu-1"]}>
                <ul>
                  <li>
                    <a href="#">IQAC</a>
                  </li>
                  <li>
                    <a href="#">NBA</a>
                  </li>
                  <li>
                    <a href="#">
                      NAAC Criteria{" "}
                      <div className={styles["right-arrow-button-properties"]}>
                        <IoMdArrowDropright />
                      </div>
                    </a>
                    <div className={styles["sub-menu-2"]}>
                      <ul>
                        <li>
                          <a href="#">Criteria 1</a>
                        </li>
                        <li>
                          <a href="#">Criteria 2</a>
                        </li>
                        <li>
                          <a href="#">Criteria 3</a>
                        </li>
                        <li>
                          <a href="#">Criteria 4</a>
                        </li>
                        <li>
                          <a href="#">Criteria 5</a>
                        </li>
                        <li>
                          <a href="#">Criteria 6</a>
                        </li>
                        <li>
                          <a href="#">Criteria 7</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              GALLERY
            </a>
          </li>
          <li className={styles["dropdown-properties-list"]}>
            {" "}
            <a href="#" className={styles["dropdown-button-properties"]}>
              IMPORTANT LINKS
            </a>
          </li>
        </ul>{" "}
      </div>
    </>
  );
};

export default Header;

{
  /* #0060B1
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
}
