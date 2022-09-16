import React from 'react';

const MenuBanner = () => {
  return (
    <div>
        
    </div>
  )
}

export default MenuBanner;


const parallax = document.getElementById('parallax');

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});


// const Banner = () => {
//     return (
//       <div className="large--banner--photo">
//         {/*  <img src='./images/banner_photo_1.png' className='large--banner--photo'/> */}
//       </div>
//     );
//   };
  
//   export default Banner;
