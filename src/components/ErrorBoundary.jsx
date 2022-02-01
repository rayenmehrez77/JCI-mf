import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../images/error.png";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col-reverse py-8 items-center lg:max-w-7xl max-w-full mx-auto px-16">
          <div className="space-y-8 text-center mt-8">
            <h1 className="lg:text-7xl text-3xl font-bold text-gray-800">
              Ooops!
            </h1>
            <p className="lg:text-xl text-base">
              Nous sommes désolés que la page que vous avez demandée n'ait pas
              été trouvée. Veuillez retourner à la page d'accueil
            </p>
            <Link
              to="/"
              className="px-4 py-2 bg-orange-dark inline-block  text-white font-medium"
            >
              Acceuil
            </Link>
          </div>
          <img
            src={errorImage}
            alt="Error boundary"
            className="lg:max-w-lg max-w-full"
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
