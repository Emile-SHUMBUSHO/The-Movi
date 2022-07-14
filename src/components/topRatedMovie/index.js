import { View,TouchableOpacity, StyleSheet, ImageBackground, Text} from "react-native";
import AppStyles from "../../styles/styles";

const TopRatedMovies = (props)=>{
    const {image, vote} = props
    const key = image;
    return(
        <TouchableOpacity onPress={ props.navigation}>
            <View style={styles.imgContainer}>
                <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500/${key}`}} borderRadius={10} resizeMode="cover" style={styles.imgbckg}>
                    <View style={{backgroundColor:AppStyles.colors.btnColor, height:20,width:30, alignItems:"center", justifyContent:"center", borderRadius:5}}>
                        <Text>{vote}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
})

export default TopRatedMovies;