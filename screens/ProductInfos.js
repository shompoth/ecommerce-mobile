import React, { useEffect } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import { addToCart } from "../redux/actions/actionAddToCart";

// Icon
import { MaterialIcons } from "@expo/vector-icons";

// Redux
import { useSelector, useDispatch } from "react-redux";

const ProductInfos = ({ navigation, route }) => {
    const courseId = route.params.courseId;

    // Redux
    const selectedCourse = useSelector(state =>
        state.products.existingProducts.find(course => course.id === courseId),
    );
    const dispatch = useDispatch();

    // Fonction
    const handleAddToCart = () => {
        dispatch(addToCart(selectedCourse));
        navigation.goBack();
        alert("Produit ajouté au panier");
    };

    return (
        <View>
            <ScrollView style={styles.scroll}>
                <Image source={selectedCourse.image} style={styles.courseImage} />
                <View style={styles.typeContainer}>
                    <Text style={styles.typeText}>{selectedCourse.type}</Text>
                </View>
                <View style={styles.courseDetails}>
                    <Text style={styles.courseDescription}>
                        {selectedCourse.description}
                    </Text>
                    <Text style={styles.courseDescription}>
                        {selectedCourse.description}
                    </Text>
                    <Text style={styles.courseDescription}>
                        {selectedCourse.description}
                    </Text>
                    <Text style={styles.courseDescription}>
                        {selectedCourse.description}
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.footerContainer}>
                <View style={styles.footerTop}>
                    <View style={styles.coursePriceWrapper}>
                        <Text style={styles.coursePrice}>
                            {selectedCourse.price.toFixed(2)} €
                        </Text>
                    </View>
                </View>
                <View style={styles.footerBottom}>
                    <MaterialIcons
                        name="arrow-back-ios"
                        size={24}
                        color={globalStyles.white}
                        onPress={() => navigation.goBack()}
                    />
                    <TouchableOpacity onPress={handleAddToCart}>
                        <View style={styles.btnAddToCart}>
                            <Text style={styles.btnText}>Ajouter au panier</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: globalStyles.white,
        height: "80%",
    },
    courseImage: {
        width: "100%",
        height: 250,
    },
    typeContainer: {
        backgroundColor: globalStyles.primary,
        alignItems: "flex-end",
        justifyContent: "center",
        marginTop: 10,
        marginHorizontal: 20,
        padding: 10,
        alignSelf: "flex-end",
        borderRadius: 10,
    },
    typeText: {
        color: globalStyles.white,
        fontSize: 12,
    },
    courseDetails: {
        padding: 10,
        alignItems: "center",
    },
    courseDescription: {
        color: globalStyles.dimGray,
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    footerContainer: {
        height: "20%",
    },
    footerTop: {
        height: "40%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    coursePriceWrapper: {
        paddingRight: 40,
    },
    coursePrice: {
        fontSize: 24,
        color: globalStyles.primary,
    },
    footerBottom: {
        backgroundColor: globalStyles.primary,
        height: "60%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
    btnAddToCart: {
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: globalStyles.lightOrange,
    },
    btnText: {
        fontSize: 15,
    },
});

export default ProductInfos;
