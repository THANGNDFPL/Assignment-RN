import { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function AddScreen(props) {
    
    const navigation = props.navigation;
    const route = props.route;
    const data = route.params?.list|| null;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [logo, setLogo] = useState('');
    const [status,setStatus] = useState();
    const onReset = () => {
        setName('');
        setAddress('');
        setPhone('');
        setLogo('');
        setStatus();
    }

    const onSave = () => {
        const newItem = {
            id: data == null ? 1 : data[data.length - 1].id + 1,
            name: name,
            address: address,
            phone: phone,
            logo: logo,
            status:status
        };
        navigation.navigate('Manager', { item: newItem },true);
        onReset();
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
                <TextInput
                    autoFocus
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={(text) => setName(text)}
                    placeholderTextColor={'gray'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    onChangeText={(text) => setAddress(text)}
                    placeholderTextColor={'gray'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    onChangeText={(text) => setPhone(text)}
                    keyboardType='phone-pad'
                    placeholderTextColor={'gray'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Link"
                    onChangeText={(text) => setLogo(text)}
                    keyboardType="url"
                    placeholderTextColor={'gray'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Status 0 or 1"
                    onChangeText={(text) => setStatus(text)}
                    keyboardType="numeric"
                    placeholderTextColor={'gray'}
                />
                <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => {onReset();navigation.goBack()}}>
                        <View style={styles.buttonCancel}>
                            <Text style={{ color: 'white', fontSize: 18, textAlign: "center", fontWeight: 'bold' }}>CANCEL</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        onSave();
                    }}>
                        <View style={styles.button}>
                            <Text style={{ color: 'white', fontSize: 18, textAlign: "center", fontWeight: 'bold' }}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginVertical: 10
    },
    button: {
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#55BCF6'
    },
    buttonCancel: {
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'gray'
    }

});