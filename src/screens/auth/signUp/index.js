
import {View, Image, StyleSheet,Text, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles from '../../../styles/styles';
import { AntDesign, Zocial, Feather, Fontisto} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

import { auth } from '../../../firebase';

const SignUpScreen = (navigator) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = ()=>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log(user.email)
            alert('Signed Up')
        }).then(()=>{navigator.navigation.navigate("signIn")}).catch(error=>alert(error.message))
    }
    return(
        <SafeAreaView style={styles.container}>
            
            <TouchableOpacity style={styles.top} onPress={()=> navigator.navigation.navigate("signIn")}>
                <AntDesign name="arrowleft" size={22} color="white" style={{margin:10}} />
                <Text style={{color:"white", fontWeight:"bold", fontSize:16,}}>Register</Text>
            </TouchableOpacity>

            <View style={styles.content}>

                <View style={{alignItems:"center",justifyContent:"center", margin:10}}>
                    <Image source={require('../../../../assets/logo.png')} style={{width:120, height:30}}/>
                </View>
                <View style={{alignItems:"center", padding:10}}>
                    <Text style={{color:"#fff", textAlign:"center", padding:10}}>
                        Sign up to discover all our movies and enjoy
                        our features
                    </Text>
                </View>
            
                <View style={[styles.textField, {top:5}]}>
                    <TextInput
                        placeholder='Email Address'
                        placeholderTextColor={AppStyles.colors.btnColor}
                        style={{color:AppStyles.colors.btnColor}}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Zocial name="email" size={19} color={AppStyles.colors.btnColor} />
                </View>

                <View style={[styles.textField, {top:20}]}>
                    <TextInput 
                        placeholder='Password'
                        placeholderTextColor={AppStyles.colors.btnColor}
                        secureTextEntry={true}
                        style={{color:AppStyles.colors.btnColor}}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <Feather name="lock" size={19} color={AppStyles.colors.btnColor} />
                </View>

                {/* <View style={[styles.textField, {top:30}]}>
                    <TextInput 
                        placeholder='Confirm Password'
                        placeholderTextColor={AppStyles.colors.btnColor}
                        secureTextEntry={true}
                    />
                    <Feather name="lock" size={19} color={AppStyles.colors.btnColor} />
                </View> */}

                {/* <TouchableOpacity style={[styles.signInBtn, {top:50}]} onPress={() => navigator.navigation.navigate("signIn")}> */}
                <TouchableOpacity style={[styles.signInBtn, {top:50}]} onPress={handleSignUp}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>

                <View style={{flexDirection:"row", alignItems:"center",top:60, padding:15}}>
                    <Text style={{color:"#fff", fontSize:12,}}>By signing up I accept</Text>
                    <TouchableOpacity>
                        <Text style={{color:AppStyles.colors.btnColor, left:3, fontSize:12,}}>Terms of use</Text>
                    </TouchableOpacity>
                    <Text style={{color:"#fff", fontSize:12,left:5}}>And</Text>
                    <TouchableOpacity>
                        <Text style={{color:AppStyles.colors.btnColor, left:8, fontSize:12,}}>Privacy policy</Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:"center", top:50, padding:10}}>
                    <Text style={{color:"#fff", fontSize:12}}>Or empty signup With</Text>
                </View>

                <View style={[styles.textField, {justifyContent:"center", top:50, backgroundColor:"black", borderBottomWidth:0}]}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                        <Fontisto name="apple" size={16} color="#fff" />
                        <Text style={{left:5, color:"#fff", fontSize:12}}>Sign up with Apple</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={[styles.textField, {justifyContent:"center", top:60, backgroundColor:"#fff", borderBottomWidth:0}]}>
                    <TouchableOpacity style={{flexDirection:"row"}}>
                        <AntDesign name="google" size={16} color="yellow" />
                        <Text style={{left:5, color:"black", fontSize:12}}>Sign up with Google</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flexDirection:"row", justifyContent:"center", top:80}}>
                    <Text style={{color:"#fff", fontSize:12}}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigator.navigation.navigate("signIn")}>
                        <Text style={{color:AppStyles.colors.btnColor, left:5, fontSize:12}}>Sign in</Text>
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
        justifyContent:"space-between",
        borderRadius:5,
        borderColor:AppStyles.colors.lightGreyColor,
        borderBottomWidth:1,
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

export default SignUpScreen;