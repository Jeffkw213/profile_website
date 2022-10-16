import Particles from "react-tsparticles";
const ParticleBackground = () => {
    return (<div>
        <Particles 
        options={
            {
                background:{
                    color: '#ff0000'
                },
                fpsLimit: 60,

        }
    }/>
    </div>
    
};

export default ParticleBackground;
