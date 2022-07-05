import {View, Image} from 'react-native';

const FilmComponent = (props)=>{
    const {img}= props;
    return(
        <View>
            <Image source={{uri:`https://image.tmdb.org/t/p/w500/${img}`}} style={{width:110, height:150, margin:4}}/>
        </View>
    )
}

export default FilmComponent;