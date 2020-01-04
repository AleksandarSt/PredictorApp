import React from "react";
import { connect } from "react-redux";

import Menu from "../../components/Menu/Menu";

import { Container, Row, Col } from "reactstrap";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    //user: getUser(state),
  };
};

export default connect(mapStateToProps)(Layout);
