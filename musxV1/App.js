// import React from 'react';
// import { NavigatorIOS, StyleSheet, AppRegistry, Text } from 'react-native';
// // import Login from './src/Components/Login.js';
// import { StackNavigator } from 'react-navigation';

// export default class App extends React.Component {

// 	static navigationOptions = {
// 	   title: 'Welcome to Musx',
// 	 };

//   render() {
//     return (
//       <App  />
//     );
//   }
// }

// const MusxApp = StackNavigator({
//   Home: { screen: App },
// });

// AppRegistry.registerComponent('MusxApp', () => MusxApp);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
// }});


import React from 'react';
import { NavigatorIOS, StyleSheet } from 'react-native';
import Login from './src/Components/Login.js';

export default class App extends React.Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Login,
          title: 'Login',
        }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
}});
