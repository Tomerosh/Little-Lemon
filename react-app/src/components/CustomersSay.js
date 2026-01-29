import RatingStars from "./RatingStars";

export default function CustomersSay() {
  const customers = [
    {
      name: "Margaret",
      img: require("../assets/images/margaret.jpg"),
      rating: 5,
      review: "Very Good",
    },
    {
      name: "Dennis",
      img: require("../assets/images/dennis.jpg"),
      rating: 5,
      review: "Very Good",
    },
    {
      name: "Maryia",
      img: require("../assets/images/maryia.jpg"),
      rating: 5,
      review: "Very Good",
    },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div>
        {customers.map((customer) => {
          return (
            <div className="testimonials-card">
              <RatingStars num={customer.rating} />
              <div>
                <img className="avatar" src={customer.img} />
                <p>{customer.name}</p>
              </div>
              <p>"{customer.review}"</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
