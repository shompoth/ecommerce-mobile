import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ImageBackground,
} from "react-native";
import globalStyles from "../../styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";

const ProductItem = ({ image, price, title, type, viewDetails, addToCard }) => {
    const imgUrl = "../../assets/" + image;

    return (
        <TouchableHighlight onPress={viewDetails} underlayColor={globalStyles.primary}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={image} style={styles.image}>
                        <View style={styles.badgeContainer}>
                            <View style={styles.badgeContent}>
                                <Text style={styles.productBadge}>{type}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.productContainerDetails}>
                    <Text style={styles.productTitle}>{title}</Text>
                    <Text style={styles.productPrice}>{price} €</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <MaterialIcons
                        name="remove-red-eye"
                        size={26}
                        color={globalStyles.darkGrey}
                    />

                    <TouchableOpacity onPress={addToCard}>
                        <MaterialIcons
                            name="shopping-basket"
                            size={26}
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
        // overflow: "hidden",
        // backgroundColor: "rgba(0,0,0,.6)",
    },
    image: {
        height: "100%",
        width: "100%",
        // backgroundColor: "rgba(0, 0, 0, 0.8)",
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
    badgeContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        alignItems: "flex-end",
    },
    badgeContent: {
        borderRadius: 10,
        backgroundColor: globalStyles.primary,
        opacity: 0.9,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    productBadge: {
        color: globalStyles.white,
        fontWeight: "bold",
        fontSize: 14,
        // padding: 10,
        // margin: 10,

        // backgroundColor: globalStyles.primary,
        // opacity: 0.9,
    },
});

export default ProductItem;
