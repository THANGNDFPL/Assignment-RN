import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function HomeScreen(props) {
    const navigation = props.navigation;

    const changeScreen = (nameScreen) => {
        navigation.navigate(nameScreen);
    }

    return (
    <View style={{flex:1,alignItems: "center", paddingHorizontal: 10,paddingVertical: 10, backgroundColor: '#E8EAED'}}>
            <Image style={{ width: 200, height: 300,marginVertical:20}} source={require('../../../assets/logo.png')} />
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => changeScreen('Info')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Màn hình thông tin</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => changeScreen('Manager')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Màn hình quản lý</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        backgroundColor: '#f01d71'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: "center"
    }
})
