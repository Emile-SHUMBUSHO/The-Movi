import {View,Text, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, Entypo} from '@expo/vector-icons';
import AppStyles from '../../styles/styles';
import { ScrollView } from 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Trailer from '../../components/trailler';
import { FlatGrid } from 'react-native-super-grid';

const DetailsScreen = ({route, navigation})=>{
    const {id, title, backdrop_path, overview,release_date, original_title, vote_average} = route.params;
    const [isLoading, setIsLoading] = useState();
    const [trailer, setTrailler] = useState([]);
    const [related, SetRelated] = useState([]);
    
    useEffect(() => {
      fetchTrailer(id)
      fetchRelated(id)
    }, []);

    const fetchTrailer = async(id)=>{
        try{
            const {data} = await axios({
                method: 'get',
                url:`https://api.themoviedb.org/3/movie/${id}/videos?api_key=835f090de1e629571963fd0ec5d0a082`
            });
            if(data){
                setIsLoading(false)
                data.slice(0, 6)
                setTrailler(data.results);
            }
        }catch(err){
            setIsLoading(false)
            console.log(err.message)
        }
    }

    const fetchRelated = async (id)=>{
        try{
            const {data} = await axios({
                method: 'get',
                url: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=835f090de1e629571963fd0ec5d0a082`,
            });
            if(data){
                console.log(data);
                SetRelated(data.results);
            }
        }catch(e){console.log(e);}
    }

    let youtubekey = trailer.filter(({name}) => name==="Official Trailer");
    
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
                    <Text style={{color:"#fff"}}>{release_date} | {vote_average}+ | Action, Drama, & Family</Text>
                </View>
                <View style={{margin:10}}>
                    <Text style={{color:"yellow"}}>
                        Rating: {vote_average}
                    </Text>
                </View>

                <View style={{margin:10, flexDirection:"row", justifyContent:"space-between"}}>
                    {/* <TouchableOpacity>
                        <Feather name="upload" size={24} color="#FFF" />
                    </TouchableOpacity> */}
                    <TouchableOpacity style={{flexDirection:"row"}}>
                        <Feather name="upload" size={24} color="#FFF" />
                        <Text style={{padding:5, color:"#fff"}}>
                            Share Movie
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderColor:AppStyles.colors.lightGreyColor,padding:5, borderWidth:1, width:150, borderRadius:5, flexDirection: "row", justifyContent:"center", alignItems:"center"}}>
                        <Entypo name="plus" size={24} color={AppStyles.colors.btnColor} />
                        <Text style={{color:"white"}}>My List</Text>
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
                            top:10,
                            borderRadius:10,
                            }}
                        >
                            {youtubekey?.map((video, index) => {
                            return (<Trailer key={index} movie={video.key}/>);
                            })}
                        </View>
                        <Text style={{color:"#fff", margin:10, top:10}}>Related Movies</Text>
                        

                        
                    </View>
                </View>
                {
                    related?(
                        <FlatGrid
                            itemDimension={90}
                            spacing={10}
                            data={related}
                            renderItem={({ item })=>(
                                <TouchableOpacity onPress={()=>{fetchTrailer(id);
                                    navigation.navigate("details",item)}}>
                                    <View style={{top:10}}>
                                        <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} style={{width:110, height:130,}} borderRadius={5}/>
                                    </View>
                                    {/* <View>
                                        <Text>Doctor Strange</Text>
                                    </View> */}
                                </TouchableOpacity>
                                
                            )}
                        />
                    ):(
                        
                        <Text>Related Movies Not found</Text>
                        
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailsScreen;