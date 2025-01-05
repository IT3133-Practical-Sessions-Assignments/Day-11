import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Platform } from 'react-native';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { PaperProvider, Text, Divider, TextInput, Button } from 'react-native-paper';

export default function ContactUs() {
    const [name, setName] = useState();
    const navigation = useNavigation();
    return (
        <PaperProvider>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView}
            >

                <View style={styles.header}>
                    <Text variant="headlineLarge">Contact Us</Text>
                    <Divider />
                </View>
            </KeyboardAvoidingView>
        </PaperProvider>

    );
}