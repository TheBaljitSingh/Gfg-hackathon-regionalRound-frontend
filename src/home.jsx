import React from "react";
import "./home.scss";
import img from "./islamic-7078279_1280.png"
const Home = () => {
  return (


    //Gfg hachathon project ka home page

    <>
    <div className="main">
      <div className="header">
        <div className="logo">Fine</div>
        <div className="btns">
          <div className="service">Subcriptions</div>
          <div className="Bervice Provider">Service Provider</div>
        </div>
      </div>
      <div className="line"></div>
      <div className="front">
        <div className="left">
          <div className="t1">Finance &#128182; !!</div>
          <div className="t2">No Worry</div>
          <div className="t3">
            <div className="logo ">Fine</div>
            
            <div className="t3t"> Will make everything Fine &#128512;	</div>
          </div>
          <div className="t4">Scroll down to see services &#128071;</div>
        </div>
        <div className="right">
            <img src={img} alt=""></img>
        </div>
      </div>
        <div className="t4r">Scroll down to see services &#128071;</div>
       
      <div className="services">
      <div className="text">Se&#x20B9;vices</div>
        <div className="serv">
        <div className="box">
          <div className="text1">Get a Loan</div>
          <div className="text2">Looking for the funds to achieve your financial goals? Our loan services offer you the financial assistance you need to make your dreams a reality.
          </div>
        </div>
        <div className="box">
          <div className="text1">Consultancy</div>
          <div className="text2">Our team of experienced consultants will work with you to identify areas for improvement and implement effective solutions tailored to your specific needs.
          </div>
        </div>
        <div className="box">
          <div className="text1">Guarantee by Banks</div>
          <div className="text2">
          Looking for a way to mitigate risks and protect your business interests? We got your back.
          </div>
        </div>
        <div className="box">
          <div className="text1">Credits Cards</div>
          <div className="text2">Our credit card services offer a range of benefits and features to help you make the most of your money.
          </div>
        </div>
        <div className="box">
          <div className="text1">Advancements of Loans</div>
          <div className="text2">Our advancements of loans services offer a convenient and flexible way to get the cash you need when you need it.
          </div>
        </div>
        <div className="box">
          <div className="text1">Funds Remittance</div>
          <div className="text2">Looking for a cost-effective and convenient way to pay bills or make purchases in another country? Yes we do that to.
          </div>
        </div>
        <div className="box">
          <div className="text1">Online Banking</div>
          <div className="text2">Want to manage your finances anytime, anywhere? Our online banking services provide a secure and convenient way to access your accounts, view your transactions, and perform a range of financial transactions.
          </div>
        </div>
        <div className="box">
          <div className="text1">Assistant Bot</div>
          <div className="text2">Tired of waiting on hold or navigating complex phone systems to get the help you need? Our assistant bot service offers instant and personalized support that can help you resolve issues quickly and easily.
          </div>
        </div>
        </div>
      </div>
      <div className="provider">
        <div className="head">Provide your services at the right place</div>
        <div className="full">

          <div className="disc">Here at Fine we try to connect your financial skills and abilities to the clients that are searhing for you. Connection is not the only thing which we aim we aim for the better and secure future of our both side coustomers 
        </div>
        <button className="apply">Be a part of Fine</button>
        </div>
      </div>
    </div>
      <div className="footer">
        <div className="text1">developed under Solving for India Hackathon</div>
        <div className="text2">team name: MMBS(Parul University) </div>
      </div>
      </>
  );
};

export default Home;
