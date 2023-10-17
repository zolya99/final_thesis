import React, {useState} from 'react';
import Axios from 'axios';

//import {useHistory} from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';



function Registration(props){

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
 

const submitPost = () => {
Axios.post('http://localhost:3000/api/create', {fname: fname, lname: lname, email: email, pw: password})
}

return(
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          
           
            <h1><span style={{color: 'hsl(218, 81%, 75%)'}}>EnglishWonders</span></h1>
          

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' name="fname" value={props.fname} onChange={(e)=> {
                    setFName(e.target.value)}}/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' name="lname" value={props.lname} onChange={(e)=> {
                    setLName(e.target.value)}}/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' name="email" value={props.email} onChange={(e)=> {
                    setEmail(e.target.value)}}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' name="pw" value={props.pw} onChange={(e)=> {
                    setPassword(e.target.value)}}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' onClick={submitPost}>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    
)  
}

export default Registration;