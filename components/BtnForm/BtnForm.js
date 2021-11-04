import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import globalStyles from "../../styles/globalStyles";

const BtnForm = ({ btnText, activate, handleSubmit }) => {
    return (
        <Pressable onPress={handleSubmit} disabled={activate}>
            <View
                style={{
                    ...styles.btnContainer,
                    backgroundColor: activate
                        ? globalStyles.orange
                        : globalStyles.primary,
                }}
            >
                <Text
                    style={{
                        ...styles.btnText,
                        color: activate ? globalStyles.darkGrey : globalStyles.white,
                    }}
                >
                    {btnText}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: globalStyles.orange,
        marginTop: 20,
    },
    btnText: {
        fontSize: 19,
        textAlign: "center",
    },
});

export default BtnForm;
