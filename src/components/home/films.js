import { View, Image, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { FlatGrid } from "react-native-super-grid";
import FilmComponent from "../films";

import axios from "axios";

const Films = (navigator) => {
  const [popFilms, SetPopFilms] = useState([]);
  useEffect(() => {
    fetchFilms();
  }, []);
  const fetchFilms = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/tv/popular?api_key=835f090de1e629571963fd0ec5d0a082",
      });

      if (data) {
        const movies = data.results;
        SetPopFilms(movies);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <SafeAreaView>
      {popFilms ? (
        <FlatGrid
          itemDimension={90}
          data={popFilms}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>{navigator.navigation.navigate("details", item)}}>
              <View>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                  style={{ width: 110, height: 150 }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No Movies</Text>
      )}
    </SafeAreaView>
  );
};

export default Films;

// import {SafeAreaView,ScrollView} from 'react-native';
// import {useEffect, useState} from 'react'
// import FilmComponent from '../films';

// import NowPlayingMovies from '../nowPlayingMovie';

// import axios from 'axios';

// import { StyleSheet, View, Text } from 'react-native';
// import { FlatGrid } from 'react-native-super-grid';

// const Films = ()=>{

//     const [items, setItems] = useState([
//         { name: 'TURQUOISE', code: '#1abc9c' },
//         { name: 'EMERALD', code: '#2ecc71' },
//         { name: 'PETER RIVER', code: '#3498db' },
//         { name: 'AMETHYST', code: '#9b59b6' },
//         { name: 'WET ASPHALT', code: '#34495e' },
//         { name: 'GREEN SEA', code: '#16a085' },
//         { name: 'NEPHRITIS', code: '#27ae60' },
//         { name: 'BELIZE HOLE', code: '#2980b9' },
//         { name: 'WISTERIA', code: '#8e44ad' },
//         { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
//         { name: 'SUN FLOWER', code: '#f1c40f' },
//         { name: 'CARROT', code: '#e67e22' },
//         { name: 'ALIZARIN', code: '#e74c3c' },
//         { name: 'CLOUDS', code: '#ecf0f1' },
//         { name: 'CONCRETE', code: '#95a5a6' },
//         { name: 'ORANGE', code: '#f39c12' },
//         { name: 'PUMPKIN', code: '#d35400' },
//         { name: 'POMEGRANATE', code: '#c0392b' },
//         { name: 'SILVER', code: '#bdc3c7' },
//         { name: 'ASBESTOS', code: '#7f8c8d' },
//       ]);

//       const [nowPlayingMovie, setNowPlayingMovie] = useState([]);

//       useEffect(()=>{
//         fetchnowPlayingMovie();
//         }, [])

//       const fetchnowPlayingMovie = async()=>{
//         try{
//             setIs_loading(true)
//             const {data} = await axios({
//                 method: 'get',
//                 url:'https://api.themoviedb.org/3/movie/now_playing?api_key=835f090de1e629571963fd0ec5d0a082',
//             });

//             if(data){
//                 console.log(data)
//                 setIs_loading(false)
//                 const movies = data.results;
//                 setNowPlayingMovie(movies)
//             }
//         }catch(err){
//             setIs_loading(false)
//             console.log(err.message)
//         }
// };

//     // const [popFilms, SetPopFilms] = useState([
//     // ]);

//     // useEffect(()=>{
//     //     fetchFilms();
//     // }, [])
//     // const fetchFilms = async()=>{
//     //     try{
//     //         setIs_loading(true)
//     //         const {data} = await axios({
//     //             method: 'get',
//     //             url:'https://api.themoviedb.org/3/tv/popular?api_key=835f090de1e629571963fd0ec5d0a082',
//     //         });

//     //         if(data){
//     //             setIs_loading(false)
//     //             const film = data.results;
//     //             SetPopFilms(film)
//     //         }
//     //     }catch(err){
//     //         setIs_loading(false)
//     //         console.log(err.message)
//     //     }
//     // };

//     return(

//         <ScrollView
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                     style={{bottom:10}}
//                 >

//                     {
//                         nowPlayingMovie.map((movie,index)=>{
//                             return(
//                               <NowPlayingMovies
//                                 key={movie.id}
//                                 title = {movie.title}
//                                 image = {movie.backdrop_path}
//                                 navigation={()=>{props.navigation.navigate("details",movie)}}
//                               />
//                             )
//                         })
//                     }

//                 </ScrollView>
//         //     <FlatGrid
//         //     itemDimension={130}
//         //     data={items}
//         //     style={styles.gridView}
//         //     // staticDimension={300}
//         //     // fixed
//         //     spacing={10}
//         //     renderItem={({ item }) => (
//         //     <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
//         //         <Text style={styles.itemName}>{item.name}</Text>
//         //         <Text style={styles.itemName}>{item.code}</Text>
//         //     </View>
//         //     )}
//         // />
//     )
// }

// export default Films;

// const styles = StyleSheet.create({
//     gridView: {
//       marginTop: 10,
//       flex: 1,
//     },
//     itemContainer: {
//       justifyContent: 'flex-end',
//       borderRadius: 5,
//       padding: 10,
//       height: 150,
//     },
//     itemName: {
//       fontSize: 16,
//       color: '#fff',
//       fontWeight: '600',
//     },
//     itemCode: {
//       fontWeight: '600',
//       fontSize: 12,
//       color: '#fff',
//     },
//   });
