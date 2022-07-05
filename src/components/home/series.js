import {SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SeriesComponent from '../series';
import {useState, useEffect} from 'react';

import axios from 'axios';

const Series = ()=>{
    const [popFilms, SetPopFilms] = useState([]);
    useEffect(()=>{
        fetchFilms();
    }, [])
    const fetchFilms = async()=>{
        try{
            const {data} = await axios({
                method: 'get',
                url:'https://api.themoviedb.org/3/tv/popular?api_key=835f090de1e629571963fd0ec5d0a082',
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
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {
                    popFilms.map((film, index)=>{
                        return(
                            <SeriesComponent
                                key={film.id}
                                img={film.backdrop_path}
                            />
                        )
                        
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Series;