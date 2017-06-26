/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,   AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS } from 'react-native';
import Featured from './Featured';
import Search from './Search';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TabBarIOS
// } from 'react-native';

export default class BookSearch extends Component {

  constructor(props) {
       super(props);
       this.state = {
           selectedTab: 'featured'
       };
   }

   render() {
       return (
           <TabBarIOS selectedTab={this.state.selectedTab}>
               <TabBarIOS.Item
                   selected={this.state.selectedTab === 'featured'}
                   // icon={{uri: 'featured'}}
                   onPress={() => {
                       this.setState({
                           selectedTab: 'featured'
                       });
                   }}>
                   <Featured/>
               </TabBarIOS.Item>
               <TabBarIOS.Item
                   selected={this.state.selectedTab === 'search'}
                   // icon={{uri: 'search'}}
                   onPress={() => {
                       this.setState({
                           selectedTab: 'search'
                       });
                   }}>
                   <Search/>
               </TabBarIOS.Item>
           </TabBarIOS>
       );
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BookSearch', () => BookSearch);
