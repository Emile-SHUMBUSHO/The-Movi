
import {View, Image, StyleSheet,Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles from '../../styles/styles';

const GetStartScreen = (navigator) =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
               <Image source={require('../../../assets/logo.png')} style={{width:180,height:50,}}/>
            </View>
            <View style={styles.content}>
                <View style={{alignItems:"center", justifyContent:"center", margin:20, top:20,}}>
                    <Image source={require('../../../assets/movi.png')} style={{width:220,height:220}}/>
                </View>
                <View style={{flexDirection:"column",alignItems:"center", margin:30, top:20}}>
                    <Text style={styles.title}>Welcome to Muvi</Text> 
                    <Text style={styles.introTitle}>Free movie streaming all your needs</Text>
                    <Text style={styles.introTitle}>everytime and everywhere.</Text>
                </View>
                <View style={{flexDirection:"column",alignItems:"center", margin:20, justifyContent:"flex-end", height:150,}}>
                        <TouchableOpacity style={styles.watchMovieBtn} onPress={() => navigator.navigation.navigate("signIn")}>
                            <Text style={styles.getStartedTitle}>Watch Movie</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signInBtn} onPress={() => navigator.navigation.navigate("signIn")}>
                            <Text style={{color:"#fff", fontWeight:"bold", fontSize:13,}}>Sign In</Text>
                        </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppStyles.colors.topBottomColor,
    },
    top:{
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        margin:10,
    },
    content:{
        width:"100%",
        height:"100%",
        backgroundColor:AppStyles.colors.containerColor,
    },
    title:{
        color:AppStyles.colors.white,
        fontSize:18,
        fontWeight:"bold",
        margin:5,

    },
    introTitle:{
        color:AppStyles.colors.lightGreyColor,
    },
    watchMovieBtn:{
        width:"80%",
        height:40,
        backgroundColor:AppStyles.colors.btnColor,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,

    },
    signInBtn:{
        margin:10,
    }
})

export default GetStartScreen;