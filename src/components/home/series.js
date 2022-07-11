import { View, Image, Text,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const Series = (navigator)=>{
    const [popFilms, SetPopFilms] = useState([]);
    useEffect(()=>{
        fetchFilms();
    }, [])
    const fetchFilms = async()=>{
        try{
            const {data} = await axios({
                method: 'get',
                url:'https://api.themoviedb.org/3/tv/airing_today?api_key=835f090de1e629571963fd0ec5d0a082',
            });

            if(data){
                const movies = data.results;
                SetPopFilms(movies)
            }
        }catch(err){
            console.log(err.message)
        }
    };
    return(
        <SafeAreaView>
                {
                    popFilms? (
                        <FlatGrid
                            itemDimension={90}
                            data={popFilms}
                            // spacing={0}
                            renderItem={({ item}) => (
                                <TouchableOpacity onPress={()=>{navigator.navigation.navigate("details",item)}}>
                                    <View>
                                        <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} style={{width:110, height:150}}/>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    ):(
                        <Text>No Series</Text>
                    )
                }
        </SafeAreaView>
    )
}

export default Series;