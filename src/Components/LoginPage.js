import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button  } from '@material-ui/core';
import { connect } from 'react-redux';

import * as actions from '../actions/loginAction';
import FolderPage from './FolderPage';
import history from './history';

class LoginPage extends Component {
 constructor(props){
     super(props)
     this.state={
         userId:'',
         password:'',
         callNextPage:false
     }
 }

  userId=(e)=>{
      this.setState({
          userId:e.target.value
      })
  }

  password=(e)=>{
    this.setState({
        password:e.target.value
    })
}

loginButtonClick =() =>{
  this.props.sendLoginDetails(this.state.userId,this.state.password)
    //this.props.history.push('/Folder')
}
  render() {
    if(this.props.users==true){
      this.props.history.push('/Folder') 
    }
    return (
      <>
        Login
        <form  noValidate autoComplete="off">
        <h3>User ID</h3>
  <TextField id="standard-basic" label="User Id" onChange={(e)=>this.userId(e)}/>
  <br/>
  <h3>Password</h3>
  <TextField id="standard-basic" label="Password" onChange={(e)=>this.password(e)}/>
  <br/>
  <br/>
  <Button variant="contained" color="primary" onClick={()=>this.loginButtonClick()}>
  Login
</Button>
</form>
    
      </>
    )
  }
}

export default connect((state => state), actions)(LoginPage);
