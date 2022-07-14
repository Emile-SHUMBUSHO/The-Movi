import {View,Text, ImageBackground,TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles from '../../styles/styles';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import SearchContent from '../../components/search.movies';
import axios from 'axios';
import { FlatGrid } from "react-native-super-grid";
import { useState, useEffect } from 'react';

const SearchingScren = (navigator)=>{

    const [keyword, setKeyword] = useState("");
    const [getSearchMovie, setSearchMovie] = useState();
    const key = `835f090de1e629571963fd0ec5d0a082`;
    useEffect(() => {
        if(keyword !== 1)SearchMovie(keyword)
    }, [keyword]);

    const SearchMovie =async ()=>{
        try{
            const {data} = await axios({
                method:'get',
                url:`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${keyword}&page=1&include_adult=false`
            })

            if(data){
                const movie = data.results
                setSearchMovie(movie);
            }
        }catch{
            (err)=>{console.log(err)}
        }
    }


    return(
        <>
            <SafeAreaView style={{backgroundColor:AppStyles.colors.topBottomColor, flex:1}}>
                <ScrollView>
                    <View style={{flexDirection:"row", alignItems:"center",  justifyContent:"space-between", margin:10, backgroundColor:AppStyles.colors.serchBarColor, height:40, borderRadius:5}}>
                        <TextInput
                            // label='Search For Your Favorite Movies'
                            placeholder='Search For Your Favorite Movies'
                            placeholderTextColor={AppStyles.colors.btnColor}
                            autoCapitalize={"none"}
                            style={{margin:5, color:"#ffffff"}}
                            value={keyword}
                            onChangeText={(text) => setKeyword(text)}
                        />
                        
                    </View>
                    <View style={{height:"100%",}}>
                        <View>
                            {
                                keyword ? (
                                    <View style={{flexDirection:"row", alignItems:"center", padding:5}}>
                                        <Feather name="search" size={24} color="yellow" style={{margin:5}}/>
                                        <Text style={{color:"#fff", margin:10}}>{keyword}</Text>
                                    </View>
                                    
                                ):(
                                    <Text></Text>
                                )
                            }
                            
                        </View>
                            {
                                getSearchMovie && keyword !== "" ? (
                                    <FlatGrid
                                        itemDimension={170}
                                        data={getSearchMovie}
                                        // style={styless.gridView}
                                        spacing={10}
                                        renderItem={({ item, index }) => (
                                        <TouchableOpacity
                                            onPress={()=>{navigator.navigation.navigate('details', item)}}
                                        >
                                            <ImageBackground style={{height: 400}} borderRadius={10}
                                            source={{
                                                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                                            }}
                                            >
                                                <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10}}>
                                                    <View style={{backgroundColor:AppStyles.colors.btnColor, width:30,height:20, borderRadius:3, justifyContent:"center", alignItems:"center"}}>
                                                        <Text style={{ fontWeight: "bold", fontSize:12,}}>HD</Text>
                                                    </View>
                                                </View>

                                                <View style={{ flexDirection: "column", justifyContent: "flex-end", height:300, padding:10}}>
                                                    <Text style={{ color:AppStyles.colors.btnColor, fontWeight: "bold", fontSize:25 }}>
                                                        {item.original_title}
                                                    </Text>
                                                    <Text
                                                        style={{ color: "rgba(255,255,255,0.5)", fontSize: 18}}
                                                    >
                                                        {item.overview?.split("", 30)}....
                                                    </Text>
                                                </View>

                                            </ImageBackground>
                                        </TouchableOpacity>
                                        )}
                                    />
                                ):(
                                    <SearchContent/>
                                )
                            }
                            
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default SearchingScren;