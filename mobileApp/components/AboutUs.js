import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';


export default function AboutUs() {
    const navigation = useNavigation();
    return (
<PaperProvider>
<ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                   
                    <Text variant="headlineLarge">History</Text>
                    
                    <Divider />
                    <View style={styles.imagepad}>
    <Image source={require('../assets/uovlogo.png')} style={styles.image} />
</View>

