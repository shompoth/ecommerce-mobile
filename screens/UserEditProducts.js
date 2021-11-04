import React, { useReducer } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import globalStyles from "../styles/globalStyles";

// Composants
import Input from "../components/Input/Input";
import BtnForm from "../components/BtnForm/BtnForm";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Action
import { editProduct } from "../redux/actions/actionEditProduct";
import { createProduct } from "../redux/actions/actionCreateProduct";

// Reducer
import { formReducer } from "../formData/formReducer";

const UserEditProducts = ({ route, navigation }) => {
    // Variable
    const productId = route.params.productId;

    // Redux
    const myProduct = useSelector(state =>
        state.products.loggedInMemberProducts.find(product => product.id === productId),
    );
    const dispatch = useDispatch();

    formInitialState = {
        inputValues: {
            title: myProduct ? myProduct.title : "",
            type: myProduct ? myProduct.type : "",
            image: "",
            price: myProduct ? myProduct.price : "",
            desc: myProduct ? myProduct.description : "",
        },
        isInputValid: {
            title: myProduct ? true : false,
            type: myProduct ? true : false,
            image: "",
            price: myProduct ? true : false,
            desc: myProduct ? true : false,
        },
        isValidForm: myProduct ? true : false,
    };

    // Reducer
    const [formState, formActionsDispatch] = useReducer(formReducer, formInitialState);

    // Fonction
    const handleSubmit = () => {
        const { title, type, image, price, desc } = formState.inputValues;

        if (productId) {
            dispatch(editProduct(productId, title, type, +price, desc));
            navigation.goBack();
        } else {
            // dispatch(createProduct(title, type, image price, desc));
            const imageNotAvaible = require("../assets/Image_not_available.png");
            dispatch(createProduct(title, type, imageNotAvaible, +price, desc));
            navigation.goBack();
        }
    };

    const inputHandler = (inputName, text) => {
        let isValidInput = false;
        if (text.length > 0) {
            isValidInput = true;
        }

        // dispatch action
        formActionsDispatch({
            type: "INPUT_VALIDATION",
            value: text,
            isValid: isValidInput,
            input: inputName,
        });
    };

    return (
        <ScrollView>
            <View style={styles.formContainer}>
                <Input
                    label="Titre"
                    value={formState.inputValues.title}
                    onKeyStroke={text => inputHandler("title", text)}
                />

                <Input
                    label="Type de produit"
                    value={formState.inputValues.type}
                    onKeyStroke={text => inputHandler("type", text)}
                />

                {myProduct ? null : (
                    <Input
                        label="Image (URL)"
                        value={formState.inputValues.image}
                        onKeyStroke={text => inputHandler("image", text)}
                    />
                )}

                <Input
                    label="Prix €"
                    value={formState.inputValues.price.toString()}
                    onKeyStroke={text => inputHandler("price", text)}
                    keyboardType="decimal-pad"
                />

                <Input
                    label="Informations"
                    value={formState.inputValues.desc}
                    onKeyStroke={text => inputHandler("desc", text)}
                    multiline
                    numberOfLines={5}
                />

                <BtnForm
                    btnText={
                        formState.isValidForm
                            ? "Valider"
                            : "Veuillez remplir tous les champs"
                    }
                    activate={formState.isValidForm ? false : true}
                    handleSubmit={handleSubmit}
                />
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
});
