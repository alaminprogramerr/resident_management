import React from 'react'
import { Card, CardBody , FormGroup , Col, Row, Form, Input, Button ,  } from 'reactstrap'
import Axios from 'axios'
class ResidentForm  extends React.Component {
  constructor(){
    super()
    this.state={
        name:'',
        dateOfAdmission:'',
        dateOfBirth:'',
        cellPhoneNumber:'',
        phoneNumber:'',
        guardianNumber:'',
        gender:'',
        email:'',
        civilStatus:'',
        natureOfAdmission:'',
        educationalAttainment:'',
        religion:'',
        address:'',
        income:Number,
        typeOfUse:'',
        costSharing:'',
        patientStatus:'',
    }
    this.changeHandler=this.changeHandler.bind(this)
    this.submitHandler=this.submitHandler.bind(this)
  }
  changeHandler=(event)=>{
    event.preventDefault()
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler=()=>{

    Axios.post('http://localhost:5000/create-residents', {...this.state})
    .then(result=>{
      console.log(result)
      window.location.href='/admin/all-resident'
    })
    .catch(err=>{
      this.setState({
        err:err.response.data
      })
    console.log(this.state)
    })
  }
  render(){
    
    return (
        <div className="col-md-10 offset-md-1 mt-3">
            <Card>
                <CardBody>
                  <Form>
                    <h2>Residents Details :</h2>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>name</label>
                          <Input
                            name="name"
                            onChange={this.changeHandler}
                            placeholder="Enter Name "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Date Of Admission</label>
                          <Input
                            name="dateOfAdmission"
                            onChange={this.changeHandler}
                            placeholder="Enter Date Of Admission"
                            type="date"
                          />
                          
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Date Of Birth</label>
                          <Input
                            name="dateOfBirth"
                            onChange={this.changeHandler}
                            placeholder="Date Of Birth "
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Cell Phone Number</label>
                          <Input
                            name="cellPhoneNumber"
                            onChange={this.changeHandler}
                            placeholder="Enter Cell Phone Number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            name="phoneNumber"
                            onChange={this.changeHandler}
                            placeholder="phoneNumber"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Guardian Number</label>
                          <Input
                            name="guardianNumber"
                            onChange={this.changeHandler}
                            placeholder="Enter Guardian Number"
                          />>
                        </FormGroup>
                      </Col>
                    </Row>
                    <h2>Additional Information</h2>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Gender</label>
                          <select name="gender" onChange={this.changeHandler}  className="form-control">
                            <option style={{background:"gray"}}>Select Gender</option>
                            <option style={{background:"gray"}} value="Male">Male</option>
                            <option style={{background:"gray"}} value="Female">Female</option>
                            <option style={{background:"gray"}} value="Other">Other</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            name="email"
                            onChange={this.changeHandler}
                            placeholder="Enter Email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Civil Status</label>
                          <Input
                            name="civilStatus"
                            onChange={this.changeHandler}
                            placeholder="Civil Status"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Nature Of Admission</label>
                          <Input
                            name="natureOfAdmission"
                            onChange={this.changeHandler}
                            placeholder="Enter Nature Of Admission"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Educational Attainment</label>
                          <Input
                            name="educationalAttainment"
                            onChange={this.changeHandler}
                            placeholder="Educational Attainment"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Guardian Number</label>
                          <Input
                            name="guardianNumber"
                            onChange={this.changeHandler}
                            placeholder="Guardian Number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <h2>More Information</h2>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            name="address"
                            onChange={this.changeHandler}
                            placeholder="Address "
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Religion </label>
                          <Input
                            name="religion"
                            onChange={this.changeHandler}
                            placeholder="Religion"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Income</label>
                          <Input
                            name="income"
                            onChange={this.changeHandler}
                            placeholder="Income "
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Type Of Use </label>
                          <Input
                            name="typeOfUse"
                            onChange={this.changeHandler}
                            placeholder="Type Of Use"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Cost Sharing</label>
                          <Input
                            name="costSharing"
                            onChange={this.changeHandler}
                            placeholder="Cost Sharing "
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                          <label>Patient Status </label>
                          <Input
                            name="patientStatus"
                            onChange={this.changeHandler}
                            placeholder="Patient Status"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button onClick={this.submitHandler}  color="success" > Create </Button>
                  </Form>
                </CardBody>
                <p style={{visibility:"hidden" , lineHeight:"0"}}>
                ownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                ownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                ownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people iconsownload all the team icons you need. Choose between 17309 team icons in both vector SVG and PNG format. Related icons include group icons, people icons
                </p>
            </Card>
        </div>
    )
  }
}

export default ResidentForm


