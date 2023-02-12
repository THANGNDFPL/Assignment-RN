import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ManagerScreen(props) {
    const navigation = props.navigation;
    const route = props.route;
    const updateItem = route.params?.editItem || null;
    const [editItem, setEditItem] = useState(updateItem);
    const onDelete = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    }

    const [data, setData] = useState([
        { id: 1, name: "Cửa hàng 1", address: "1 Trịnh Văn Bô Nam Từ Liêm Hà Nội", phone: "0912345678", logo: "https://www.seekpng.com/png/detail/335-3351345_store-vector-icon-retail-store-retail-vector.png", status: "0" },
        { id: 2, name: "Cửa hàng 2", address: "2 Trịnh Văn Bô Nam Từ Liêm Hà Nội", phone: "0912345679", logo: "https://www.seekpng.com/png/detail/335-3351345_store-vector-icon-retail-store-retail-vector.png", status: "0" },
        { id: 3, name: "Cửa hàng 3", address: "3 Trịnh Văn Bô Nam Từ Liêm Hà Nội", phone: "0912345677", logo: "https://www.seekpng.com/png/detail/335-3351345_store-vector-icon-retail-store-retail-vector.png", status: "0" },
        { id: 4, name: "Cửa hàng 4", address: "4 Trịnh Văn Bô Nam Từ Liêm Hà Nội", phone: "0912345676", logo: "https://www.seekpng.com/png/detail/335-3351345_store-vector-icon-retail-store-retail-vector.png", status: "0" },
        { id: 5, name: "Cửa hàng 5", address: "5 Trịnh Văn Bô Nam Từ Liêm Hà Nội", phone: "0912345675", logo: "https://www.seekpng.com/png/detail/335-3351345_store-vector-icon-retail-store-retail-vector.png", status: "0" },
        { id: 6, name: "Cửa hàng 6", address: "Hà Nội", phone: "0912345675", logo: "https://www.seekpng.com/png/detail/335-3351345_store-vector-icon-retail-store-retail-vector.png", status: "0" },
    ]);

    useEffect(() => {
        if (route.params?.item != null) {
            const newList = [...data, route.params?.item];
            setData(newList);
        }
    }, [route.params?.item])
    useEffect(() => {
        if (route.params?.editItem != null) {
            const newList = data.map(item => {
                if (item.id === route.params?.editItem.id) {
                    item = route.params?.editItem;
                }
                return item;
            });
            setData(newList);

        }
    }, [route.params?.editItem])

    return (
        <SafeAreaView style={{ backgroundColor: '#E8EAED', flex: 1 }}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
                <View style={{ flexDirection: "row", alignItems: "baseline", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12, textAlign: 'center' }}>Danh sách cửa hàng</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('AddScreen', { list: data });}}>
                        <View style={{ backgroundColor: "#55BCF6", padding: 4, borderRadius: 10 }}>
                            <Text style={{ color: "white", fontWeight: "bold", textTransform: "uppercase" }}>+Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <View style={{ flex:2 }}><Image style={{ width: 80, height: 80 }} source={{ uri: item.logo }} /></View>
                            <View style={{flex:4, flexDirection: "column",alignItems:'flex-start', maxWidth: "50%" }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold' }}>ID: </Text>
                                    <Text>{item.id}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Name: </Text>
                                    <Text>{item.name}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Address: </Text>
                                    <Text>{item.address}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Phone: </Text>
                                    <Text>{item.phone}</Text>
                                </View>
                            </View>
                            <View style={{ flex:2 ,alignItems:'flex-end'}}>
                                <TouchableOpacity style={{ marginVertical: 8 }} onPress={() => navigation.navigate('Update', { data: item })}>
                                    <View>
                                        <Image style={{ width: 28, height: 28 }} source={require('../../../assets/editing.png')} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginVertical: 8 }} onPress={() => Alert.alert('Xóa cửa hàng', 'Bạn có chắc chắn xóa cửa hàng không', [
                                    { text: "Cancel" },
                                    { text: "OK", onPress: () => onDelete(item.id) }
                                ])
                                }>
                                    <View>
                                        <Image style={{ width: 28, height: 28 }} source={require('../../../assets/delete.png')} />
                                    </View>
                                </TouchableOpacity>


                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />

            </View>
            <View style={styles.top}>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#1f145c"
    },
    item: {
        padding: 12,
        backgroundColor: "#FFF",
        borderRadius: 10,
        elevation: 12,
        flexDirection: "row",
        alignItems:'center',
        flexWrap:'wrap',
        marginBottom: 20
    },
});