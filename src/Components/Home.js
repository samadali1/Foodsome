import React, { Component } from 'react';
import Wall from '../Assets/Wallpaper/wall3.jpg'
class Home extends Component {
  render() {
    return (
      <div>
        <div className='homeBase'><p><i class='fas fa-cheese' style={{color:"rgba(26, 235, 60, 0.836)"}}></i> foodsome</p></div>
            <img src={Wall} className={'wallpaper'} />
        <div className={'homeContent'}>
            {/* <h3>food delivers!</h3> */}
            <p><i class='fas fa-quote-left'></i> Hungry? We are foodsome, an online food deliver company. You can order any type of food anytime from anywhere restaurent from your city or nearby. and if you are a restaurent you can register yourself with us to grow your buisness will add you in our menu card. <i class='fas fa-quote-right'></i></p>
            <p><i class='fas fa-sort-down'></i></p>            
            <button className={'LoginButton'} onClick={()=>{this.props.history.push(`/login`)}}><i class='fas fa-sign-in-alt'></i> LOGIN</button>
            <button onClick={()=>{this.props.history.push(`/usersignup`)}}><i class='fas fa-share'></i> SIGN UP AS USER</button>
            <i class='fas fa-exchange-alt' style={{color:'rgba(26, 235, 60, 0.836)'}}></i>
            <button onClick={()=>{this.props.history.push(`/restaurentsignup`)}}><i class='fas fa-share'></i> SIGN UP AS RESTAURENT</button>
        </div>
            <p style={{margin:"20px auto;"}}>@Copyrights 2018-19. All Rights Reserved.</p>
      </div>
    )
  }
}

export default Home;