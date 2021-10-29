import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import globalStyles from "../styles/globalStyles";

// Redux
import { useSelector } from "react-redux";

const ProductInfos = ({ navigation, route }) => {
    const courseId = route.params.courseId;
    const selectedCourse = useSelector(state =>
        state.products.existingProducts.find(course => course.id === courseId),
    );
    // const imgUrl = `../assets/${selectedCourse.image}`;

    return (
        <ScrollView style={styles.scroll}>
            <Image source={selectedCourse.image} style={styles.courseImage} />
            <View style={styles.courseDetails}>
                <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
            </View>
        </ScrollView>
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
    courseDetails: {
        padding: 20,
        alignItems: "center",
    },
    courseDescription: {
        color: globalStyles.dimGray,
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 10,
    },
});

export default ProductInfos;
