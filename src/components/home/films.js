import {SafeAreaView,View,Image, ScrollView} from 'react-native';

const Films = ()=>{
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

export default Films;