import { Link } from "react-router";
import greekSalad from "../assets/images/greek salad.jpg"
import Bruschetta from "../assets/images/bruchetta.svg"
import pasta from "../assets/images/pasta.jpg"


export default function Specials() {
  return (
      <section className="highlights">
        <div>
          <h2>Our Specials</h2>
          <Link to="/order" className="button">
            Order Now
          </Link>
        </div>
        <div id="cardbox">
            <div className="card">
                <img src={greekSalad}/>
                <div className="card-content">
                <div className="card-title">
                    <h3>Greek Salad</h3>
                    <h4>$12.99</h4>
                </div>
                <p>Crisp cucumbers, ripe tomatoes, olives, and creamy feta, tossed with extra virgin olive oil and oregano.</p>
                <div className='card-button'>Order for Delivery 🏍</div>
            </div>
            </div>
            <div className="card">
                <img src={Bruschetta}/>
                <div className="card-content">
                <div className="card-title">
                    <h3>Bruschetta</h3>
                    <h4>$12.99</h4>
                </div>
                <p>Grilled rustic bread topped with fresh tomatoes, garlic, basil, and a drizzle of olive oil.</p>
                <div className='card-button'>Order for Delivery 🏍</div>
            </div>
            </div>
            <div className="card">
                <img src={pasta}/>
                <div className="card-content">
                <div className="card-title">
                    <h3>Pasta Rosé</h3>
                    <h4>$12.99</h4>
                </div>
                <p>Al dente pasta in a delicate rosé sauce, blending rich tomato flavors with smooth cream and herbs.</p>
                <div className='card-button'>Order for Delivery 🏍</div>
                
            </div>
            </div>
        </div>
      </section>
  );
}
