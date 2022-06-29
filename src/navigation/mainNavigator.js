import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SearchingScren from '../screens/search';
import DownloadedScreen from '../screens/downloads';
import ProfileScreen from '../screens/more';
import { Feather, AntDesign, MaterialIcons} from '@expo/vector-icons';
import AppStyles from '../styles/styles';

const Tab = createBottomTabNavigator();

function MainNavigator(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarStyle: { backgroundColor:AppStyles.colors.topBottomColor,  borderTopWidth:0,},
            tabBarActiveTintColor:AppStyles.colors.btnColor,
            tabBarShowLabel:false
            }}>
            <Tab.Screen 
                name='Home'
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({size, color})=>(
                    <Feather name="home" size={24} color={color} />
                    ),

                    
                }}
                component={HomeScreen}
            />

            <Tab.Screen
                name='Search'
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color, size})=>(
                    <AntDesign name="search1" size={24} color={color} />
                    ), 
                }}
                component={SearchingScren}
            />

            <Tab.Screen
                name='Downloaded'
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color, size})=>(
                        <MaterialIcons name="folder-open" size={24} color={color} />
                    ),
                }}
                component={DownloadedScreen}
            />

            <Tab.Screen
                name='More'
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({color, size})=>(
                    <MaterialIcons name="dashboard" size={24} color={color} />
                    ),
                }}
                component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}

export default MainNavigator