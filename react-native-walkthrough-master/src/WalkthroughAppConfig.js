import { Button, TouchableOpacity} from 'react-native';
const WalkthroughAppConfig = {
  onboardingConfig: {
      walkthroughScreens: [
        
      {
        icon: require("../assets/carrusel-1.png"),
        title: "Bienvenido Caminante",
        description: "Que tan lejos quieres llegar? Hagamoslo juntos",
      },
      {
        icon: require("../assets/carrusel-2.png"),
        title: "Conoce tus espacios",
        description:"Usa promocionespara conseguir tus antojos y ve lugares favoritos",
      },
      {
        icon: require("../assets/carrusel-3.png"),
        title: "Los Lugares favoritos",
        description: "Disfruta de lo mejor y los mas recomendado",
      },
      {
        icon: require("../assets/carrusel-4.png"),
        title: "Que quieres hacer?",
        description: "te daremos la informacion de como llegar a donde quieras ir",
      },
      {
        icon: require("../assets/carrusel-7.png"),
        title: "Cada dia nuevos eventos",
        description: "nunca te quedaras mas sin planes",
      }, 
    ],    
  },
};

export default WalkthroughAppConfig;
