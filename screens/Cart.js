// Librairies
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Components
import EmptyMsg from "../components/EmptyMsg/EmptyMsg";
import ProductsInCart from "../components/ProductsInCart/ProductsInCart";

// Redux
import { useSelector, useDispatch } from "react-redux";
import globalStyles from "../styles/globalStyles";
// Action
import { removeCourseCart } from "../redux/actions/actionRemoveCourseCart";
import { addPayment } from "../redux/actions/actionPayment";

const Cart = () => {
    // Redux
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartProducts);
    const total = useSelector(state => state.cart.total);

    // Fonction
    const handlePayment = (cartProducts, total) => {
        dispatch(addPayment(cartProducts, total));
        alert("Paiement effectué");
    };

    return (
        <View style={styles.cartContainer}>
            {cartProducts.length > 0 ? (
                <View>
                    <FlatList
                        data={cartProducts}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <ProductsInCart
                                title={item.title}
                                price={item.price}
                                type={item.type}
                                onDelete={() => dispatch(removeCourseCart(item.id))}
                            />
                        )}
                    />
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>
                            Total:
                            <Text style={styles.totalPrice}> {total.toFixed(2)} €</Text>
                        </Text>
                        <TouchableOpacity
                            onPress={() => handlePayment(cartProducts, total)}
                        >
                            <View style={styles.btnAddPayament}>
                                <Text style={styles.btnAddPayamentText}>Payer</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <EmptyMsg>Panier vide</EmptyMsg>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    cartContainer: {
        margin: 20,
    },
    totalContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 19,
    },
    totalText: {
        fontWeight: "bold",
        fontSize: 19,
    },
    totalPrice: {
        color: globalStyles.primary,
    },
    btnAddPayament: {
        borderRadius: 6,
        paddingVertical: 7,
        paddingHorizontal: 20,
        backgroundColor: globalStyles.orange,
    },
    btnAddPayamentText: {
        fontSize: 19,
    },
});

export default Cart;
