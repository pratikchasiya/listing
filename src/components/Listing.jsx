import React, { Fragment } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const Listing = (props) => {
  return (
 <Fragment>
    <div>
    <Card
  style={{
    width: '300px',
    height:'450px'
    
  }}
>
  <img
    alt="Sample"
    src={props.obj.img}
    style={{width:"300px", height:"300px"}}
  />
  <CardBody>
    <CardTitle tag="h5">
     {props.obj.title}
    </CardTitle>
   
    <CardText style={{textAlign:"justify"}}>
     {props.obj.description}

    </CardText>
    
  </CardBody>
</Card>
    </div>
 </Fragment>
  )
}

export default Listing