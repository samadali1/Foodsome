import React, { Component } from 'react';
import firebase from '../Config/firebaseintegration';
import { connect } from 'react-redux';
import Rbg from '../Assets/Wallpaper/rbg.jpg'
class Userpanel extends Component {
  constructor(){
    super();
    this.state = {
      rests: [],
    }
    this.logout = this.logout.bind(this)
  }
  logout(){
    firebase.auth().signOut().then(()=>{
      localStorage.clear();
      this.props.history.push(`/login`)
    })
  }
  componentDidMount(){
      firebase.database().ref("users").on("value",(data)=>{
        const dt = data.val();
        const r = [];
        for(var key in dt){
          if(dt[key].type==="restaurent"){
            r.push(dt[key])
          }
        }
        this.setState({rests:r})
      })
  }
  render() {
    console.log(this.props)
    console.log(this.state.rests)
    return (
      <div>
      <div className='sideNav'>
      <div className='homeBase'><p><i class='fas fa-cheese' style={{color:"rgba(26, 235, 60, 0.836)"}}></i> foodsome</p></div>
       <div className='tabs'>
         <p><i class='fas fa-industry'></i> - Restaurents</p>
         <p><i class='fas fa-heart'></i> - My Requests</p>
       </div>
       <div className={"categories"}>
         <p style={{fontFamily:"Oswald",color:"white",fontSize:"120%"}}>Main Categories</p>
         <button className={"categoriesBtns"}>Fast Food</button>
         <button className={"categoriesBtns"}>Chinese</button>
         <button className={"categoriesBtns"}>B.B.Q</button>
         <button className={"categoriesBtns"}>Drinks</button>
       </div>
       <div>
         <button className={'logoutBtn'} onClick={this.logout}><i class='fas fa-sign-in-alt'></i> LOGOUT</button>
       </div>
       </div>
       <div className={"sideContent"}>
       <div className={"searchInput"}>
         <input type='text' placeholder='search restaurents' /><button><i className={"fa fa-search"}></i></button>
       </div>
       <hr />
       <div>
         <h2>All Nearby Restaurents</h2>
         <i class='fas fa-sort-down'></i>
         <div className={"rests"}>
          {this.state.rests.map((v,i)=>{return <div><h2>( {i+1} )</h2><img src={Rbg} width='80%' /><p>{v.name}</p></div>})}
         </div>
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

export default connect(mapStateToProps, null)(Userpanel);