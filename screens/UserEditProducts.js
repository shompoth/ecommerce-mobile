import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserEditProducts = ({ route }) => {
    // Variable
    const productId = route.params.productId;
    console.log(productId);
    return (
        <View>
            <Text>Modifier ou creer une formation</Text>
        </View>
    );
};

export default UserEditProducts;

const styles = StyleSheet.create({});
