import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Footer = () => {
    const handleMenuPress = () => {
        alert("Đã nhấn Menu");
    };

    const handleHomePress = () => {
        alert("Đã nhấn Home");
    };

    const handleBackPress = () => {
        alert("Đã nhấn Trở về");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleMenuPress}>
                <Ionicons name="menu" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHomePress}>
                <Ionicons name="home" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBackPress}>
                <Ionicons name="chevron-back" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#800080',  // Màu tím
        borderTopWidth: 1, 
        borderTopColor: '#ddd', 
    },
    icon: {
        padding: 10,
    },
});

export default Footer;
