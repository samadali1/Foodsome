import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../Config/firebaseintegration';

class Restaurentpanel extends Component {
  constructor(){
    super();
    this.logout = this.logout.bind(this)
  }
  logout(){
    firebase.auth().signOut().then(()=>{
      localStorage.clear();
      this.props.history.push(`/login`)
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
       <div>
      <div className='sideNav'>
      <div className='homeBase'><p><i class='fas fa-cheese' style={{color:"rgba(26, 235, 60, 0.836)"}}></i> foodsome</p></div>
         <p style={{fontFamily:"Oswald",color:"white",fontSize:"120%", margin:"10px auto"}}>All Requests</p>
       <div className='tabs'>
       <p><i class='fa fa-clock-o'></i>  Pending</p>
         <p><i class='fa fa-refresh'></i>  In Progress</p>
         <p><i class='fa fa-check'></i>  Delievered</p>
       </div>
       <div>
         <button className={'logoutBtn'} onClick={this.logout}><i class='fas fa-sign-in-alt'></i> LOGOUT</button>
       </div>
       </div>
       <div className={"sideContent"}>
       
       
  
       </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
      user: state.user,
  }
}
export default connect(mapStateToProps, null)(Restaurentpanel);