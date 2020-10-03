import { Badge } from '@material-ui/core';
import React from 'react';
import web from  '../src/images/img_4.jpg';

const Card=() =>{
    return(
<>
  <div className="col-12 card p-4 shadow blog_left__div">
  <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
  <h1> TOPIC OF FIRST POST</h1>
  <p className="blog-title"><span className="font-weight-bold"> Title Description,</span> {new Date().toDateString()}</p>
  </div>
  <figure className="right_side__img mb-5">
  <img src={web} height="600px"/>
  </figure>
  <p > <span className="font-weight-bold">SADAF KHAN</span>
     this isim..... </p>
     <p>mmjjhhhh</p>
     <div className="d-flex justify-content-between left_div_btns" >
     <div>
     <button className="left_div_like" id="like_btn"> <i class="fa fa-thumbs-up"></i> Like </button>
</div>
 <div>
     <button className="left_div_reply" onClick="reply('reply1')"> Replies<Badge className="bg-white text-dark p-2">1</Badge></button>
</div>
</div>
</div>
</>

    );
};
export default Card;