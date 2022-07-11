
import {View,StyleSheet,Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles from '../../../styles/styles';
import { AntDesign, Zocial, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useState} from 'react';

import { auth } from '../../../firebase';


const SignInScreen = (navigator) =>{

        const [isLoading, setIsLoading] = useState(false)
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
    
        const handleSignIn = ()=>{
            setIsLoading(true)
            auth
            .signInWithEmailAndPassword(email,password)
            .then(userCredentials =>{
                const user = userCredentials.user;
                console.log(user.email)
            }).then(()=>{
                navigator.navigation.navigate("main")
            }).catch((error)=>{
                setIsLoading(false)
                alert("Email or Password Incorrect")
            })
        }


    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.top} onPress={()=> navigator.navigation.navigate("welcome")}>
                <AntDesign name="arrowleft" size={22} color="white" style={{margin:10}} />
                <Text style={{color:"white", fontWeight:"bold", fontSize:16,}}>SignIn</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                    {
                        isLoading && <ActivityIndicator size="small" color="green"/>
                    }
                    <Text style={{color:AppStyles.colors.lightGreyColor}}>
                        Emil Address
                    </Text>
                    <View style={[styles.textField, {top:5}]}>
                        <Zocial name="email" size={19} color={AppStyles.colors.lightGreyColor} />
                        <TextInput
                            placeholder='e.g emile@gmail.com'
                            placeholderTextColor={AppStyles.colors.lightGreyColor}
                            style={{left:10, color:AppStyles.colors.btnColor}}
                            value={email}
                            onChangeText={text=> setEmail(text)}
                            />
                    </View>

                    <Text style={{color:AppStyles.colors.lightGreyColor, top:10}}>
                        Password
                    </Text>

                    <View style={[styles.textField, {top:20}]}>
                        <Feather name="lock" size={19} color={AppStyles.colors.lightGreyColor} />
                        <TextInput
                            placeholder='Your password'
                            placeholderTextColor={AppStyles.colors.lightGreyColor}
                            secureTextEntry={true}
                            style={{left:10, color:AppStyles.colors.btnColor}}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            />
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"flex-end",top:30}}>
                        <TouchableOpacity>
                            <Text style={{color:"#fff"}}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={[styles.signInBtn, {top:40}]} onPress={handleSignIn}>
                        <Text style={styles.getStartedTitle}>Sign In</Text>
                    </TouchableOpacity>

                    <View style={{alignItems:"center", top:50}}>
                        <Text style={{color:"#fff"}}>Or Sign In With</Text>
                    </View>
                   

                    <View style={[styles.textField, {justifyContent:"center", top:60}]}>
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <AntDesign name="google" size={19} color="yellow" />
                            <Text style={{left:5, color:"#fff"}}>Google</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.textField, {justifyContent:"center", top:80}]}>
                        <TouchableOpacity style={{flexDirection:"row",left:20}}>
                            <MaterialCommunityIcons name="movie-roll" size={19} color="#fff"/>
                            <Text style={{left:5, color:"#fff"}}>Watch Movie</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"center", top:100}}>
                        <Text style={{color:"#fff"}}>Don't have an account?</Text>
                        <TouchableOpacity onPress={()=>navigator.navigation.navigate("signUp")}>
                            <Text style={{color:AppStyles.colors.btnColor, left:5}}>Sign Up</Text>
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

export default SignInScreen;