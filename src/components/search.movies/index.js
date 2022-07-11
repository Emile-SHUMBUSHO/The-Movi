import { Image, View,  StyleSheet, Text } from 'react-native';
import AppStyles from '../../styles/styles';

const SearchContent = ()=>{
    return(
        <View style={styles.content}>
            <View style={{justifyContent:"center", alignItems:"center", margin:20, top:0}}>
                <Image 
                    source={require('../../../assets/search.png')}
                    style={{width:290,height:290}}
                />
            </View>
            <View style={{flexDirection:"column", justifyContent: "center", alignItems:"center", padding:10}}>
                <Text style={{fontSize:18, fontWeight:"bold", color:"#ffffff"}}>Search Any Movie</Text>
                <Text style={{textAlign:"center", width:200, color:AppStyles.colors.lightGreyColor}}>Explore our libraries and enjoy this movie with your familly</Text>
            </View>
        </View>    
    )
}

const styles = StyleSheet.create({
    
    content:{
        width:"100%",
        height:"100%",
    },

})


export default SearchContent;