import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap";
import JWTDecoder from 'jwt-decode'
class UserProfile extends React.Component {

   logout= ()=>{
     localStorage.removeItem('resident-token')
     window.location.href='/'
  }
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="col-md-6 offset-md-3">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <h5 className="title">
                        {window.localStorage.getItem('resident-token')?
                        JWTDecoder(window.localStorage.getItem('resident-token')).name:"Jack"
                        }
                      </h5>
                      
                      <h5 className="title">
                        {window.localStorage.getItem('resident-token')?
                        JWTDecoder(window.localStorage.getItem('resident-token')).email:"example@gmial.com"
                        }
                      </h5>
                      <Button color="danger" onClick={this.logout}>Log Out</Button>
                    </a>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
