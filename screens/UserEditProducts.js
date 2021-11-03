import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import globalStyles from "../styles/globalStyles";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Action
import { editProduct } from "../redux/actions/actionEditProduct";

const UserEditProducts = ({ route, navigation }) => {
    // Variable
    const productId = route.params.productId;

    // Redux
    const myProduct = useSelector(state =>
        state.products.loggedInMemberProducts.find(product => product.id === productId),
    );
    const dispatch = useDispatch();

    // State
    const [title, setTitle] = useState(myProduct ? myProduct.title : "");
    const [type, setType] = useState(myProduct ? myProduct.type : "");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(myProduct ? myProduct.price : "");
    const [desc, setDesc] = useState(myProduct ? myProduct.description : "");

    // Fonction
    const handleSubmit = () => {
        if (productId) {
            dispatch(editProduct(productId, title, type, price, desc));
            navigation.goBack();
        } else {
            // Create mode
        }
    };

    return (
        <ScrollView>
            <View style={styles.formContainer}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Titre</Text>
                    <TextInput
                        value={title}
                        onChangeText={text => setTitle(text)}
                        style={styles.input}
                    />
                </View>

                <View style={styles.formControl}>
                    <Text style={styles.label}>Type de produit</Text>
                    <TextInput
                        value={type}
                        onChangeText={text => setType(text)}
                        style={styles.input}
                    />
                </View>

                {myProduct ? null : (
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Image (URL)</Text>
                        <TextInput
                            value={image}
                            onChangeText={text => setImage(text)}
                            style={styles.input}
                        />
                    </View>
                )}

                <View style={styles.formControl}>
                    <Text style={styles.label}>Prix €</Text>
                    <TextInput
                        keyboardType="numeric"
                        value={price.toString()}
                        onChangeText={text => setPrice(text)}
                        style={styles.input}
                    />
                </View>

                <View style={styles.formControl}>
                    <Text style={styles.label}>Informations</Text>
                    <TextInput
                        value={desc}
                        onChangeText={text => setDesc(text)}
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity onPress={handleSubmit}>
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>Valider</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default UserEditProducts;

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 9,
        padding: 20,
        margin: 20,
    },
    formControl: {
        width: "100%",
    },
    label: {
        marginVertical: 15,
        color: globalStyles.primary,
        fontWeight: "bold",
    },
    input: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: globalStyles.primary,
        borderWidth: 0.5,
        borderRadius: 6,
    },
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
