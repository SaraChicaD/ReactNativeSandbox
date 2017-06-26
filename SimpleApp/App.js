import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';


//CLASSES
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Musx',
  };

  render() {
  	const { navigate } = this.props.navigation;

    return (
    	<View>
    		<Text>Hello, Musx!</Text>
    		<Button 
    			title="Chat with musx"
    			onPress={() => navigate('Chat', { user: 'Sara Inés'})}
    		/>
		</View>
	);
  }
}

class ChatScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
	  const {state, setParams} = navigation;
	  const isInfo = state.params.mode === 'info';
	  const {user} = state.params;
	  return {
	    title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
	    headerRight: (
	      <Button
	        title={isInfo ? 'Done' : `${user}'s info`}
	        onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
	      />
	    ),
	  };
	};

  render() {
  	const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    return (
    	<View>
    		<Text>List of recent chats</Text>
    		<Button
    		  onPress={() => this.props.navigation.navigate('Chat', { user: 'Sara Inés' })}
    		  title="Chat with Sara Inés"
    		/>
		</View>
	);
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
    	<View>
    		<Text>List of all contacts</Text>
    		<Button
    		  onPress={() => this.props.navigation.navigate('Chat', { user: 'Sara Inés' })}
    		  title="Chat with Sara Inés"
    		/>
		</View>
	);
  }
}



//NAVIGATORS
const MainScreenNavigator = DrawerNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});


//registry
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);