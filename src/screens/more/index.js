import {View,Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';
import AppStyles from '../../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = ()=>{
    return(
        <SafeAreaView style={{backgroundColor:AppStyles.colors.topBottomColor}}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{padding:10}}>
                    <Text style={{color:"#fff", fontSize:18}}>More</Text>
                </View>
                
                <View style={{flexDirection:"column", alignItems:"center", justifyContent:"center", margin:10, padding:10}}>
                    <Image borderRadius={10} source={require('../../../assets/mln.png')} style={{width:100, height:100, margin:5}}/>
                    <Text style={{margin:10, color:"#fff"}}>Emile SHUMBUSHO</Text>
                    <Text style={{color:AppStyles.colors.lightGreyColor}}>shumbushoemilef@gmail.com</Text>
                    <TouchableOpacity style={{margin:10}}>
                        <Text style={{color:AppStyles.colors.btnColor}}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                
                

                

                <View style={{backgroundColor:AppStyles.colors.containerColor, borderTopEndRadius:10, borderTopStartRadius:10, height:500}}>
                    <View style={{margin:10}}>
                        <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                            <Feather name="inbox" size={24} color="white" style={{padding:10}}/>
                            <Text style={{color:"#fff"}}>Inbox</Text>
                        </View>
                        
                        <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                            <AntDesign name="user" size={24} color="white" style={{padding:10}}/>
                            <Text style={{color:"#fff"}}>Account Settings</Text>
                        </View>

                        <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                            <Fontisto name="world-o" size={24} color="white" style={{padding:10}}/>
                            <Text style={{color:"#fff"}}>Language</Text>
                        </View>

                        <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                            <AntDesign name="questioncircle" size={24} color="white" style={{padding:10}}/>
                            <Text style={{color:"#fff"}}>HELP, FAQ</Text>
                        </View>

                        
                        
                        
                        <TouchableOpacity style={{margin:10}}>
                            <Text style={{color:AppStyles.colors.lightGreyColor}}>Terms & Condition</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:10}}>
                            <Text style={{color:AppStyles.colors.lightGreyColor}}>Privacy & Policy</Text>
                        </TouchableOpacity>

                        <View style={[styles.textField, {justifyContent:"center"}]}>
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <Text style={{color:"#fff"}}>Log Out</Text>
                        </TouchableOpacity>
                        </View>
    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppStyles.colors.topBottomColor,
    },
    top:{
        flexDirection:"row",
        alignItems:"center",
        margin:10,
        
    },
    content:{
        width:"100%",
        height:"100%",
        backgroundColor:AppStyles.colors.containerColor,
        flexDirection:"column",
        padding:20
    },

    textField:{
        flexDirection:"row",
        alignItems:"center",
        borderRadius:5,
        borderColor:AppStyles.colors.lightGreyColor,
        borderWidth:1,
        width:"100%",
        height:40,
        padding:10,
    },
    signInBtn:{
        width:"100%",
        height:40,
        backgroundColor:AppStyles.colors.btnColor,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
    },
})

