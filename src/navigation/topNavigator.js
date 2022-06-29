import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FeaturedMovie from '../components/home/featured';
import Series from '../components/home/series';
import Films from '../components/home/films';
import Origin from '../components/home/origin';
import AppStyles from '../styles/styles';

const Tab = createMaterialTopTabNavigator();


function TopNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Featured"
      screenOptions={{
        
        tabBarActiveTintColor: AppStyles.colors.btnColor,
        tabBarLabelStyle: { fontSize: 12, color:"#fff" },
        tabBarStyle: { backgroundColor:AppStyles.colors.topBottomColor },
        tabBarIndicatorStyle:{backgroundColor:AppStyles.colors.btnColor, borderWidth:0, width:30,height:4, left:30}
      }}
    >
      <Tab.Screen
        name="Featured"
        component={FeaturedMovie}
        options={{ tabBarLabel: 'Featured' }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{ tabBarLabel: 'Series' }}
      />
      <Tab.Screen
        name="Films"
        component={Films}
        options={{ tabBarLabel: 'Films' }}
      />
      <Tab.Screen
        name="Origin"
        component={Origin}
        options={{ tabBarLabel: "Origin"}}
      />
    </Tab.Navigator>
  );
}

export default TopNavigator