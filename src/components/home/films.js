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