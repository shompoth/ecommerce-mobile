import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../../styles/globalStyles";

const EmptyMsg = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: globalStyles.primary,
        fontSize: 19,
    },
});

export default EmptyMsg;
