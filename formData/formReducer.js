// Reducer Form via useReducer

export const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_VALIDATION":
            const updatedInputValues = {
                ...state.inputValues,
                [action.input]: action.value,
            };

            const updatedValidInput = {
                ...state.isValidInput,
                [action.input]: action.isValid,
            };

            let updatedFormIsValid = true;
            for (const key in updatedValidInput) {
                updatedFormIsValid = updatedFormIsValid && updatedValidInput[key];
            }

            return {
                ...state,
                inputValues: updatedInputValues,
                isInputValid: updatedValidInput,
                isValidForm: updatedFormIsValid,
            };

        default:
            return state;
    }
};
