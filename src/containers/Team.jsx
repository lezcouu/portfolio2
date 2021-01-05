import React from 'react'
import "./Team.css"
import Carousel from 'react-material-ui-carousel'

const Team = () => {

    const team = [
        {
            name:"Elena",
            comment:"Con Elena realizamos una app juntos SMARTBYTE",
            imagen:"https://media-exp1.licdn.com/dms/image/C4E03AQFVqbiKpUGuCQ/profile-displayphoto-shrink_800_800/0/1572727235335?e=1614816000&v=beta&t=R2PgGsJL46jFrd7JoreZD39jBPFIJyvSAAd1dXlbpw4",
            linkedin:"https://www.linkedin.com/in/ele-gonzalez/"
        },
        {
            name: "Agustin",
            comment: "tuve el placer de trabajar sobre todo back-end", 
            linkedin:"https://www.linkedin.com/in/agustin-jordi-rojas/",
            imagen:"https://media-exp1.licdn.com/dms/image/C4D03AQH8QM8a2T3exQ/profile-displayphoto-shrink_800_800/0/1609371673872?e=1615420800&v=beta&t=IbnBLzuIwZpVXYlPG2wJtXxL0oCTsn6xUiT-wUQk31A"
        },
        {
            name: "Vicky",
            comment: "Pudimos trabajar juntos en front-end realizando componentes complejos", 
            linkedin:"https://www.linkedin.com/in/victorialauracabrera/",
            imagen:"https://media-exp1.licdn.com/dms/image/C4E03AQGNsbnBpXp6CA/profile-displayphoto-shrink_800_800/0/1599257347285?e=1614816000&v=beta&t=MwcM7xjLH5QZcI5VRasQQvrXpzjcu3HNOqA4LuHmsaA"
        },
        {
            name:"Dario",
            comment:"con Dario realizamos un e-commerce, quedo fenomenal",
            linkedin:"https://www.linkedin.com/in/dario-ezequiel-nu%C3%B1ez/",
            imagen:"https://media-exp1.licdn.com/dms/image/C4D03AQGerGRmaA6Wbg/profile-displayphoto-shrink_800_800/0/1595098005729?e=1614816000&v=beta&t=v5ZKTlE2xGC7fN7ugYkGH3xAGzApTNkAESttcVPqL7c"
        },
        {
            name:"Jeremias",
            comment:"con Jere trabajamos mucho front-end, haciendo componentes escalables.",
            linkedin:"https://www.linkedin.com/in/jeremias-koch/",
            imagen:"https://media-exp1.licdn.com/dms/image/C4E03AQH3hpi6jI9OIg/profile-displayphoto-shrink_800_800/0/1599071804063?e=1614816000&v=beta&t=KrqrJiBrBhyz1whI9XNpLzdrUsr7I65s8ZbrG1f_b9s"
        },
        {
            name:"Cecilia",
            comment:"con Ceci trabajamos mucho back-end con sequelize.",
            linkedin:"https://www.linkedin.com/in/hansen-cecilia/",
            imagen:"https://media-exp1.licdn.com/dms/image/C4E03AQHEWqA7EzU48A/profile-displayphoto-shrink_800_800/0/1560953124353?e=1614816000&v=beta&t=VfFSlHhmOc8Urz8tbinvQwWd3Mt07lsmdeLfplk5XwE"
        }       
    ]
    return (
        <div className="teams">
            <div className="max-width">
                <h2 className="title">Compañeros</h2>
                <p>    
                    Estas son algunas de las personas con las cuales comparti trabajos,
                    ademas de ser excelentes profesionales tambien tienen una empatia para poder
                    hacer del trabajo un lugar agradable en el que no queres dejar de estar.
                </p>
                <div className="carousel">
                    <Carousel>
                    {team.map((elem, i) => (
                        <div key={i} className="card">
                            <div className="box">  
                                <img src={elem.imagen} alt="" />
                                <h3>{elem.name}</h3>
                                <p>{elem.comment}</p>
                                <a href={elem.linkedin}>Click a Linkedin</a>
                            </div>
                        </div>
                    ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Team
