import Particles from 'react-tsparticles';
const ParticleBackground = () => {
  return (
    <div>
      <Particles
        options={{
          background: {
            color: '#'
          },
          fpsLimit: 60
        }}
      />
    </div>
  );
};

export default ParticleBackground;
