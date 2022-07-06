import {View,Text, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather} from '@expo/vector-icons';
import AppStyles from '../../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Trailer from '../../components/trailler';


const DetailsScreen = ({route, navigation})=>{
    const {id, title, backdrop_path, overview,release_date} = route.params;
    const [isLoading, setIsLoading] = useState();
    const [playing, setPlaying] = useState(false);
    const [trailer, setTrailler] = useState([]);
    
    useEffect(() => {
      fetchTrailer(id)
    }, []);

    const fetchTrailer = async(id)=>{
        try{
            const {data} = await axios({
                method: 'get',
                url:`https://api.themoviedb.org/3/movie/${id}/videos?api_key=835f090de1e629571963fd0ec5d0a082`
            });
            if(data){
                console.log("check");
                setIsLoading(false)
                setTrailler(data.results);
            }
        }catch(err){
            setIsLoading(false)
            console.log(err.message)
        }
    }
   
    console.log(trailer)
    let youtubekey = trailer.filter(({name}) => name==="Official Trailer");
    console.log(youtubekey)
    
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
                        <Text style={{color:"#fff", marginTop: 10, fontSize: 20}}>Trailler</Text>
                        <View
                            style={{
                            width: "100%",
                            height: 290,
                            }}
                        >
                            {youtubekey?.map((video, index) => {
                            return (<Trailer key={index} movie={video.key}/>);
                            })}
                        
                        </View>

                        {/* <View
                            style={{
                            width: "100%",
                            height: 290,
                            zIndex: 1,
                            backgroundColor: "red",
                            }}
                        ><WebView
      source={{
        uri: `https://www.youtube.com/embed/clqcg1FZrnI`,
      }}
    /></View> */}
                        
                        {/* ) 
                        
                        : (
                            
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
                            style={{ position: "absolute", width: 150, height: 250, top: 80 }}
                        />

                        )
                        
                        } */}



                        
                        {/* <TouchableOpacity
                            onPress={() => setPlaying(!playing)}
                            style={{
                                flexDirection: "row",
                                height: 40,
                                minWidth: 340,
                                backgroundColor: "#fed130",
                                marginVertical: 15,
                                borderRadius: 5,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            >
                            {playing ? (
                                <icons.FontAwesome5 name="stop-circle" size={16} color="black" />
                            ) : (
                                <icons.Feather name="play" size={16} color="black" />
                            )}
                            <Text style={{ paddingHorizontal: 5 }}>
                                {playing ? "Stop" : "Play"}
                            </Text>
                        </TouchableOpacity> */}
                    
                    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailsScreen;