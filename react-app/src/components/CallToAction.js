import { Link } from "react-router";

export default function CallToAction() {
  return (
      <section className="hero-section">
        <div>
          <div className="title">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          </div>
          <p>
            Taste the Mediterranean by the sea. fresh ingredients, vibrant
            flavors, and warm hospitality, inviting you to relax and savor every
            moment.
          </p>
          <Link to="/booking" className="button">
            Reserve a Table
          </Link>
        </div>
        <div id="img" />
      </section>
  );
}
