import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function InfoScreen(props) {
    const navigation = props.navigation;

    const changeScreen = (nameScreen) => {
        navigation.navigate(nameScreen);
    }

    return (
        <View style={styles.container}>
            <Image style={{ width: 150, height: 240 }} source={require('../../../assets/info.jpg')} />
            <Text style={styles.text}>Họ Tên: Nguyễn Đức Thắng</Text>
            <Text style={styles.text}>Mã Sinh Viên: PH20487</Text>
            <TouchableOpacity onPress={() => changeScreen('Manager')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Màn hình quản lý</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: '#E8EAED',
        alignItems: 'center',
    },

    text: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: "bold",
    },
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
});