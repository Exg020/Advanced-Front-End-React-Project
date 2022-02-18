import { Row, Col } from "react-bootstrap";
import ActivityList from "./ActivityList";

const Day = ({ day }) => {
  return (
    <>
      <Row className="my-container mx-1 my-4 py-2">
        <Row>
          <Col>
            <h3>{day.title}</h3>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <h3>{day.date}</h3>
          </Col>
        </Row>
        <ActivityList activityList={day.activities} />
      </Row>
    </>
  );
};

export default Day;
