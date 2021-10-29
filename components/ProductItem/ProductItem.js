import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import globalStyles from "../../styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";

const ProductItem = ({ image, price, title, viewDetails, addToCard }) => {
    const imgUrl = "../../assets/" + image;

    return (
        <TouchableHighlight onPress={viewDetails} underlayColor={globalStyles.primary}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.productContainerDetails}>
                    <Text style={styles.productTitle}>{title}</Text>
                    <Text style={styles.productPrice}>{price} €</Text>
                </View>
                <View style={styles.iconsContainer}>
                    {/* <TouchableOpacity> */}
                    <MaterialIcons
                        name="remove-red-eye"
                        size={26}
                        // color={globalStyles.primary}
                        color={globalStyles.darkGrey}
                    />
                    {/* </TouchableOpacity> */}
                    <TouchableOpacity onPress={addToCard}>
                        <MaterialIcons
                            name="shopping-basket"
                            size={26}
                            // color={globalStyles.primary}
                            color={globalStyles.darkGrey}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        height: 300,
        margin: 25,
        borderColor: globalStyles.lightGrey,
        borderWidth: 1,
    },
    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
    },
    image: {
        height: "100%",
        width: "100%",
    },
    productContainerDetails: {
        alignItems: "center",
        height: "20%",
        padding: 5,
    },
    productTitle: {
        fontSize: 16,
        marginVertical: 4,
        color: globalStyles.primary,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
    },
    productPrice: {
        color: globalStyles.darkGrey,
        fontSize: 16,
    },
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "20%",
        paddingHorizontal: 30,
    },
});

export default ProductItem;
