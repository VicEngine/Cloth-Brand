import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shoppe from "../screen/Shoppe";
import CreateAccount from "../screen/CreateAccount";
import Login from "../screen/Login";
import Password from "../screen/Password";
import Recoverypass from "../screen/Recoverypass";
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Shoppe" component={Shoppe} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="Recoverypass" component={Recoverypass}/>
        </Stack.Navigator>
    );
}
