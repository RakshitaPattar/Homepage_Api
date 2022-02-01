import axios from "axios";
import React, { useState, useEffect,} from "react";
import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ClipLoader from "react-spinners/ClipLoader";

//  amit part
//  const [index, setIndex] = useState(0);
// const handleSelect = (selectedIndex, e) => {
// setIndex(selectedIndex);
// };

const settings={
  items:5,
  loop :true,
  autoplay:true,
  autoplayHoverPause:true,
  margin:30,
 }
 const link=()=>{
    window.open('http://stage.forathletes.com/')
 }


export default function Api() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const ApiFetch = async () => {
    try {
      const data = await axios
        .get(
          "https://api.buttercms.com/v2/pages/*/home_login/?preview=1&auth_token=22d6121f48b6bd88625f2259902ec6b61bd6e41f"
        )
        .then((res) => {
          console.log(res);
          setItems(res.data.data.fields.homepage);
          setLoading(true);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    ApiFetch();
  }, []);

  return (
    <div className="homepage">
      {loading ? (
        <div>
          <div className="backvideo-container">
            <div className="video">
              <img src={items.video} alt="img" height="800px" width="1300px"></img>
            </div>
            <div className="text-wrapper">
              <h1>{items.text1_on_video}</h1>
              <h1>{items.text2_on_video}</h1>
              <h1>{items.text3_on_video}</h1>
            </div>
          </div>

          {/* central part */}

          <div>
            <div className="text2">
              <h1>{items.title1}</h1>
            </div>
            <div className="title1">
              {items.ecosystem_items.map((item) => (
                <div key={item.id}>
                  <div className="detail">
                    <img src={item.image} alt="aa" className="imagesize"></img>
                    <br />
                    <h1>{item.title}</h1>
                    <br />
                    <p>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Amit part */}
          <div className="container">
            <div className="slide">
              <Carousel fade>
                <Carousel.Item>
                  <img src={items.athlete_pic} alt="monica Puig" />
                  <Carousel.Caption>
                    <h2>{items.athlete_name}</h2>
                    <p>WTA profesional Tennis player</p>
                    <p>2016 Rio olympics Gold medalist</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={items.athlete_pic2} alt="Michael Jordan" />
                  <Carousel.Caption>
                    <h2>{items.athlete_name2}</h2>
                    <p>WTA professional Tennis player</p>
                    <p>2016 Rio olympics Gold medalist</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="disc">
              <div className="logo">
                <h2>{items.athlete_info_title}</h2>
                <img src="http://stage.forathletes.com/media/wysiwyg/running.png" />
              </div>
              <p>{items.athlete_info_description}</p>
              <div className="buttons">
                <button type="button">Learn More</button>
              </div>
            </div>
          </div>

          {/* brands */}
           <div class='container-fluid' >
       <div className='title'>
       <h1>{items.brands_title}</h1>
      </div>

    <div class='container-slider' >   
          <OwlCarousel className='owl-carosel' >  
              {
                items.brands_img.map((item)=>
                <div className='container-a'>

                <div key={item.id}>
                  <img src={item.img}  className="item-1" alt=''/>
                </div>
                </div>)
              }
                       
        </OwlCarousel>  

      </div >  

    <div className='button'>
       <button className='buttonstyle'onClick={link}>Join the Team</button>
    </div>
          </div>


          {
  /* Charity part */
}

 <div className="container d-flex charity">
   <div className="cont-text">
     <div className="cont-charity">{items.charity_title}</div>
     <div className="cont-desc">
       <p>{items.charity_info}</p>
     </div>
     <div className="cont-button-learnmore">
       <button className="learn-more">Learn More</button>
     </div>
   </div>
   <div className="cont-image">
     <img className="image" src={items.image3} alt="Image of Food" />
   </div>
 </div>
        </div>
      ) : (
        // <h1>Loading</h1>
        <ClipLoader color={"#f37A24"} loading={loading} size={30} />
      )}
    </div>
  );
}

// return (
//   <div>
//     <div>
//       <div className="backvideo-container">
//         <div className="video">
//           <img src={items.video} alt="img"></img>
//         </div>
//         <div className="text-wrapper">
//           <h1>{items.text1_on_video}</h1>
//           <h1>{items.text2_on_video}</h1>
//           <h1>{items.text3_on_video}</h1>
//         </div>
//       </div>

{
  /* central  */
}
{
  /* <div>
        <div className="text2">
          <h1>{items.title1}</h1>
        </div>
        <div className="title1">
          {items.ecosystem_items.map((item) => (
            <div key={item.id}>
              <div className="detail">
                <img src={item.image} alt="aa" className="imagesize"></img>
                <br />
                <h1>{item.title}</h1>
                <br />
                <p>{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>  */
}

{
  /* Amit part */
}
// <div className="container">
//   <div className="slide">
//     <Carousel fade>
//       <Carousel.Item>
//         <img src={items.athlete_pic} alt="monica Puig" />
//         <Carousel.Caption>
//           <h2>{items.athlete_name}</h2>
//           <p>WTA profesional Tennis player</p>
//           <p>2016 Rio olympics Gold medalist</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={items.athlete_pic2} alt="Michael Jordan" />
//         <Carousel.Caption>
//           <h2>{items.athlete_name2}</h2>
//           <p>WTA professional Tennis player</p>
//           <p>2016 Rio olympics Gold medalist</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   </div>
//   <div className="disc">
//     <div className="logo">
//       <h2>{items.athlete_info_title}</h2>
//       <img src="http://stage.forathletes.com/media/wysiwyg/running.png" />
//     </div>
//     <p>{items.athlete_info_description}</p>
//     <div className="buttons">
//       <button type="button">Learn More</button>
//     </div>
//   </div>
// </div>

{
  /* brands part */
}

//  <div class='container-fluid' >
//       <div className='title'>
//       <h1>{items.brands_title}</h1>
//        </div>

{
  /* <div class='container-slider' >   
          <OwlCarousel className='owl-carosel' >  
              {
                items.brands_img.map((item)=>
                <div className='container-a'>

                <div key={item.id}>
                  <img src={item.img}  className="item-1" alt=''/>
                </div>
                </div>)
              }
                       
        </OwlCarousel>  

      </div >   */
}
//    <div className='button'>
//       <button className='buttonstyle'onClick={link}>Join the Team</button>
//    </div>
// </div>

{
  /* Charity part */
}

// <div className="container d-flex charity">
//   <div className="cont-text">
//     <div className="cont-charity">{items.charity_title}</div>
//     <div className="cont-desc">
//       <p>{items.charity_info}</p>
//     </div>
//     <div className="cont-button-learnmore">
//       <button className="learn-more">Learn More</button>
//     </div>
//   </div>
//   <div className="cont-image">
//     <img className="image" src={items.image3} alt="Image of Food" />
//   </div>
// </div>

//       </div>
//     </div>
//   );
//  }
// export default Homepage;
