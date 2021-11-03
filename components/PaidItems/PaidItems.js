import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../styles/globalStyles";

// Composant
import ProductsOverview from "./ProductsOverview/ProductsOverview";

// Icon
import { AntDesign } from "@expo/vector-icons";

const PaidItems = ({ totalPrice, date, productDetails }) => {
    // State
    const [isShowing, setIsShowing] = useState(false);

    // Fonction
    const handleShow = () => {
        setIsShowing(prevState => !prevState);
    };

    return (
        <ScrollView style={styles.paidProductsContainer}>
            <View style={styles.paidProducts}>
                <Text style={styles.totalPaid}>{totalPrice.toFixed(2)} €</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <TouchableOpacity style={styles.iconBtn} onPress={handleShow}>
                <AntDesign
                    name={isShowing ? "minuscircleo" : "pluscircleo"}
                    size={24}
                    color={globalStyles.primary}
                />
            </TouchableOpacity>
            {isShowing && (
                <View style={styles.detailPaidProduct}>
                    {productDetails.products.map(product => (
                        <ProductsOverview
                            key={product.id}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                </View>
            )}
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
    iconBtn: {
        alignSelf: "flex-end",
    },
    detailPaidProduct: {
        marginTop: 20,
        borderTopColor: globalStyles.lightGrey,
        borderTopWidth: 1,
    },
});

export default PaidItems;
