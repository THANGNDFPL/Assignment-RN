import { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Update(props) {

    const navigation = props.navigation;
    const route = props.route;
    const data = route.params?.data || null;
    const [name, setName] = useState(data.name);
    const [address, setAddress] = useState(data.address);
    const [phone, setPhone] = useState(data.phone);
    const [logo, setLogo] = useState(data.logo);
    const [status, setStatus] = useState(data.status);

    console.log("data: " + data.name);

    const onReset = () => {
        setName('');
        setAddress('');
        setPhone('');
        setLogo('');
        setStatus('');
    }

    const onSave = () => {
        const newItem = {
            id: data.id,
            name: name,
            address: address,
            phone: phone,
            logo: logo,
            status: status
        };
        navigation.navigate('Manager', {editItem: newItem },true);
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
                    defaultValue={data.name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    onChangeText={(text) => setAddress(text)}
                    placeholderTextColor={'gray'}
                    defaultValue={data.address}

                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    onChangeText={(text) => setPhone(text)}
                    keyboardType='phone-pad'
                    placeholderTextColor={'gray'}
                    defaultValue={data.phone}

                />
                <TextInput
                    style={styles.input}
                    placeholder="Link"
                    onChangeText={(text) => setLogo(text)}
                    keyboardType="url"
                    placeholderTextColor={'gray'}
                    defaultValue={data.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Status 0 or 1"
                    onChangeText={(text) => setStatus(text)}
                    placeholderTextColor={'gray'}
                    defaultValue={data.status}
                />
                <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => onReset()}>
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