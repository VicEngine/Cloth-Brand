import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shoppe from "../screen/Shoppe";
import CreateAccount from "../screen/CreateAccount";
import Login from "../screen/Login";
import Password from "../screen/Password";
import Recoverypass from "../screen/Recoverypass";
import Smscode from "../screen/Smscode";
import NewPassword from "../screen/NewPassword";
import Card from "../screen/Card";
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Shoppe" component={Shoppe} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="Recoverypass" component={Recoverypass} />
            <Stack.Screen name="Smscode" component={Smscode} />
            <Stack.Screen name="Card" component={Card} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
        </Stack.Navigator>
    );
}
