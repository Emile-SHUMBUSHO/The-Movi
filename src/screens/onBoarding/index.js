import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';
import AppStyles from '../../styles/styles';


const OnboardingScreen = (props) =>{
    const [showSlide, setShowSlide] = useState(false);
    const onDone = () =>{
        props.navigation.navigate("welcome")
     };
    const RenderItem = ({item})=>{
        return(
            <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.introTitle}>{item.introTitle}</Text>
                    <View style={{flexDirection:"column",alignItems:"center",justifyContent:"flex-end", height:200}}>
                        <TouchableOpacity style={styles.getStartedBtn} onPress={() => onDone()}>
                            <Text style={styles.getStartedTitle}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    };

    return(
        <>
            {
                showSlide ? (
                            <SafeAreaView>
                                <View>
                                    <Text>
                                        No App into slide
                                    </Text>
                                </View>
                            <ImageBackground source={require('../../../assets/joker.webp') } resizeMode="cover" style={styles.image}>
                                <View style={styles.content}>
                                    <Text style={styles.title}>Enjoy your favorite movie everywhere</Text>
                                    <Text style={styles.introTitle}>Browse through our collections and discover hundreds of movies and series that you'll love</Text>
                                    <View style={{flexDirection:"column",alignItems:"center",justifyContent:"flex-end", height:200}}>
                                        <TouchableOpacity style={styles.getStartedBtn}>
                                            <Text style={styles.getStartedTitle}>Get Started</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ImageBackground>
                            </SafeAreaView>
                            ):(
                            <AppIntroSlider
                                data={slides}
                                renderItem={RenderItem}
                                showSkipButton={false}
                                nextLabel={""}
                                onDone={onDone}
                                dotStyle={{top:-140,left:-122, backgroundColor:AppStyles.colors.btnColor, borderRadius:0, width:20, height:5}}
                                activeDotStyle={{backgroundColor:"yellow", borderRadius:0, width:30, top:-140,left:-122, height:5}}
                            />
                            )
                }
        </>
    );
};

const styles  = StyleSheet.create({
      image: {
        height:"100%",
      },
      content:{
        backgroundColor: "#000000c0",
        height:"100%",
        justifyContent:"flex-end",
      },
      title: {
        color: "white",
        fontSize: 33,
        fontWeight: "bold",
        padding:10,

      },
      introTitle:{
        color:AppStyles.colors.lightGreyColor,
        padding:10,
        fontSize:18,
      },
      getStartedBtn:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:AppStyles.colors.btnColor,
        height:40,
        width:"90%",
        borderRadius:5,
        margin:10,
      },
      getStartedTitle:{

      }
})


const slides = [
    {
        key:1,
        title:'Enjoy your favorite movie everywhere',
        introTitle:`Browse through our collections and discover hundreds of movies and series that you'll love`,
        image: require('../../../assets/joker.webp'),
    },
    {
        key:2,
        title:'Divercent. Published: Mar 23, 2016. By. abdelrhman123.',
        introTitle:`Browse through our collections and discover hundreds of movies and series that you'll love`,
        image: require('../../../assets/divecent.jpg'),
    },
    {
        key:3,
        title:'Marvels The Avengers or simply The Avengers',
        introTitle:`Browse through our collections and discover hundreds of movies and series that you'll love`,
        image: require('../../../assets/avengers.jpg'),
    }
]

export default OnboardingScreen;

