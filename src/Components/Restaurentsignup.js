import React, { Component } from 'react';
import firebase from '../Config/firebaseintegration';
import { update_user } from '../store/action';
import { connect } from 'react-redux';

class Restsignup extends Component {
    constructor(){
        super();
        this.state = {
            email:'',
            password:"",
            name:"",
            country:"",
            city:"",
            signedUp:false,
        }
        this.signup = this.signup.bind(this);
    }
    signup(){
      this.setState({signedUp:true})
      const {email,password,name,country,city} = this.state;
      firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        const uid = firebase.auth().currentUser.uid;
        const obj = {
          email,
          password,
          name,
          country,
          city,
          uid,
          type:"restaurent",
        }
        firebase.database().ref("users/"+uid).set(obj).then(()=>{
          this.props.store_user(obj);
          this.props.history.push(`/restaurentpanel/${obj.name}`)
        }).catch((err)=>{
          this.setState({signedUp:false})
        })
      }).catch((err)=>{
        this.setState({signedUp:false})
      })
    }
    render() {
      return (
        <div>
        <div>
       <div className='homeBase'><p><i class='fas fa-cheese' style={{color:"rgba(26, 235, 60, 0.836)"}}></i> foodsome</p></div>
       <p><i class='fas fa-sort-down'></i></p>  
       <div className={"loginFromArea"}>
         <form action='JavaScrip:void(0)' onSubmit={this.signup}>
         <p>Sign up to <span style={{fontWeight:"bold",color:'#FC615D'}}>foodsome </span>(restaurent)</p>
         <small>Enter your details below.</small>
             <div style={{margin:'20px'}}>
             <input type='text' placeholder='restaurent name (unique)' onChange={(e)=>{this.setState({name:e.target.value})}} />
             <input type='email' placeholder='email' onChange={(e)=>{this.setState({email:e.target.value})}} />
             <input type='text' placeholder='your country' onChange={(e)=>{this.setState({country:e.target.value})}} />
             <input type='text' placeholder='your city' onChange={(e)=>{this.setState({city:e.target.value})}} />
             <input type='password' placeholder='password' onChange={(e)=>{this.setState({password:e.target.value})}} />
             <p style={{textAlign:"left", paddingLeft:"10px"}}>Restaurent Certificate
                <span > ( Optional ) </span>
                </p>
                <input type="file" title="Certificate" />
             </div>
             <small style={{textAlign:"left",cursor:'pointer'}} onClick={()=>{this.props.history.push(`/login`)}}>Already have an account? Login</small>
             <hr />
             {this.state.signedUp && <p className={'loader'}><i class="fa fa-gear fa-spin"></i> Please Wait</p>}
             <button className={'loginBtn'}><i class='fas fa-sign-in-alt'></i> SIGN UP</button>
         </form>
       </div>    
     </div>
   </div>
          
      )
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        store_user: (user) => dispatch(update_user(user))
    }
}

export default connect(null, mapDispatchToProps)(Restsignup);