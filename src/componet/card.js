import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function card(props) {
  const { src, title, description, link, buttonText } = props;
  return (
    <div className="card-body">
      <Card style={{ width: "24rem" }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button href={link} variant="primary">
            {buttonText}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default card;
