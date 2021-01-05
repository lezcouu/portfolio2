import React from 'react'
import "./About.css"

const About = () => {
    return (
        <div className="about">
            <div className="max-width">
                <h2 className="title"> Acerca de mi</h2>
                <div className="about-content">
                    <div className="column left">
                        <img 
                        src="https://media-exp1.licdn.com/dms/image/C4D35AQEy8hFZhcppuw/profile-framedphoto-shrink_200_200/0/1605966977485?e=1609855200&v=beta&t=0VGz8t4StnIu2F0p2OwvCH3ADNRF1QqfFIN26XV8zEM" alt=""/>
                    </div>
                    <div className="column right">
                        <div className="text">
                            Mi apodo es Lezcou <span></span>
                        </div>
                        <p>
                            Vivo en caballito CABA, tengo 29 años y soy una persona que le encanta
                            estar continuamente aprendiendo cosas nuevas, me apasiona la programación
                            porque no te da tiempo a aburrirte el cambio constante que se vive en este 
                            mundo es maravilloso. Quisiera poder seguir aprendiendo y llenandome de experiencia
                            junto a los mejores programadores del mercado. Mi sueño es poder ir formandome
                            cada dia más y poder vivir de esto que me gusta, puedo pasar horas y horas programando
                            sin darme cuenta, como dice el dicho "vive de lo que te apasiona y no trabajaras un solo dia 
                            de tu vida".
                        </p>
                        <div>
                            <a 
                            href="https://github.com/lezcouu"> Mi github 
                            </a> 
                            <img 
                            style={{verticalAlign:"middle",width:"100px"}}
                            src="https://www.trecebits.com/wp-content/uploads/2019/11/GITHUB.jpg" 
                            alt=""
                            />
                        </div>
                        <div>
                            <a 
                            href="https://www.linkedin.com/in/pablo-david-lezcano/"> 
                            Mi Linkedin 
                            </a>
                            <img 
                            style={{
                                verticalAlign:"middle",
                                width:"80px", 
                                borderRadius:"10%",
                                marginLeft:"10px"
                            }}
                            src="https://rockcontent.com/es/wp-content/uploads/2019/02/linkedin-1280x720.png" 
                            alt=""
                            />
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
