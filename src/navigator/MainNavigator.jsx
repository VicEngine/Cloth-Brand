import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shoppe from "../screen/Shoppe";
import CreateAccount from "../screen/CreateAccount";
import Login from "../screen/Login";
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Shoppe" component={Shoppe} />
            <Stack.Screen name="CreateAccount" component={CreateAccount}/>
       <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    );
}
