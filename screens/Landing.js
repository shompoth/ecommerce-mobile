import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

// Composants
import ProductItem from "../components/ProductItem/ProductItem";
import EmptyMsg from "../components/EmptyMsg/EmptyMsg";

// Redux
import { useSelector } from "react-redux";

const Landing = () => {
    // Redux
    const existingProducts = useSelector(state => state.products.existingProducts);

    if (existingProducts.length) {
        return (
            <FlatList
                data={existingProducts}
                renderItem={({ item }) => (
                    <ProductItem
                        image={item.image}
                        price={item.price}
                        title={item.title}
                        viewDetails={() => alert("details")}
                        addToCard={() => alert("panier")}
                    />
                )}
            />
        );
    }
    return <EmptyMsg>Pas de produits à afficher</EmptyMsg>;
};

const styles = StyleSheet.create({});

export default Landing;
