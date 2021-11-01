import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import globalStyles from "../../styles/globalStyles";

const PaidItems = ({ totalPrice, date, productDetails }) => {
    return (
        <ScrollView style={styles.paidProductsContainer}>
            <View style={styles.paidProducts}>
                <Text style={styles.totalPaid}>{totalPrice} €</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    paidProductsContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 15,
    },
    paidProducts: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 15,
    },
    totalPaid: {
        fontSize: 18,
    },
    date: {
        fontSize: 16,
    },
});

export default PaidItems;
