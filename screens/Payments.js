import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

// Composants
import EmptyMsg from "../components/EmptyMsg/EmptyMsg";
import PaidItems from "../components/PaidItems/PaidItems";

// Redux
import { useSelector } from "react-redux";

const Payments = () => {
    const payments = useSelector(state => state.payments.payments);
    console.log(payments);

    if (payments.length) {
        return (
            <FlatList
                data={payments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <PaidItems
                        totalPrice={item.total}
                        date={item.date}
                        productDetails={item}
                    />
                )}
            />
        );
    } else {
        return <EmptyMsg>Pas encore d'achats effectués</EmptyMsg>;
    }
};

const styles = StyleSheet.create({});

export default Payments;
