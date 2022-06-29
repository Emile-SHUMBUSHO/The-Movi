import {SafeAreaView,View,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Series = ()=>{
    return(
        <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                </View>

                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                </View>

                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                </View>

                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                    <Image source={require('../../../assets/shang.jpg')} style={{width:110, height:150, margin:4}}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Series;