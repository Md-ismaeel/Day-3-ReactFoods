import "../Style/quotesCard.css";
const QuotesCard = (props) => {
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>{props.description}</h1>
        <p style={{ fontSize: "16px", opacity: "0.8" }}>{props.authorName}</p>
      </div>
    </>
  );
};

export default QuotesCard;
