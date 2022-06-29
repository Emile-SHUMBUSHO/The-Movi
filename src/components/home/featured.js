import React from "react";
import { useState, useEffect } from "react";
import {View, Text, StyleSheet, ImageBackground,ActivityIndicator} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AppStyles from '../../styles/styles';
import NowPlayingMovies from '../nowPlayingMovie';
import TopRatedMovies from "../topRatedMovie";
import PopularMovies from "../popularMovie";

const FeaturedMovie = (props)=>{
    const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
    const [topRatedMovie, setTopRatedMovie] = useState([]);
    const [popMovie, setPopMovie] = useState([]);
    const [is_loading, setIs_loading] = useState(true);
    useEffect(()=>{
        fetchnowPlayingMovie();
        fetchTopRatedMovie();
        fetchPopMovie();
    }, [])
    const fetchnowPlayingMovie = async()=>{
            try{
                setIs_loading(true)
                const {data} = await axios({
                    method: 'get',
                    url:'https://api.themoviedb.org/3/movie/now_playing?api_key=835f090de1e629571963fd0ec5d0a082',
                });

                if(data){
                    console.log(data)
                    setIs_loading(false)
                    const movies = data.results;
                    setNowPlayingMovie(movies)
                }
            }catch(err){
                setIs_loading(false)
                console.log(err.message)
            }
    };

    const fetchTopRatedMovie = async()=>{
        try{
            const {data} = await axios({
                method: 'get',
                url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=835f090de1e629571963fd0ec5d0a082',
            });
            if(data){
                const movie = data.results;
                setTopRatedMovie(movie)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    const fetchPopMovie = async()=>{
        try{
            const {data} = await axios({
                method: 'get',
                url: 'https://api.themoviedb.org/3/movie/popular?api_key=835f090de1e629571963fd0ec5d0a082',
            });
            if(data){
                const movie = data.results;
                setPopMovie(movie)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView 
                alwaysBounceVertical
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.touchablecontainer}>
                <TouchableOpacity style={styles.touchablebtn}>
                        <Text style={styles.touchabletxt}>Popular Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablebtn}>
                        <Text style={styles.touchabletxt}>Marvel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablebtn}>
                        <Text style={styles.touchabletxt}>Fans Choice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchablebtn}>
                        <Text style={styles.touchabletxt}>Star war</Text>
                </TouchableOpacity>
                </View>

                <View style={styles.nowPlayingMovie}>
                    <Text style={{color:"#fff", fontWeight:"bold"}}> Now Playing Movies </Text>
                    <TouchableOpacity><Text style={{color:AppStyles.colors.lightGreyColor, fontSize:10,}}> View More </Text></TouchableOpacity>
                </View>


                {
                    is_loading && <ActivityIndicator siz="small" color="red" title="Loading..."/>
                }
                
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{bottom:10}}
                >
                     
                    {
                        nowPlayingMovie.map((movie,index)=>{
                            return(
                              <NowPlayingMovies
                                key={movie.id}
                                title = {movie.title}
                                image = {movie.backdrop_path}
                                navigation={()=>{props.navigation.navigate("details",movie)}}
                              />
                            )
                        })
                    }

                </ScrollView>

                <View style={styles.nowPlayingMovie}>
                    <Text style={{color:"#fff", fontWeight:"bold"}}> Top Rated Movies </Text>
                    <TouchableOpacity><Text style={{color:AppStyles.colors.lightGreyColor, fontSize:10,}}> View More </Text></TouchableOpacity>
                </View>
        
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{bottom:10}}
                >
                    {
                        topRatedMovie.map((movie, index)=>{
                            return(
                                <TopRatedMovies
                                    title={movie.title}
                                    image={movie.backdrop_path}
                                />
                            )
                        })
                    }
                </ScrollView>

                <View style={styles.imgContainerBottom}>
                    <View style={styles.nowPlayingMovie}>
                        <Text style={{color:"#fff", fontWeight:"bold"}}> Popular on muvi </Text>
                        <TouchableOpacity><Text style={{color:AppStyles.colors.lightGreyColor, fontSize:10,}}> View More </Text></TouchableOpacity>
                    </View>

                    <View style={{alignItems:"center", justifyContent:"center"}}>
                        {
                            popMovie.map((movie, index)=>{
                                return(
                                    <PopularMovies
                                    title = {movie.title}
                                    image = {movie.backdrop_path}
                                />
                                )
                            })
                        }
                    </View>

                </View>

            </ScrollView> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppStyles.colors.containerColor,
        flex:1,
    },
    touchablecontainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    touchablebtn:{
        borderWidth:1,
        borderRadius:3,
        borderColor:AppStyles.colors.lightGreyColor,
    },
    touchabletxt:{
        color:"#fff",
        fontSize:12,
        padding:5,
    },
    nowPlayingMovie:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        margin:15,
    },
    imgContainer:{
        flex:1,
        width:220,
        height:100,
        margin:5,
        left:15,
        borderRadius:10,
    },

    imgbckg:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        borderRadius:10,
        padding:5
    },
    imgContainerBottom:{
        flexDirection:"column",
        backgroundColor:AppStyles.colors.topBottomColor,


    },
    imgContainerInside:{
        width:"90%",
        height:150,
        borderRadius:5,
        margin:5,
        backgroundColor:AppStyles.colors.lightGreyColor,
    }

})

export default FeaturedMovie
