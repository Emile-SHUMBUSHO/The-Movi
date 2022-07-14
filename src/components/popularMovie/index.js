import { View,TouchableOpacity, StyleSheet, ImageBackground, Text} from "react-native";
import AppStyles from "../../styles/styles";

const PopularMovies = (props)=>{
    const {image, vote} = props
    const key = image;
    return(
        <TouchableOpacity onPress={ props.navigation}>
            
            <View style={styles.imgContainerInside}>
                
                <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500/${key}`}} borderRadius={10} resizeMode="cover" style={[styles.imgbckg]}>
                    <View style={{backgroundColor:AppStyles.colors.btnColor, height:20,width:30, alignItems:"center", justifyContent:"center", borderRadius:5}}>
                        <Text>{vote}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imgContainerInside:{
        width:320,
        height:150,
        margin:5,
    },
    imgbckg:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end",
        padding:5
    },
})

export default PopularMovies;