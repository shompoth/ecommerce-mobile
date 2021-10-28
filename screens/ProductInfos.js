import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// Redux
import { useSelector } from "react-redux";

const ProductInfos = ({ navigation, route }) => {
    const courseId = route.params.courseId;
    // const selectedCourse = useSelector(state =>
    //     state.products.existingProducts.find(course => course.id === courseId),
    // );

    // useEffect(() => {
    //     navigation.setOptions({
    //         title: selectedCourse.title,
    //     });
    // }, [navigation]);

    return (
        <View>
            <Text>Product infos</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ProductInfos;
