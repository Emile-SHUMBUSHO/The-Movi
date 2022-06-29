import {NavigationContainer} from '@react-navigation/native';
import Stack from './appNavigator';
const  RootNavigation = ()=> {
    return(
        <NavigationContainer>
            <Stack/>
        </NavigationContainer>
    );
}

export default RootNavigation;