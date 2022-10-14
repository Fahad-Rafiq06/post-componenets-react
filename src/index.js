import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

const Post = ({author, title, text, image, buttonL,  comment, share }) => (
  <div className="post">

    <h4> {author} </h4>
    <h1> {title} </h1>
    <p> {text} </p>
    <img src={image} alt="placeholder" />
    <hr />
    <button className='button like'> {buttonL} </button>
    <button className='button comment'> {comment} </button>
    <button className='button share'> {share} </button>
    <hr />

  </div>
)


const Page = () => (
  <div>
    <h1 className='heading'>News Time</h1>
    <Post
      author="Author: Pippa Stevens"
      title="Inside the only lithium producer in the U.S., which provides critical mineral used in batteries by Tesla, EV makers"
      text="Silver Peak has gained newfound attention in recent years as the energy and transportation sectors race to wean themselves off climate-warming fossil fuels."
      image="https://image.cnbcfm.com/api/v1/image/107134161-alber1.jpg?v=1665745201&w=1920&h=1080"
      buttonL="Like"
      comment="Comment"
      share="Share"
    />
    <Post
      author="Author: PRNewswire"
      title="Thin Film and Printed Battery Market size is expected to Generate a revenue of USD 538.6 Million by 2028, Globally, at 23.7% CAGR: Brandessence Market Research"
      text="LONDON, Oct. 14, 2022 /PRNewswire/ -- The Global Thin Film and Printed Battery Market is reckoned to amass a valuation of USD 538.6 Million by 2028 from USD 121.5 Million in 2021, registering a CAGR of 23.7% over 2022-2028. Thin Film and Printed Battery are n.."
      image="https://mma.prnewswire.com/media/1392316/BEMR_Logo.jpg?p=facebook"
      buttonL="Like"
      comment="Comment"
      share="Share"    
      />
    <Post
     author="Author: Griffin Davis"
     title="EVs Used in Mining? New Contract to Reduce Jansen Potash Project's Carbon Emissions in Half"
     text="A new contract will help the mining project reduce CO2 emissions."
     image="https://1734811051.rsc.cdn77.org/data/images/full/413241/evs-used-in-mining-new-contract-to-reduce-jansen-potash-projects-carbon-emissions-in-half.jpg"
     buttonL="Like"
     comment="Comment"
     share="Share"
         />
         <Post
     author="Author: Pippa Stevens"
     title="Inside the only lithium producer in the U.S., which provides critical mineral used in batteries by Tesla, EV makers"
     text="Silver Peak has gained newfound attention in recent years as the energy and transportation sectors race to wean themselves off climate-warming fossil fuels."
     image="https://image.cnbcfm.com/api/v1/image/107134161-alber1.jpg?v=1665745201&w=1920&h=1080"
     buttonL="Like"
     comment="Comment"
     share="Share"
         />
         <Post
     author="Author: Arjun Kharpal"
     title="Musk says SpaceX cannot fund Starlink in Ukraine 'indefinitely' after report he asked Pentagon to pay"
     text="Elon Musk has claimed that the Starlink Ukraine operation has cost SpaceX $80 million so far, and will exceed $100 million by the end of the year."
     image="https://image.cnbcfm.com/api/v1/image/107122067-1663771026538-gettyimages-1242718802-spacexandt-mobilejointevent11.jpeg?v=1665744198&w=1920&h=1080"
     buttonL="Like"
     comment="Comment"
     share="Share"
         />
         <Post
     author="Author: Jamie Chisholm"
     title="Need to Know: The debt vigilantes are back, and even U.S. assets will struggle. Here’s what to buy instead, says one veteran fund manager."
     text="Return of the bond vigilantes tells us that debt now really matters"
     image="https://images.mktw.net/im-644238/social"
     buttonL="Like"
     comment="Comment"
     share="Share"
         />
  </div>
)


ReactDOM.render(<Page />, document.querySelector("#root"));