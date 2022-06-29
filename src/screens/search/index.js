import {View,Text, ImageBackground,TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles from '../../styles/styles';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const SearchingScren = ()=>{
    return(
        <SafeAreaView style={{backgroundColor:AppStyles.colors.topBottomColor, flex:1}}>
            <ScrollView>
                <View style={{flexDirection:"row", alignItems:"center",  justifyContent:"space-between", margin:10, backgroundColor:AppStyles.colors.serchBarColor, height:40,}}>
                    <TextInput
                        placeholder='Commedy'
                    style={{margin:5}}/>
                    <Feather name="search" size={24} color="yellow" style={{margin:5}}/>
                </View>
                <View style={{backgroundColor:AppStyles.colors.containerColor, height:"100%"}}>
                    <View>
                        <Text style={{color:"#fff", margin:10}}>
                            Results for Commedy
                        </Text>
                    </View>
                    
                        <TouchableOpacity style={{margin:10}}>
                            <ImageBackground borderRadius={10} source={require('../../../assets/shang.jpg')}>
                                <View style={styles.imgContainer}>
                                    <View style={{backgroundColor:AppStyles.colors.btnColor, height:20,width:30,borderRadius:5, margin:5}}>
                                        <Text>3.4</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={{margin:10}}>
                            <ImageBackground borderRadius={10} source={require('../../../assets/shang.jpg')}>
                                <View style={styles.imgContainer}>
                                    <View style={{backgroundColor:AppStyles.colors.btnColor, height:20,width:30,borderRadius:5, margin:5,}}>
                                        <Text>3.4</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={{margin:10}}>
                            <ImageBackground borderRadius={10} source={require('../../../assets/shang.jpg')}>
                                <View style={styles.imgContainer}>
                                    <View style={{backgroundColor:AppStyles.colors.btnColor, height:20,width:30,borderRadius:5, margin:5,}}>
                                        <Text>3.4</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={{margin:10}}>
                            <ImageBackground borderRadius={10} source={require('../../../assets/shang.jpg')}>
                                <View style={styles.imgContainer}>
                                    <View style={{backgroundColor:AppStyles.colors.btnColor, height:20,width:30,borderRadius:5, margin:5,}}>
                                        <Text>3.4</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imgContainer:{
        width:"100%",
        height:150,
        flexDirection:"row",
        justifyContent:"flex-end",
    },

})

export default SearchingScren;