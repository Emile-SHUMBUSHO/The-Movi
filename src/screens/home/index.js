import {View, Image, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import AppStyles from '../../styles/styles';
import TopNavigator from '../../navigation/topNavigator';

const HomeScreen = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Image source={require('../../../assets/logo.png')} style={{width:120,height:30,}}/>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Feather name="bookmark" size={24} color="#fff" />
                    <Feather name="bell" size={24} color="#fff" style={{padding:10}}/>
                </View>
            </View>
            <TopNavigator/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppStyles.colors.topBottomColor,
    },
    top:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        margin:5,
        padding:10,

    }
})

export default HomeScreen;