import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import TelaInicio from "./telas/TelaInício";
import TelaSobre from "./telas/TelaSobre";
import TelaContato from "./telas/TelaContato";


function App () {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Início">
          <Drawer.Screen options={{ drawerLabel: "Eu"}} name="Início" component={TelaInicio} />
          <Drawer.Screen name="Sobre" component={TelaSobre} />
          <Drawer.Screen name="Contato" component={TelaContato} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default App;