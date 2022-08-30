import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

// import MessengerCustomerChat from "react-messenger-customer-chat";
import { Dropdown, Navbar, Spinner, ErrorBoundary } from "./components";
import { HomePage } from "./Pages";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="font-signika h-screen mt-20">
      <Navbar
        showNav={showNav}
        clicked={clicked}
        setClicked={setClicked}
        scrollToTop={scrollToTop}
      />
      {clicked ? (
        <Dropdown
          showNav={showNav}
          clicked={clicked}
          setClicked={setClicked}
          scrollToTop={scrollToTop}
        />
      ) : null}
      <Switch>
        <ErrorBoundary>
          <Route exact path="/" component={HomePage} />
        </ErrorBoundary>
      </Switch>
      {/* <MessengerCustomerChat
        pageId={process.env.PAGE_ID}
        appId={process.env.APP_ID}
      /> */}
    </div>
  );
}

export default App;
