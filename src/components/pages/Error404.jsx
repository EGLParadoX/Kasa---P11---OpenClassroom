import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="Error">
      <h2 className="Error-Title">404</h2>
      <p className="Error-Subtitle">Oups, la page que vous demandez n&apos;existe pas.</p>
      <p >
        <Link to="/" className="Error-Link">Retour à la page d&apos;accueil</Link>
      </p>
    </div>
  );
};

export default Error404;
