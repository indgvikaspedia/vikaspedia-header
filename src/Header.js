// import { useRoutes, useRedirect, A } from 'hookrouter';
// import axios from 'axios';
// import { connect, useDispatch } from 'react-redux';
import { Navbar, NavDropdown, Nav, DropdownButton } from 'react-bootstrap';
import React, { Component, useRef, useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Dropdown,
  Badge
  // OverlayTrigger,
  // Tooltip
} from 'react-bootstrap';
import { Link,BrowserRouter as Router, useHistory } from 'react-router-dom';
import '../src/Style.css';
import '../src/minified.css';
import { lgn } from './json';
// import { userManagement as msuser } from '../../../properties/userManagement';
// import { setUserData, setUserLogin, fetchReleaseVersion } from '../../actions';
// import { KeywordManagement as keywordms } from '../../../properties/KeywordManagement';
// import { fetchLangugeData, setSearchData } from '../../actions';
// import PropTypes, { func } from 'prop-types';
// import { getWebSiteLanguage } from '../../../helpers/LanguageService';
// import $ from 'jquery';

// import ReactTags from 'react-tag-autocomplete';
import { site_url, user_roles, lgn_code, user_facilities } from '../src/constant';
// import {
//   setVpediaCookie,
//   getVpediaCookie,
//   deleteVpediaCookie
// } from '../../../helpers/VpediaCookie';
// import { cookie_keys, lgn_code, GET_DEV_IP } from '../../../properties/constant';
// import SearchResultComponent from '../../pages/SearchResultComponent';
// import { server_fetchLangugeData } from '../../actions/server_index';
// import { translateToHindi, inputTextTranslation } from '../../../helpers/TextTranslation';
// import { Redirect } from 'react-router-dom';
// import DropdownButton from 'react-bootstrap/DropdownButton'

const Header = props => {
  const _lgn  = lgn;
  // const { _lgn, userLogin, pages, mainbody } = props;
//   const myDispatch = useDispatch();
  //  const [loginId, setloginId] = useState();
  //  const [user, setUser] = useState();

  // const [loginId, setloginId] = useState(null);
  // const [userFacilities, setuserFacilities] = useState();
  // const [user, setUser] = useState(' test ');

  // const [searchTxt, setSearchTxt] = useState('');
  const [pageLanguage, setPageLanguage] = useState('');
  // const [pageDomain, setPageDomain] = useState('');
  // const [searchRes, setSearchRes] = useState([]);
  // const [searchVisible, setsearchVisible] = useState(false);
  // const [clickedOutside, setClickedOutside] = useState(false);
  // const [isSearchEnter, setIsSearchEnter] = useState(false);
  // const myRef = useRef();
  // const searchBoxRef = useRef();
  // const [userFacility, setUserFacility] = useState(user_facilities);
  // const [role, setRole] = useState('');
  // const [allLgnVisible, setAllLgnVisible] = useState(false);
  // const [sideWidth, setSideWidth] = useState(0);
  // let history = useHistory();
  //detect space for search
  // const register_temp_trans = "वेबिनार के लिए पंजीकरण करें";
//   const detectSpacePresent = e => {
//     if (e.keyCode == 32) {
//       setSearchTxt(e.target.value);
//     }
//   };

  



  
  
  
  

  

  
  
  
  return (
    <Router>
    <div>
      {/* {changeFontTheme()} */}
      {/* <button ref={myRef} onClick={handleClickInside}>
      {clickedOutside ? "Bye!" : "Hello!"}
    </button> */}
      {_lgn != null ? (
           
        <div className="header">
          <style>{`@media print {.header{display: none;}}`}</style>
          <div className="hide-for-mob">
            <Row className="headerRow headerSize no-gutters">
              <Col md={2}>
                <Link>
                <div className="home" 
                    // onClick={changeFontTheme}
                     alt="home">
                      <img alt="" />
                    </div>
                  </Link>
                {/* {   props != null &&
                props.location.pathname != null &&
                props.location.pathname == '/' ? (
                  <a href="/">
                    <div className="home" 
                    // onClick={changeFontTheme} 
                    alt="home">
                      <img alt="" />
                    </div>
                  </a>
                ) : (
                  <Link
                    to={
                      pageLanguage != lgn_code.ENGLISH &&
                      pageLanguage != lgn_code.HINDI &&
                      pageLanguage != lgn_code.MARATHI &&
                      pageLanguage != lgn_code.TELUGU &&
                      pageLanguage != lgn_code.TAMIL &&
                      pageLanguage != lgn_code.MALAYALAM &&
                      pageLanguage != lgn_code.BENGALI
                        ? '/agriculture'
                        : 
                       
                        null
                        ? '/InDG'
                        : '/'
                    }
                  >
                    <div className="home" 
                    // onClick={changeFontTheme}
                     alt="home">
                      <img alt="" />
                    </div>
                  </Link>
                )} */}
              </Col>
              <Col md={10}>
                <div className="headerRow1 d-flex justify-content-between">
                  <div className="lang_align">
                    <a
                      href={site_url.EN_URL}
                      title="English"
                      className=
                     " langLeft headerRow2 englishFont"
                     
                  
                    >
                      {/* <a href={site_url.EN_URL} className="langLeft active headerRow2 englishFont"> */}
                      ENGLISH
                    </a>
                    <a
                      href={site_url.HI_URL}
                      title="Hindi"
                      className="headerRow2 alignText englishFont "
                     
                    
                    >
                      हिंदी
                    </a>
                    <a
                      href={site_url.MR_URL}
                      title="Marathi"
                      className={`headerRow2 alignText `
                      // ${
                      //   pageLanguage == lgn_code.MARATHI ? 'header-lgn-active' : ''
                      // }`
                    }
                    >
                      मराठी
                    </a>

                    {/* <a href={site_url.MR_URL} title="Marathi" className="headerRow2 alignText">
                      मराठी
                    </a> */}
                    <a
                      href={site_url.ML_URL}
                      title="Malyalam"
                      className="headerRow2 alignText"
                    >
                      മലയാളം
                    </a>
                    <a href={site_url.TA_URL} title="Tamil" className="headerRow2 alignText">
                      தமிழ்
                    </a>
                    <a href={site_url.BN_URL} title="Bengali" className="headerRow2 alignText">
                      বাংলা
                    </a>
                  </div>

                  <div className="position-relative marqParent">
                    <div className="marq" title="Click to view other languages" id="searchLang">
                      {/*Uses of hover*/}
                      <marquee className="alignTextMarq">
                        অসমীয়া &nbsp; বাংলা &nbsp; बोड़ो &nbsp; डोगरी &nbsp; ગુજરાતી &nbsp; ಕನ್ನಡ
                        &nbsp; كأشُر &nbsp; कोंकणी &nbsp; संथाली &nbsp; মনিপুরি &nbsp; नेपाली &nbsp;
                        ଓରିୟା &nbsp; ਪੰਜਾਬੀ &nbsp; संस्कृत &nbsp; தமிழ்&nbsp; తెలుగు &nbsp; ردو
                      </marquee>
                    </div>
                  </div>
                  <div className="alignImage hideInput text-right">
                    <div className="d-inline-block" style={{width:'171px'}}>
                    <Form
                      onSubmit={e => {
                        // searchSubmit(e);
                      }}
                    >
                      <FormControl
                        id="portalSearch"
                        // ref={searchBoxRef}
                        // onClick={handleClickInside}
                        type="text"
                        // value="form"
                        // value={searchTxt}
                        placeholder={_lgn != null ? _lgn.search_within_portal : ''}
                        // onChange={onSearchChange}
                        // onKeyUp={detectSpacePresent}
                        className="mr-sm-2 main-searchbar"
                      />
                      <i class="fa fa-search search-icon" aria-hidden="true"></i>
                    </Form>
                    <div className="searchResult" 
                    // ref={myRef} 
                    // onClick={handleClickInside}
                    >
                      {/* {clickedOutside ? '' : displaySearchResultBox(searchTxt, isSearchEnter)} */}
                    </div>
                    </div>
                    

                    <Dropdown className='d-inline-block mx-2'>
                      <Dropdown.Toggle
                        className="fontIcon accessbility-options"
                        style={{
                          color: '#ffffff00',
                          backgroundColor: '#ffffff00',
                          borderColor: '#ffffff00',
                          boxShadow: '#ffffff00'
                        }}
                      >
                        {/* <div className="fontIcon">
                        <img alt="" />
                      </div> */}
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{ textAlign: 'center', minWidth: 'auto', lineHeight: '0px' }}
                      >
                        <Dropdown.Item href="#/action-1" id="badge1" className="ddpad">
                          <Badge variant="secondary" 
                          // onClick={handleBadgelarge}
                          >
                            +A
                          </Badge>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className="ddpad">
                          <Badge variant="secondary" 
                          // onClick={handleBadge}
                          >
                            A
                          </Badge>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className="ddpad">
                          <Badge variant="secondary"
                          //  onClick={handleBadgesmall}
                           >
                            -A
                          </Badge>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className="ddpad">
                          <Badge variant="secondary" 
                          // onClick={changeThemeToogle}
                          >
                            <i className="fa fa-adjust"></i>
                          </Badge>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <div className='d-inline-block'>
                    <a href="/register" className="headerRow2 alignText landscape">Register</a>
                            <a href="#loginform" className="headerRow2 alignText contentAlign"> Login</a>
                    </div>

                    {/* {isLogin()} */}

                    {/* {allLgnVisible ? displayAllLanguage() : ''} */}

                    {/* <a href="#home" className="">
                      {' '}
                      <div className="fontIcon">
                        <img alt="" />
                      </div>
                    </a> */}

                    {/* <div className="topnav">
                    <input autoFocus="true" type="text" placeholder="Search.." />
                  </div> */}

                    {/* <div className="topnav"><input autoFocus="" type="text" placeholder="Search.."/></div> */}

                    
                    
                    {/* <div className="Speakerlogo">
                      <button className="Speakerlogo"
                        onClick={() => myFunction()}
                      >
                        <img src="http://196.1.113.176/Talkify-master/speaker.png"
                          width="25" height="25" />
                        {console.log("my function")}</button>
                    </div>
                    <div>
                      {myFunction}

                    </div>
                    <script src="https://use.fontawesome.com/28b687dd3d.js"></script>
                    <div>
                      {getHeight}
                    </div> */}
                  </div>
                  {/* {fontSize()} */}
                </div>
            
                
                <Row className="domainrow hideMob " id="domainrow">
                  <div
                    className={`agri hideMob`
                    //  ${
                    //   pageDomain.toLowerCase() == 'agriculture' ? 'header-image-active' : ''
                    // }`
                  }
                  >
                    <img alt="" />
                  </div>
                  <Link
                    to="/agriculture"
                    title="Agriculture"
                    className={`headerRow2 agriText domainFont hideMob`
                    //  ${
                    //   pageDomain.toLowerCase() == 'agriculture' ? 'header-domain-active' : ''
                    // }`
                  }
                  >
                    {_lgn.agriculture}
                    {/* {_lgn != null ? _lgn.agriculture : " no lgn "} */}
                  </Link>

                  <div className="health hideMob" alt="health">
                    <img alt="" />
                  </div>
                  <Link
                    to="/health"
                    title="Health"
                    className={`headerRow2 healthText domainFont hideMob`
                    //  ${
                    //   pageDomain.toLowerCase() == 'health' ? 'header-domain-active' : ''
                    // }`
                  }
                  >
                    {_lgn.health}
                  </Link>

                  <div className="edu hideMob" alt="edu ">
                    <img alt="" />
                  </div>
                  <Link
                    to="/education"
                    title="Education"
                    className={`headerRow2 eduText domainFont hideMob`
                    //  ${
                    //   pageDomain.toLowerCase() == 'education' ? 'header-domain-active' : ''
                    // }`
                  }
                  >
                    {_lgn.education}
                  </Link>

                  <div className="sw domainSw hideMob" alt="hideMob">
                    <img alt="" />
                  </div>
                  <Link
                    to="/social-welfare"
                    title="Social Welfare"
                    className={`headerRow2 swText domainFont hideMob `
                    // ${
                    //   pageDomain.toLowerCase() == 'social-welfare' ? 'header-domain-active' : ''
                    // }`
                  }
                  >
                    {_lgn.social_welfare}
                  </Link>

                  <div className="domainEnergy hideMob energy" alt="hideMob energy">
                    <img alt="" />
                  </div>
                  <Link
                    to={
                      pageLanguage == lgn_code.HINDI ||
                      pageLanguage == lgn_code.MARATHI ||
                      pageLanguage == lgn_code.ASSAMESE ||
                      pageLanguage == lgn_code.TELUGU
                        ? '/rural-energy'
                        : '/energy'
                    }
                    title="Energy"
                    className={`headerRow2 energyText domainFont hideMob `
                    // ${
                    //   pageDomain.toLowerCase() == 'energy' ? 'header-domain-active' : ''
                    // }`
                  }
                  >
                    {_lgn.energy}
                  </Link>

                  <div className="domainEgov hideMob egov" alt="hideMob egov">
                    <img alt="" />
                  </div>
                  <Link
                    to="/e-governance"
                    title="e-Governance"
                    className={`headerRow2 egovText domainFont hideMob`
                    //  ${
                    //   pageDomain.toLowerCase() == 'e-governance' ? 'header-domain-active' : ''
                    // }`
                  }
                  >
                    {_lgn.e_governance}
                  </Link>

                  <div className="domainEgov hideMob scheme" alt="scheme">
                    <img alt="" />
                  </div>
                  <Link
                    to="/schemes"
                    title="Schemes"
                    className={`headerRow2 egovText domainFont hideMob `
                    // ${
                    //   pageDomain.toLowerCase() == 'schemes' ? 'header-domain-active' : ''
                    // }`
                  }
                  >
                    {_lgn.schemes}
                  </Link>

                  <div className="domainEgov hideMob aspirational" alt="aspirational">
                    <img alt="" />
                  </div>
                  <Link
                    to="/aspirational"
                    title="Aspirational"
                    className={`headerRow2 egovText domainFont hideMob `
                    // ${
                    //   pageDomain.toLowerCase() == 'aspirational' ? 'header-domain-active' : ''
                    // }`
                  }
                  >
                    {_lgn.aspirational_districts}
                  </Link>
                  {/* <Link to="/events" className="headerRow2 aspirationalText domainFont hideMob">
                    Events
                  </Link>

                  <Link to="/news" className="headerRow2 aspirationalText domainFont hideMob">
                    News
                  </Link> */}
                </Row>
              
              </Col>
            </Row>
          </div>
         
        </div>
       
      ) : (
        ''
      )}
      <a className="move-top" title="Back to Top" href="">
        <i class="fa fa-arrow-circle-up" style={{ fontSize: '26px', marginTop: '4px' }}></i>
      </a>
      {/* {pages != null && (props.match.url == pages.path || props.match.url == pages.path + '/') ? back_browser() : ''} */}
      {/* {sideWidth < 737 && props.location.pathname != '/' ? (
        <a class="go-back" title="Back to Top" onClick={() => history.goBack()}>
          <i class="fa fa-arrow-circle-left" style={{ fontSize: '26px', marginTop: '4px' }}></i>
        </a>
      ) : (
        ''
      )} */}
      {/* <Scroll2TopButton /> */}
      <div class="float-sm">
        
        <div id="hidethis" class="fl-fl float-pn">
          <i class="fa fa-group webicon"></i>
          {/* <a href="poll" target="_blank"><div id='hidethis'>Wait for 3 seconds...</div><div class="blink">more blinking text</div></a> */}
          {pageLanguage == lgn_code.MARATHI ? (
            <a href="https://vikaspedia.in/webinar/vikaspedia-webinar">
              <div class="webi" style={pageLanguage == lgn_code.HINDI ? { fontSize: '14px' } : {}}>
                {pageLanguage == lgn_code.HINDI
                  ? 'वेबिनार के लिए पंजीकरण करें'
                  : 'Register for Webinar'}
              </div>
            </a>
          ) : (
            <Link
              to={
                pageLanguage == lgn_code.HINDI
                  ? '/webinar/विकासपीडिया-वेबिनार'
                  : '/webinar/vikaspedia-webinar'
              }
            >
              <div class="webi" style={pageLanguage == lgn_code.HINDI ? { fontSize: '14px' } : {}}>
                {pageLanguage == lgn_code.HINDI
                  ? 'वेबिनार के लिए पंजीकरण करें'
                  : 'Register for Webinar'}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
    </Router>
  );
};

export default Header;