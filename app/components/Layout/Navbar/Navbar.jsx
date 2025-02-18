import React, { useState, useEffect, useContext } from "react";
import { lazy, Suspense } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Container, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import LangContext from "../../../utils/LanguageContext";
import { useLanguage } from "../../../context/LanguageContext";
// import NavDropdown from "react-bootstrap/NavDropdown";

// import { FaAngleRight, FaSearch } from "react-icons/fa";
// import serviceImg from "../assets/Navbar/maha.png";
// import AuthComp from "../Common/Auth/Index";
// import CustomerAuthComp from "../Common/CustomerAuth/Index";
const cart = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/cart.svg";
const heart = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/heart.svg";
const person = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/person.svg";
const avatar = "https://d3gelo9cifr8ed.cloudfront.net/avatar.png";
const navLogo = "https://d3gelo9cifr8ed.cloudfront.net/assets/mahaNav.png";
const logo = "https://d3gelo9cifr8ed.cloudfront.net/assets/Logo.png";
const AuthComp = lazy(() => import("../../Common/Auth/Index"));
const CustomerAuthComp = lazy(() => import("../../Common/CustomerAuth/Index"));
const Booking = lazy(() => import("../../Booking/Index"));

// import { MdOutlineLanguage } from "react-icons/md";
import { GoDot } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import useSize from "../../../utils/useSize";
import { useAnimate } from "framer-motion";
// import { clearCart } from "../store/cart";
import { LogOutUser } from "../../../store/auth";
import { GlobalLoader } from "../../../store/globalLoader";

// scss
import "./style.scss";
import { MdOutlineLanguage } from "react-icons/md";

const MainNavbar = () => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";
  const router = useRouter(); // Router hook from next/navigation
  const { setLang } = useLanguage();
  const cartItems = useSelector((state) => state.cart.products);
  const UserData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isBookingModal = useSelector((state) => state.booking.isBookingModal);
  const [scrolled, setScrolled] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [CustomermodalShow, setCustomerModalShow] = useState(false);
  //
  const [showDropDownDesk, setshowDropDownDesk] = useState(false);
  const [showDropDownDeskAvatr, setshowDropDownDeskAvatr] = useState(false);

  const { height, width } = useSize();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (lang == "en" || lang == "ar") {
      setLang(lang);
    }
  }, []);

  useEffect(() => {
    animate("span", { scale: [1, 2, 1] }, { duration: 0.5 });
  }, [cartItems?.length]);

  const searchParams = useSearchParams();
  const userRef = searchParams.get("referral");

  useEffect(() => {
    localStorage.setItem("referral_code", userRef);
  }, [userRef]);

  // Todo: Remove Window Open and Return
  const handleLogin = () => {
    // window.open(`https://b2b-maha-balloons.prismcloudhosting.com/`, "_blank");
    // return;
    setModalShow(true);
  };
  // Todo: Remove Window Open and Return
  const handleCustomerLogin = () => {
    // window.open(`https://b2c-maha-balloons.prismcloudhosting.com/`, "_blank");
    // return;
    setCustomerModalShow(true);
  };
  const [hoveredItem, setHoveredItem] = useState({
    section: "experiences",
    item: null,
  });

  const translatePageContent = async (targetLanguage, appPath) => {
    console.log("🚀 ~ translatePageContent ~ targetLanguage:", targetLanguage);

    if (targetLanguage === "en") {
      // If the language is 'en', we reset to the default path
      router.replace(appPath);
      return;
    }

    dispatch(GlobalLoader(true));

    const elements = document.querySelectorAll(
      "*:not(script):not(style):not(meta)"
    );
    const textsToTranslate = [];
    const elementMap = [];

    // Collect all text content from the page
    elements.forEach((el) => {
      if (
        el.childNodes.length === 1 &&
        el.childNodes[0].nodeType === Node.TEXT_NODE
      ) {
        const text = el.textContent.trim();
        if (text) {
          textsToTranslate.push(text);
          elementMap.push(el);
        }
      }
    });

    if (textsToTranslate.length === 0) return;

    try {
      // Split the texts into chunks to avoid hitting API rate limits
      const chunkSize = 128;
      const textChunks = [];
      for (let i = 0; i < textsToTranslate.length; i += chunkSize) {
        textChunks.push(textsToTranslate.slice(i, i + chunkSize));
      }

      const translations = [];

      // Translate each chunk sequentially with a delay between requests
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      for (const chunk of textChunks) {
        const response = await fetch(
          "https://translation.googleapis.com/language/translate/v2?key=AIzaSyAwsu7qVMZhfwjpQfnw1GMAmrmiZlfcYBQ",
          {
            method: "POST",
            body: JSON.stringify({
              q: chunk,
              target: targetLanguage,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error(`API call failed: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.data && data.data.translations) {
          translations.push(...data.data.translations);
        }

        // Delay to prevent hitting the API rate limit
        await delay(1000); // 1-second delay
      }

      // Update text content with translated texts
      translations.forEach((translation, index) => {
        elementMap[index].textContent = translation.translatedText;
      });

      // Only navigate once all translations are done
      router.replace(appPath);
    } catch (error) {
      console.error("Translation Error:", error);
    } finally {
      dispatch(GlobalLoader(false)); // Hide loader when translation finishes
    }
  };

  const handleLanguageChange = async (value) => {
    console.log("🚀 ~ handleLanguageChange ~ value:", value);
    let paths = pathname.split("/");
    const langsData = ["en", "ar"];

    if (langsData?.includes(paths?.[1])) {
      // Change the language part in the URL
      let newPath = [...paths];
      newPath[1] = value; // Update the language in the path
      const CombinePath = newPath.join("/");
      router.replace(CombinePath);
      // Call the translation function and update the path
      // await translatePageContent(value, CombinePath);
    } else {
      // Prepend the selected language to the URL if it's not in the path
      const defpath = `/${value}${pathname}`;
      router.replace(defpath);
      // await translatePageContent(value, defpath);
    }

    // Optionally close any UI elements like dropdowns after language change
    setshowDropDownDesk(false);
  };

  // useEffect to trigger translation on page load or language change
  useEffect(() => {
    // Make sure the translation happens after the page reload (or path change)
    if (lang !== "en") {
      translatePageContent(lang, pathname);
    }
  }, [pathname, lang]); // Re-run when the pathname or targetLanguage changes

  // const translatePageContent = async (targetLanguage, appPath) => {
  //   console.log("🚀 ~ translatePageContent ~ targetLanguage:", targetLanguage);
  //   if (targetLanguage === "en") {
  //     // router.push("/");
  //     // router.push(`/${targetLanguage}/${pathname}`);
  //     router.replace(appPath);
  //     return;
  //   }

  //   const elements = document.querySelectorAll(
  //     "*:not(script):not(style):not(meta)"
  //   );
  //   const textsToTranslate = [];
  //   const elementMap = [];

  //   // Collect all text content
  //   elements.forEach((el) => {
  //     if (
  //       el.childNodes.length === 1 &&
  //       el.childNodes[0].nodeType === Node.TEXT_NODE
  //     ) {
  //       const text = el.textContent.trim();
  //       if (text) {
  //         textsToTranslate.push(text);
  //         elementMap.push(el);
  //       }
  //     }
  //   });

  //   if (textsToTranslate.length === 0) return;

  //   try {
  //     // Split texts into chunks of 128 segments each
  //     const chunkSize = 128;
  //     const textChunks = [];
  //     for (let i = 0; i < textsToTranslate.length; i += chunkSize) {
  //       textChunks.push(textsToTranslate.slice(i, i + chunkSize));
  //     }

  //     const translations = [];

  //     // Translate each chunk sequentially
  //     for (const chunk of textChunks) {
  //       const response = await fetch(
  //         "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBFPYrl8v_HRI1jm2nMHNtankZPdFGILPQ",
  //         {
  //           method: "POST",
  //           body: JSON.stringify({
  //             q: chunk,
  //             target: targetLanguage,
  //           }),
  //           headers: { "Content-Type": "application/json" },
  //         }
  //       );

  //       const data = await response.json();
  //       if (data.data && data.data.translations) {
  //         translations.push(...data.data.translations);
  //       }
  //     }

  //     // Update text content with translations
  //     return translations.forEach((translation, index) => {
  //       elementMap[index].textContent = translation.translatedText;
  //       // console.log("appPath", appPath);
  //       router.replace(appPath);
  //     });
  //   } catch (error) {
  //     console.error("Translation Error:", error);
  //   }
  // };

  // const handleLanguageChange = async (value) => {
  //   console.log("🚀 ~ handleLanguageChange ~ value:", value);
  //   // Split the pathname and change the language part
  //   let paths = pathname.split("/");
  //   const langsData = ["en", "ar"];

  //   if (langsData?.includes(paths?.[1])) {
  //     // Change the language in the URL
  //     let newPath = [...paths];
  //     newPath[1] = value; // Set new language
  //     let CombinePath = newPath.join("/");
  //     const resp = await translatePageContent(value, CombinePath);
  //     // Navigate to the new path
  //     // router.push(CombinePath);
  //   } else {
  //     // Prepend the selected language to the URL
  //     const defpath = `/${value}${pathname}`;
  //     const resp = await translatePageContent(value, defpath);
  //     // router.push(`/${value}${pathname}`);
  //   }
  //   // Update content after language change
  //   // await translatePageContent(value);
  //   setshowDropDownDesk(false);
  // };

  // const handleLanguageChange = async (value) => {
  //   console.log("🚀 ~ handleLanguageChange ~ value:", value);
  //   // setLang(value);
  //   let paths = pathname.split("/");
  //   let langsData = ["en", "ar"];
  //   if (langsData?.includes(paths?.[1])) {
  //     let newPath = [...paths];
  //     newPath[1] = value;
  //     let CombinePath = newPath.join("/");
  //     // router.push(CombinePath);
  //     const resp = await translatePageContent(value);
  //   } else {
  //     // router.push(`/${value}${pathname}`);
  //     const resp = await translatePageContent(value);
  //   }
  //   setshowDropDownDesk(false);
  // };
  const closeToggler = () => {
    document.getElementById("responsive-navbar-nav").className =
      "navbar-collapse collapse";
  };
  const OpenToggler = () => {
    document.getElementById("responsive-navbar-nav").className =
      "navbar-collapse collapse show";
  };
  const handleMouseEnter = (section, item) => {
    setHoveredItem({ section, item });
  };

  const handleMouseLeave = () => {
    setHoveredItem({ section: "experiences", item: null });
  };

  const TogglerLang = () => {
    setshowDropDownDesk(!showDropDownDesk);
  };
  const getContent = (section, item) => {
    const content = {
      experiences: {
        all: {
          title: { en: "All Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "standard-balloon-rides": {
          title: { en: "Standard Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "luxury-balloon-rides": {
          title: { en: "Luxury Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "private-balloon-rides": {
          title: { en: "Private Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
        "special-packages": {
          title: { en: "Special Packages", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: "",
          },
        },
      },
      // merchandise: {
      //   products: {
      //     title: { en: "Products", ar: "" },
      //     description: {
      //       en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      //       ar: "",
      //     },
      //   },
      // },
    };

    return (
      content[section][item] || {
        title: { en: "", ar: "" },
        description: { en: "", ar: "" },
      }
    );
  };

  const { section, item } = hoveredItem;
  const content = getContent(section, item);

  useEffect(() => {}, []);

  return (
    <>
      <Suspense fallback={"Loading..."}>
        <AuthComp
          show={modalShow}
          setShow={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </Suspense>
      {/* cust log */}
      {CustomermodalShow ? (
        <Suspense fallback={"Loading..."}>
          <CustomerAuthComp
            show={CustomermodalShow}
            onHide={() => setCustomerModalShow(false)}
          />
        </Suspense>
      ) : null}
      <Suspense fallback={"Loading..."}>
        <Booking />
      </Suspense>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar-area ${
          scrolled ? "fixed-top BgScroll" : "fixed-top"
        } ${lang === "ar" ? "r_dir" : "l_dir"}`}
      >
        <Container fluid={width <= 1200 ? true : false}>
          {/* //# brand navbar */}
          <Navbar.Brand
            // as={Link}
            href={`/${lang}`}
          >
            <div className="brandWrapper">
              <img
                className="imageWrapper"
                src={navLogo}
                alt="logo"
                width="180px"
              />
              <img
                src={logo}
                alt="Logo"
                className="imageWrapper MobilNavLogo"
              />
            </div>
          </Navbar.Brand>
          <div className="d-flex gap-1">
            {/* <div className="mobile_nav_icon">
            <Navbar>
              <Nav>
                <select
                  className="language_select"
                  aria-label="Language"
                  onChange={handleLanguageChange}
                  value={lang}
                >
                  <option value="en">En</option>
                  <option value="ar">AR</option>
                </select>
              </Nav>
            </Navbar>
          </div> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* //# Mobile Nav Icons */}
            <div className="NavBtMobl">
              <div className="iconsWrapper IconMobile">
                {/* <Dropdown
                  className={`lang_dropdown lang_dropdownMobil borderEnd ${
                    lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
                  }`}
                  show={showDropDownDesk}
                >
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    // onClick={TogglerLang}
                    onClick={() => {
                      setshowDropDownDesk(!showDropDownDesk);
                      setshowDropDownDeskAvatr(false);
                    }}
                  >
                    <MdOutlineLanguage size={25} />
                  </Dropdown.Toggle>
                  {showDropDownDesk ? (
                    <Dropdown.Menu className="dropItemsList">
                      <Dropdown.Item disabled>Language</Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleLanguageChange("en")}
                        className={
                          lang === "en" ? "active langItem" : "langItem"
                        }
                      >
                        <GoDot className="icon_lang" />
                        English
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleLanguageChange("ar")}
                        className={
                          lang === "ar" ? "active langItem" : "langItem"
                        }
                      >
                        <GoDot className="icon_lang" />
                        Arabic
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  ) : null}
                </Dropdown> */}

                <div
                  className="icons2"
                  onClick={() => {
                    router.push(`/${lang}/wishlist`);
                  }}
                >
                  <span>0</span>
                  {/* <img className="icns" src={heart} alt="" /> */}
                  <FaRegHeart size={20} />
                </div>
                <div
                  ref={scope}
                  className=" icons2"
                  onClick={() => {
                    // dispatch(clearCart());
                    router.push(`/${lang}/cart`);
                  }}
                >
                  <span>{cartItems?.length}</span>
                  {/* <img className="icns" src={cart} alt="" /> */}
                  <IoCartOutline size={25} />
                </div>
                <div
                  className="icons1"
                  onClick={(e) => {
                    if (UserData?.isAuth) {
                      return;
                    }
                    handleCustomerLogin(e);
                  }}
                >
                  {/* <img className="icns" src={heart} alt="" /> */}
                  {UserData?.isAuth ? (
                    <>
                      <Dropdown
                        className={`lang_dropdown lang_dropdownMobil ${
                          lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
                        }`}
                        show={showDropDownDeskAvatr}
                      >
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic2"
                          // onClick={TogglerLang}
                          onClick={() => {
                            setshowDropDownDeskAvatr(!showDropDownDeskAvatr);
                            setshowDropDownDesk(false);
                          }}
                        >
                          <img
                            src={avatar}
                            alt=""
                            height={25}
                            width={25}
                            className="avatrk"
                          />
                        </Dropdown.Toggle>
                        {showDropDownDeskAvatr ? (
                          <Dropdown.Menu className="dropItemsList">
                            <Dropdown.Item
                              onClick={() => dispatch(LogOutUser())}
                              className={
                                lang === "ar"
                                  ? "langItem link_Itemsk"
                                  : "langItem link_Itemsk"
                              }
                            >
                              <GoDot className="icon_lang" />
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        ) : null}
                      </Dropdown>
                    </>
                  ) : (
                    <FaRegUser size={20} />
                  )}
                </div>
              </div>
              {UserData?.isAuth ? (
                ""
              ) : (
                <button
                  className={
                    scrolled
                      ? "btnNl btnNl-primary btnNl-nav logBtn borderfixed"
                      : "btnNl btnNl-primary logBtn"
                  }
                  onClick={(e) => {
                    if (UserData?.isAuth) {
                      return;
                    }
                    handleLogin(e);
                  }}
                >
                  B2B Login
                </button>
              )}
            </div>
            {/* //# Nav Items */}

            <Nav className="mx-auto">
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/why-choose-us`}
                className={`nav-item ${
                  pathname === `/${lang}/why-choose-us` && "active"
                }`}
              >
                {lang == "ar" ? "Why Choose Us" : "Why Choose Us"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/experiences`}
                className={`nav-item ${
                  pathname === `/${lang}/experiences` && "active"
                }`}
              >
                {lang == "ar" ? "Experiences" : "Experiences"}
              </Nav.Link>
              {/* <NavDropdown
              title={lang == "ar" ? "" : "Experiences"}
              id="experiences-dropdown"
            >
              {/* <Container> */}
              {/* <div
                className={
                  lang == "ar"
                    ? "d-flex justify-content-between align-items-start r_dir"
                    : "d-flex justify-content-between align-items-start"
                }
              >
                <div className="dropdown-links-style dropdown-links-style-dropDs me-3">
                  <NavDropdown.Item
                    onMouseEnter={() => handleMouseEnter("experiences", "all")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      href={`/${lang}/experiences/all`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences/all` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "All"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("experiences", "standard-balloon-rides")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      href={`/${lang}/experiences/rides`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Standard Balloon Rides"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("experiences", "luxury-balloon-rides")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      href={`/${lang}/experiences`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Luxury Balloon Rides"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("experiences", "private-balloon-rides")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      href={`/${lang}/experiences`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Private Balloon Rides"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("experiences", "special-packages")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      href={`/${lang}/experiences`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/experiences` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Special Packages"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                </div>
                <div className="content_wrap">
                  <div className="nav_content_sec">
                    <h3>
                      {content.title[lang]
                        ? content.title[lang]
                        : lang == "ar"
                        ? ""
                        : "Standard Balloon Rides"}{" "}
                      <FaAngleRight className="angle-arrow" />{" "}
                    </h3>
                    <p>
                      {content.description[lang]
                        ? content.description[lang]
                        : lang == "ar"
                        ? ""
                        : "Soar above the stunning landscapes of Dubai with our unforgettable hot air balloon rides. Discover breathtaking views, serene skies, and the adventure of a lifetime. Book your flight today and see Dubai like never before!"}
                    </p>
                  </div>
                </div>
                <div className="img_wrap">
                  <figure>
                    <img src={serviceImg} alt="service" />
                  </figure>
                </div>
              </div> */}
              {/* </Container> */}
              {/* </NavDropdown>   */}
              {/* new dropdonw */}
              {/* <NavDropdown
              title={lang == "ar" ? "" : "Merchandise"}
              id="merchandise-dropdown"
            >
              {/* <Container> */}
              {/* <div
                className={
                  lang == "ar"
                    ? "d-flex justify-content-between align-items-start r_dir"
                    : "d-flex justify-content-between align-items-start"
                }
              >
                <div className="dropdown-links-style dropdown-links-style-dropDs me-3">
                  <NavDropdown.Item
                    onMouseEnter={() =>
                      handleMouseEnter("merchandise", "merchandise")
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      onClick={() => closeToggler()}
                      href={`/${lang}/merchandise`}
                      className={`nav-drop-link ${
                        pathname === `/${lang}/merchandise` && "active"
                      }`}
                    >
                      {lang == "ar" ? "" : "Merchandise"}
                      <FaAngleRight
                        className={
                          lang == "ar"
                            ? "angle-arrowAr"
                            : "angle-arrow .angle-arrowEn"
                        }
                      />
                    </Link>
                  </NavDropdown.Item>
                </div>
                <div className="content_wrap">
                  <div className="nav_content_sec">
                    <h3>
                      {content.title[lang]
                        ? content.title[lang]
                        : lang == "ar"
                        ? ""
                        : "Standard Balloon Rides"}{" "}
                      <FaAngleRight className="angle-arrow" />{" "}
                    </h3>
                    <p>
                      {content.description[lang]
                        ? content.description[lang]
                        : lang == "ar"
                        ? ""
                        : "Soar above the stunning landscapes of Dubai with our unforgettable hot air balloon rides. Discover breathtaking views, serene skies, and the adventure of a lifetime. Book your flight today and see Dubai like never before!"}
                    </p>
                  </div>
                </div>
                <div className="img_wrap">
                  <figure>
                    <img src={serviceImg} alt="service" />
                  </figure>
                </div>
              </div> */}
              {/* </Container> */}
              {/* </NavDropdown>  */}
              {/* <Nav.Link
                onClick={() => closeToggler()}
                as={Link}
                href={`/${lang}/merchandise`}
                className={`nav-item ${
                  pathname === `/${lang}/merchandise` && "active"
                }`}
              >
                {lang == "ar" ? "Merchandise" : "Merchandise"}
              </Nav.Link> */}
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/things-to-do-in-dubai`}
                className={`nav-item ${
                  pathname === `/${lang}/things-to-do-in-dubai` && "active"
                }`}
              >
                {lang == "ar"
                  ? "Things To Do In Dubai"
                  : "Things To Do In Dubai"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/testimonial`}
                className={`nav-item ${
                  pathname === `/${lang}/testimonial` && "active"
                }`}
              >
                {lang == "ar" ? "Testimonials" : "Testimonials"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/blogs`}
                className={`nav-item ${
                  pathname === `/${lang}/blogs` && "active"
                }`}
              >
                {lang == "ar" ? "Blogs" : "Blogs"}
              </Nav.Link>
              <Nav.Link
                onClick={() => closeToggler()}
                // as={Link}
                href={`/${lang}/contact-us`}
                className={`nav-item ${
                  pathname === `/${lang}/contact-us` && "active"
                }`}
              >
                {lang == "ar" ? "Contact Us" : "Contact Us"}
              </Nav.Link>
            </Nav>
            <Nav className="desktop_nav_icon">
              {/* <Nav.Link href="#en">En</Nav.Link> */}
              {/* <Nav>
                <select
                  className="language_select"
                  aria-label="Language"
                  onChange={handleLanguageChange}
                  value={lang}
                >
                  <option value="en">En</option>
                  <option value="ar">AR</option>
                </select>
              </Nav> */}
              <div className="d-flex justify-content-end align-items-center w-100">
                {/* //# Desktop Nav Icons */}

                <div className="iconsWrapper">
                  <div
                    className="icons1"
                    onClick={() => {
                      router.push(`/${lang}/wishlist`);
                    }}
                  >
                    <img className="icns" src={heart} alt="" />
                  </div>
                  <div
                    className="icons1"
                    onClick={(e) => {
                      if (UserData?.isAuth) {
                        return;
                      }
                      handleCustomerLogin(e);
                    }}
                  >
                    {UserData?.isAuth ? (
                      <>
                        <Dropdown
                          className={`lang_dropdown lang_dropdownMobil ${
                            lang === "ar"
                              ? "lang_dropdownAr"
                              : "lang_dropdownEn"
                          }`}
                          show={showDropDownDeskAvatr}
                        >
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basicdd"
                            // onClick={TogglerLang}
                            onClick={() => {
                              setshowDropDownDeskAvatr(!showDropDownDeskAvatr);
                              setshowDropDownDesk(false);
                            }}
                          >
                            <img
                              src={avatar}
                              alt=""
                              height={25}
                              width={25}
                              className="avatrk"
                            />
                          </Dropdown.Toggle>
                          {showDropDownDeskAvatr ? (
                            <Dropdown.Menu className="dropItemsList">
                              <Dropdown.Item
                                onClick={() => dispatch(LogOutUser())}
                                className={
                                  lang === "ar"
                                    ? "langItem link_Itemsk"
                                    : "langItem link_Itemsk"
                                }
                              >
                                <GoDot className="icon_lang" />
                                Logout
                              </Dropdown.Item>

                              {/* <Dropdown.Item
                                className="link_Itemsk"
                                onClick={() => dispatch(LogOutUser())}
                              >
                                Logout
                              </Dropdown.Item> */}
                            </Dropdown.Menu>
                          ) : null}
                        </Dropdown>
                      </>
                    ) : (
                      <img className="icns" src={person} alt="" />
                    )}
                  </div>
                  <div
                    className="icons2"
                    ref={scope}
                    onClick={() => {
                      router.push(`/${lang}/cart`);
                      // dispatch(clearCart());
                    }}
                  >
                    <span>{cartItems?.length}</span>
                    <img className="icns" src={cart} alt="" />
                  </div>
                </div>
                <div className="btnWrapper">
                  <Nav>
                    <div id="google_translate_element"></div>
                    <Dropdown
                      className={`lang_dropdown ${
                        lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
                      }`}
                      show={showDropDownDesk}
                    >
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        // onClick={TogglerLang}
                        onClick={() => {
                          setshowDropDownDesk(!showDropDownDesk);
                          setshowDropDownDeskAvatr(false);
                        }}
                      >
                        <MdOutlineLanguage size={20} />
                      </Dropdown.Toggle>
                      {showDropDownDesk ? (
                        <Dropdown.Menu className="dropItemsList">
                          <Dropdown.Item disabled>Language</Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleLanguageChange("en")}
                            className={
                              lang === "en" ? "active langItem" : "langItem"
                            }
                          >
                            <GoDot className="icon_lang" />
                            English
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => handleLanguageChange("ar")}
                            className={
                              lang === "ar" ? "active langItem" : "langItem"
                            }
                          >
                            <GoDot className="icon_lang" />
                            Arabic
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      ) : null}
                    </Dropdown>
                  </Nav>
                  {UserData?.isAuth ? (
                    ""
                  ) : (
                    <button
                      className={
                        scrolled
                          ? "btnNl btnNl-primary btnNl-nav logBtn borderfixed"
                          : "btnNl btnNl-primary logBtn"
                      }
                      onClick={(e) => {
                        if (UserData?.isAuth) {
                          return;
                        }
                        handleLogin(e);
                      }}
                    >
                      B2B Login
                    </button>
                  )}
                </div>
              </div>
              {/* <Nav.Link href="#search">
              <FaSearch fontSize={"20px"} />
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* <div className="NavBtMobl">
          <Dropdown
            className={`lang_dropdown lang_dropdownMobil ${
              lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"
            }`}
            show={showDropDownDesk}
          >
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              // onClick={TogglerLang}
              onClick={() => setshowDropDownDesk(!showDropDownDesk)}
            >
              <MdOutlineLanguage size={20} />
            </Dropdown.Toggle>
            {showDropDownDesk ? (
              <Dropdown.Menu className="dropItemsList">
                <Dropdown.Item disabled>Language</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleLanguageChange("en")}
                  className={lang === "en" ? "active langItem" : "langItem"}
                >
                  <GoDot className="icon_lang" />
                  English
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleLanguageChange("ar")}
                  className={lang === "ar" ? "active langItem" : "langItem"}
                >
                  <GoDot className="icon_lang" />
                  Arabic
                </Dropdown.Item>
              </Dropdown.Menu>
            ) : null}
          </Dropdown>
          <button
            className={
              scrolled
                ? "btnNl btnNl-primary logBtn borderfixed"
                : "btnNl btnNl-primary logBtn"
            }
            onClick={handleLogin}
          >
            B2B Login
          </button>
        </div> */}
      </Navbar>
    </>
  );
};

export default MainNavbar;
