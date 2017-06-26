import React from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  NavigatorIOS
} from 'react-native';
import LoginView from './LoginView';
 
 
class ReactProject extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigationContainer}
                initialRoute={{
                title: "Navigator Example",
                component: LoginView,
            }} />
        );
    }
}

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    },
});
 
AppRegistry.registerComponent("ReactProject", () => ReactProject);