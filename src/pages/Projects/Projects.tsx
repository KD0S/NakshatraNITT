import './Projects.css'

const Projects = () => {
    return (
        <div id="projects">
            <h1>Our Projects</h1>
            <div id="projects-body">
                <div className="text-container glassmorphism">
                    With the introduction of the technical teams , our combined efforts led us to participate in Sangam, the inter collegiate technical competition of NITT for the first time. Some of the projects and plans which we have developed are as follows :-
                    <br /><br />
                    <b>Cubesat</b> : The CubeSat is a miniature based satellite which was planned. The software components included the algorithms for the CubeSat which include LULC, SrGAN algorithm that helps in determining Land use and cover ,as well as scanning of the demographics.
                    <br /><br />
                    <b>PID Controller</b> : The PID Control concept was used in balancing a ball in the middle of a wooden plank with high precision when subjected to external disturbances . This project explains the functioning of Automated Gyroscopes in the International Space Station which help in maintaining a proper orientation with respect to the Earth and Sun.
                </div>
            </div>
        </div >
    )
}

export default Projects