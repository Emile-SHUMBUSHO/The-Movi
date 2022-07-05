import {View,Text, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather } from '@expo/vector-icons';
import AppStyles from '../../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';
const DetailsScreen = ({route, navigation})=>{
        const {title, backdrop_path, overview,release_date} = route.params;
    return(
        <SafeAreaView style={{backgroundColor:AppStyles.colors.topBottomColor}}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity style={{padding:10}} onPress={()=> navigation.goBack('main')}>
                    <AntDesign name="arrowleft" size={24} color="#fff"/>
                </TouchableOpacity>
                <Image source={{uri:`https://image.tmdb.org/t/p/w500/${backdrop_path}`}} style={{width:"100%", height:180}}/>
                <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center", margin:10}}>
                    <Text style={{color:"#fff", fontSize:22, fontWeight:"bold"}}>{title}</Text>
                    <TouchableOpacity>
                        <Feather name="bookmark" size={28} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{margin:10}}>
                    <Text style={{color:"#fff"}}>{release_date} | 17+ | Action, Drama, & Family</Text>
                </View>
                <View style={{margin:10}}>
                    <Text style={{color:"yellow"}}>
                        Rating
                    </Text>
                </View>

                <View style={{margin:10, flexDirection:"row", justifyContent:"flex-start"}}>
                    <TouchableOpacity>
                        <Feather name="upload" size={24} color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{padding:5, color:"#fff"}}>
                            Share Movie
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{backgroundColor:AppStyles.colors.containerColor, borderTopEndRadius:10, borderTopStartRadius:10,}}>
                    <View style={{margin:10}}>
                        <Text style={{color:"#fff"}}>StoryLine</Text>
                        <Text style={{color:AppStyles.colors.lightGreyColor, top:5}}>
                            {overview} 
                        </Text>
                        <Text style={{color:"#fff", top:10}}>Trailler</Text>
                        <Image borderRadius={10} source={require('../../../assets/mln.png')} style={{width:"100%", height:200, top:20}}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailsScreen;