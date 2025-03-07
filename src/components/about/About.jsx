import React from "react";
import "./about.css";


function About() {
    return (
        <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            It is a long established fact that a reader will be distracted by the
            readable content.
          </p>
          <p className="a-desc">
          Meet Big Ferd, a seasoned full-stack web developer with an impressive track record spanning over two years. His diverse skill set encompasses HTML, CSS, JavaScript, ReactJS, Node.js, and Next.js. Fluent in the language of Git, Big Ferd's hands-on experience in the field is a testament to his commitment to excellence.

With a touch of Big Ferd's expertise, your projects are destined for greatness.  
          </p>
          {/* <div className="a-award">
            <img src="/images/award.png" alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">International Design Awards 2021</h4>
              <p className="a-award-desc">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                and fugit.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    )
}


export default About;