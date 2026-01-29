export default function RatingStars ({num}) {
  const stars = []
    for (let i=0;i<num;i++) {
      stars.push(
        <img src={require('../assets/images/star.png')}/>
      )
    }

  return <div className="stars">
    {stars}
  </div>
}
