import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Cart = () => {
    // Redux
    const cartProducts = useSelector(state => state.cart.cartProducts);
    const total = useSelector(state => state.cart.total);
    return (
        <View>
            <Text>Cart</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Cart;
