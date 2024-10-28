import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>

            <Text style={styles.title}>Chat</Text>

            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name="cart" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#800080',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2, 
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    iconContainer: {
        padding: 10, 
    }
});

export default Header;
