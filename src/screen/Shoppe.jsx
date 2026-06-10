import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";


export default function Shoppe() {
const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={{
                    height: 134, width: 134, borderRadius: 134,
                    backgroundColor: '#FFFFFF', alignItems: "center", justifyContent: 'center',
                }}>
                    <Image source={require('../assets/images/Group.png')} />
                </View>
                <Text style={{ fontSize: 52, fontWeight: "bold", color: "#202020", marginTop: 21 }}>
                    Shoppe
                </Text>
                <Text style={{ textAlign: "center", fontSize: 19, fontWeight: "light", color: "#202020", marginTop: 21 }}>
                    Beautiful eCommerce UI Kit {'\n'} for your online store
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}
                    style={{ height: 61, width: 335, backgroundColor: "#004CFF", alignItems: "center", justifyContent: "center", borderRadius: 20, marginTop: 61 }}>
                    <Text style={{ fontSize: 22, fontWeight: "light", color: "202020" }}>Let's get started</Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center", justifyContent: "center", marginTop: 21, gap: 10
                }}>
                    <Text>
                        I already have an account
                    </Text>
                    <TouchableOpacity 
                        style={{
                            height: 30, width: 30, borderRadius: 30,
                            backgroundColor: "#004CFF", alignItems: "center", justifyContent: "center",
                    }}>
                        <Image source={require('../assets/images/Arrow.png')} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
