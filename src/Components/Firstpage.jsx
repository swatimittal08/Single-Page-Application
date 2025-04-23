import React from 'react'
import style from "./menu.module.css"
import pic from "./picture2.jpg"
import picone from "./picture3.jpeg"
import pictwo from "./picture4.jpg"
import picthree from "./picture5.jpeg"
 

const Firstpage = () => {
  return (
    <div>
        <section id={style.exploreBlock}>
            <article>
                <div className={style.summary}>

                  <div className={style.one}>
                    <h2>The Only Platform To</h2>                  
                    <h1>Show Off Your Skills</h1> <br />
                    <p>Collab or hire coders with no middleman. An open platform to hire coders based on skills and Projects.</p> 
                    <br /><br />
                    
            {/* <button className={style.buttonone}>EXPLORE WORK</button>
                    <button className={style.buttontwo}>HIRE TALENTS</button>         */}
                  </div>
                    
                </div>

                <div className={style.image}>
                  <img src={pic} alt="" width="100%" height="400px" />
                </div>
            </article>
        </section>  

        <section id={style.middle}>
          <article>
            <div className={style.one}>
              <img src={picone} alt="" width="100%" />
            </div>

            <div className={style.two}>
              <h1>Discover Projects By All</h1>
              <h2>Talents</h2> <br />
              <p>We welcome all stacks techies to join and showcase their work. The source code and videos attached to their projects provide others with a better understanding of the projects content.</p> 
              <br />
            
              <button className={style.button}>Explore Work</button>
            </div>
            
          </article>
        </section> 

        <section id={style.middleone}>
          <article>
            <div className={style.one}>
              <h1>Learn Better By Participate</h1>
              <h2>In Challenges</h2> <br />
              <p>We organize challenges to help you develop your coding skills. See what challenge participants have been up to and learn more about them by browsing their featured projects.</p>
              <br />
              
              <button className={style.button}>View Challenges</button>
            </div>

            <div className={style.two}>
              <img src={pictwo} alt="" width="100%" />
            </div>
          </article>
        </section>

        <section id={style.middletwo}>
          <article>
            <div className={style.one}>
              <img src={picthree} alt="" width="100%" />
            </div>

            <div className={style.two}>
              <h1>Platform For Connect, Collab</h1>
              <h2>And Build More Stuff</h2> <br />
              <p>We want our users to be able to communicate with coders through our platform. Embrace collaboration, connect with others, and code. A simple glance at your showcased projects will connect you directly with startups and top-notch companies.</p>
              <br />

              <button className={style.button}>View Developers</button>
            </div>
          </article>
        </section>

        <section id={style.middlethree}>
          <article>
            <div className={style.one}>
            <h1>Learn, Upskill And Be</h1>
              <h2>Interview Ready</h2> <br />
              <p>Are you unsure of how to prepare for your upcoming interview? ??? Our platform will help you connect with interviewers and You can solve all your doubts by interacting with them.</p>
              <br />

              <button className={style.button}>Coming Soon</button> 
            </div>

            <div className={style.two}>
              <img src={picthree} alt="" width="100%" />                         
            </div>
          </article>
        </section>

        <footer id={style.footerBlock}>
            <p className="text-footer">
              © 2022 CodeMuse Technologies Private Limited, Inc. All rights reserved.
            </p>
        </footer>


    </div>
  )
}

export default Firstpage