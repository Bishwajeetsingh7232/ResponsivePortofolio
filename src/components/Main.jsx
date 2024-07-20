import React from 'react'
import './Main.css'
export default function main() {
  return (
   <>
   <main>
      <section className="firstSection">
        <div className="leftSection">
          <div>
            Hello Everyone,I am <span className="purpli">Bishwajeet Singh</span>
          </div>
          <div>And I am a</div>

          <span id="element"></span>
          <div className="buttons">
            <button className="btn">Download Resume</button>
            <button className="btn">Visit Github</button>
          </div>
        </div>
        <div className="rightSection">
          <img src="/bg.png.svg" alt="" />
        </div>
      </section>

      <hr />
      <section className="secondSection">
        <span className="text-gray"> What I have done so far</span>
        <h1>WORK</h1>

        <div className="box">
          <div className="vertical">
            <img className="image-top" src="/developer.png" alt=""/>
            <div className="vertical-title">
              EDUCATION
              </div>
              <div className="vertical-desc">
              .B.tech-CSE(2021-25)
              CGPA-7.57 till date
              <br/>
              .Intermediate(CBSE)-PCM stream(2019-20)

              .High School(CBSE)-Science stream(2017-18)
             </div>
          </div>
        
          <div className="vertical">
            <img className="image-top" src="/developer.png" alt=""/>
            <div className="vertical-title">
              Programming Languages
              </div>
              <div className="vertical-desc">
              .C/C++,
              Python
              .HTML,CSS,Javascript
              .SQL
      
             </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="/developer.png" alt=""/>
            <div className="vertical-title">Coursework</div>
            <div className="vertical-desc">
             .Data structure
             .Algorithms<br/>
             .DBMS<br/>
             .Object-oriented Programming<br/>
             .Operating system
             </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="/developer.png" alt=""/>
            <div className="vertical-title">Soft skills</div>
            <div className="vertical-desc">
             .Problem-solving<br/>
             .Leadership<br/>
             .Time-management<br/>
             .Persuasion and communication skill<br/>
        
             </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="/developer.png" alt=""/>
            <div className="vertical-title">
              Tools & Platforms
            </div>
            <div className="vertical-desc">
            .Visual Studio<br/>
            .GitHub
             </div>
          </div>

          <div className="vertical"></div>
          <div className="vertical"></div>
        </div>
      </section>
    </main>
   </>
  )
}
