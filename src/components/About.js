import React from 'react'
import './../assets/css/About.css';
import Photo from "./../assets/images/photo3.png"


const About = () => {
  return (
    <div className="divAboutContainer dis-flex space align-center">
        <div className="divLeft">
          <h2 className="mg-bt-20">A propos de moi</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ullam ducimus, repudiandae maiores reprehenderit in dolor ad autem, quidem quis optio nostrum aliquam! Ad non voluptates iusto nam sequi beatae.
          Assumenda repellat voluptate ratione inventore hic necessitatibus dicta eos aliquid deleniti sunt illo, laborum delectus eligendi blanditiis obcaecati praesentium magni distinctio architecto sapiente dolore nostrum voluptatem. Blanditiis fuga aliquid pariatur.
          Cumque eius nisi quibusdam magni quos laudantium facere autem voluptas repellat assumenda? Cupiditate, alias! Vero iusto aut eveniet amet inventore cumque odit placeat! Eligendi, fuga nihil necessitatibus eius atque vitae!
          Ipsa, consectetur repudiandae minus sed excepturi soluta officia cum facere tempore harum omnis blanditiis odit et voluptatibus dolore laudantium aut natus ducimus officiis perspiciatis veniam tempora libero aperiam magni! Vel?</p>
        </div>
        <div className="divRight">
          <img src={Photo} alt="Alpha amadou DIALLO" />
        </div>
    </div>
  )
}

export default About