import {View,Text, Image, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles from '../../styles/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const DownloadedScreen = ()=>{
    return(
        <SafeAreaView style={{backgroundColor:AppStyles.colors.topBottomColor}}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text style={{margin:20, fontSize:18, color:"#fff"}}>My List</Text>
                </View>
                <View style={styles.container}>

                <View style={{flexDirection:"row", margin:5,}}>

                <Image borderRadius={10} source={require('../../../assets/shang.jpg')} style={{width:190, height:100, margin:10}}/>

                <View style={{flexDirection:"column"}}>
                    <View style={{top:5}}>
                        <Text style={{color:"#fff", fontSize:14, fontWeight:"bold",}}>
                            The shawsank Red..
                        </Text>
                        <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                        Two imprisoned were 
                        </Text>
                        <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                        great legends
                        </Text>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", top:30}}>
                        <MaterialIcons name="hd" size={24} color={AppStyles.colors.btnColor}/>
                        <Text style={{color:"#fff", padding:5}}>20M</Text>
                        <Text style={{color:"#fff"}}>13+</Text>
                    </View>
                </View>

                </View>



                    <View style={{flexDirection:"row", margin:5,}}>

                        <Image borderRadius={10} source={require('../../../assets/shang.jpg')} style={{width:190, height:100, margin:10}}/>

                        <View style={{flexDirection:"column"}}>
                            <View style={{top:5}}>
                                <Text style={{color:"#fff", fontSize:14, fontWeight:"bold",}}>
                                    The shawsank Red..
                                </Text>
                                <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                                Two imprisoned were 
                                </Text>
                                <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                                great legends
                                </Text>
                            </View>
        
                            <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", top:30}}>
                                <MaterialIcons name="hd" size={24} color={AppStyles.colors.btnColor}/>
                                <Text style={{color:"#fff", padding:5}}>20M</Text>
                                <Text style={{color:"#fff"}}>13+</Text>
                            </View>
                        </View>

                    </View>



                    <View style={{flexDirection:"row", margin:5,}}>

                        <Image borderRadius={10} source={require('../../../assets/shang.jpg')} style={{width:190, height:100, margin:10}}/>

                        <View style={{flexDirection:"column"}}>
                            <View style={{top:5}}>
                                <Text style={{color:"#fff", fontSize:14, fontWeight:"bold",}}>
                                    The shawsank Red..
                                </Text>
                                <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                                Two imprisoned were 
                                </Text>
                                <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                                great legends
                                </Text>
                            </View>
        
                            <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", top:30}}>
                                <MaterialIcons name="hd" size={24} color={AppStyles.colors.btnColor}/>
                                <Text style={{color:"#fff", padding:5}}>20M</Text>
                                <Text style={{color:"#fff"}}>13+</Text>
                            </View>
                        </View>

                    </View>




                    <View style={{flexDirection:"row", margin:5,}}>

                        <Image borderRadius={10} source={require('../../../assets/shang.jpg')} style={{width:190, height:100, margin:10}}/>

                        <View style={{flexDirection:"column"}}>
                            <View style={{top:5}}>
                                <Text style={{color:"#fff", fontSize:14, fontWeight:"bold",}}>
                                    The shawsank Red..
                                </Text>
                                <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                                Two imprisoned were 
                                </Text>
                                <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                                great legends
                                </Text>
                            </View>
        
                            <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", top:30}}>
                                <MaterialIcons name="hd" size={24} color={AppStyles.colors.btnColor}/>
                                <Text style={{color:"#fff", padding:5}}>20M</Text>
                                <Text style={{color:"#fff"}}>13+</Text>
                            </View>
                        </View>

                    </View>


                    <View style={{flexDirection:"row", margin:5,}}>

                        <Image borderRadius={10} source={require('../../../assets/shang.jpg')} style={{width:190, height:100, margin:10}}/>

                        <View style={{flexDirection:"column"}}>
                            <View style={{top:5}}>
                                <Text style={{color:"#fff", fontSize:14, fontWeight:"bold",}}>
                                    The shawsank Red..
                                </Text>
                                <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                                Two imprisoned were 
                                </Text>
                                <Text style={{color:AppStyles.colors.lightGreyColor, fontSize:12,}}>
                                great legends
                                </Text>
                            </View>
        
                            <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", top:30}}>
                                <MaterialIcons name="hd" size={24} color={AppStyles.colors.btnColor}/>
                                <Text style={{color:"#fff", padding:5}}>20M</Text>
                                <Text style={{color:"#fff"}}>13+</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor:AppStyles.colors.containerColor,
    },

})

export default DownloadedScreen;







