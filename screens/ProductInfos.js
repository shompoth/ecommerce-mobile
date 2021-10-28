import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductInfos = ({ route }) => {
    const courseId = route.params.courseId;
    console.log(courseId);
    return (
        <View>
            <Text>Product infos</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ProductInfos;
