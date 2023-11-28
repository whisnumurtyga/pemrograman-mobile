import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    Linking,
    Alert
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';


const About = () => {

    const handleClearData = async () => {
        Alert.alert(
            'Confirmation',
            `Are you sure you want to clear data`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Clear Data',
                    onPress: async () => {
                        try {
                            await AsyncStorage.clear();
                            console.log('Data Cleared');
                            Toast.show({
                                type: 'success',
                                text1: 'Success',
                                text2: 'Successfully cleared all tasks!',
                                position: 'bottom',
                                bottomOffset: 40, // Atur offset dari bawah layar
                                rightOffset: 30, // Atur offset dari kanan layar
                            });                            
                        } catch (e) {
                            console.log('Error clear data: in about.js');
                            console.error(e);
                        }
                    },
                    style: 'destructive',
                },
            ]
        );
    };


    return (
        <View style={styles.container}>
            <Toast ref={(ref) => Toast.setRef(ref)} />
            <Text style={styles.heading}>About</Text>
            <Text style={styles.title}>About This Application</Text>
            <Text style={styles.content}>Aplikasi ini dirancang sebagai studi kasus untuk pembelajaran mata kuliah Pemrograman Mobile Program Studi Informatika Institut Teknologi Telkom Surabaya</Text>
            <Text style={{ marginBottom: 5 }} onPress={() =>
                Linking.openURL("https://www.freepik.com/icon/task-list_9329651#fromView=search&term=todo+list&page=1&position=1&track=ais").catch((err) => console.error("Error", err))
            }>Icon by Azland Studio (Freepik)</Text>
            <Text style={{ marginBottom: 15 }} onPress={() =>
                Linking.openURL("https://daudmuhajir.my.id").catch((err) => console.error("Error", err))
            }>Whisnumurty Galih Ananta (1203210002)</Text>

            <Button style={{ marginTop: 15 }} title="Clear Data" onPress={() => handleClearData()}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        color: "blue",
    },
    content: {
        fontSize: 18,
        marginBottom: 20,
    }
});

export default About;
