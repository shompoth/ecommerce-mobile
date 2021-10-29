import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { addToCart } from "../redux/actions/actionAddToCart";

// Composants
import ProductItem from "../components/ProductItem/ProductItem";
import EmptyMsg from "../components/EmptyMsg/EmptyMsg";

// Redux
import { useSelector, useDispatch } from "react-redux";

const Landing = ({ navigation }) => {
    // Redux
    const dispatch = useDispatch();
    const existingProducts = useSelector(state => state.products.existingProducts);

    // Fonction
    const handleAddToCart = product => {
        dispatch(addToCart(product));
        alert("Produit ajouté au panier");
    };

    if (existingProducts.length) {
        return (
            <FlatList
                data={existingProducts}
                renderItem={({ item }) => (
                    <ProductItem
                        image={item.image}
                        price={item.price}
                        title={item.title}
                        viewDetails={() =>
                            navigation.navigate("Details", {
                                courseId: item.id,
                                title: item.title,
                            })
                        }
                        addToCard={() => handleAddToCart(item)}
                    />
                )}
            />
        );
    }
    return <EmptyMsg>Pas de produits à afficher</EmptyMsg>;
};

const styles = StyleSheet.create({});

export default Landing;
