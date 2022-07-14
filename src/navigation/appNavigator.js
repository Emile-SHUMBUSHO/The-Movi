import {createStackNavigator} from '@react-navigation/stack'
import MainNavigator from './mainNavigator';
import OnboardingScreen from '../screens/onBoarding';
import GetStartScreen from '../screens/onBoarding/getStart';
import SignInScreen from '../screens/auth/signIn';
import SignUpScreen from '../screens/auth/signUp';
import DetailsScreen from '../screens/details';
import { EditProfile } from '../screens/edit.profile';


const Stack = createStackNavigator();

function AppNavigator (){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="main" component={MainNavigator}/>
            <Stack.Screen name='Onboarding' component={OnboardingScreen}/>
            <Stack.Screen name="welcome" component={GetStartScreen}/>
            <Stack.Screen name="signIn" component={SignInScreen}/>
            <Stack.Screen name="signUp" component={SignUpScreen}/>
            
            <Stack.Screen name='details' component={DetailsScreen}/>
            <Stack.Screen name='profile' component={EditProfile}/>
        </Stack.Navigator>
    )
}

export default AppNavigator;