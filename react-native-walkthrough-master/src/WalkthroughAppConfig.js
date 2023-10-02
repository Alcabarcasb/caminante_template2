import { Button, TouchableOpacity} from 'react-native';
const WalkthroughAppConfig = {
  onboardingConfig: {
      walkthroughScreens: [
        
      {
        icon: require("../assets/carrusel-1.png"),
        title: "Bienvenido Caminante",
        description: "Qué tan lejos quieres llegar? Hagamoslo juntos",
      },
      {
        icon: require("../assets/carrusel-2.png"),
        title: "Conoce tus espacios",
        description:"Usa promociones para conseguir tus antojos y ve a lugares favoritos",
      },
      {
        icon: require("../assets/carrusel-3.png"),
        title: "Los Lugares favoritos",
        description: "Disfruta de lo mejor y los más recomendado",
      },
      {
        icon: require("../assets/carrusel-4.png"),
        title: "Qué quieres hacer?",
        description: "Te daremos la informacion de cómo llegar a donde quieras ir",
      },
      {
        icon: require("../assets/carrusel-7.png"),
        title: "Cada día nuevos eventos",
        description: "Nunca más te quedaras sin planes",
      }, 
    ],    
  },
};

export default WalkthroughAppConfig;
