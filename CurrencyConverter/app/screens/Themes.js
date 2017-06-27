import React, { Component, PropTypes } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
	$blue: '$primaryBlue',
	$green: '$primaryGreen',
	$orange: '$primaryOrange',
	$purple: '$primaryPurple',
});

class Themes extends Component {
  static PropTypes = {
    navigation: PropTypes.object,
  };
  
  handleThemePress = (color) => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
      	<StatusBar translucent={false} barStyle="default" />
      		<ListItem 
      			onPress={() => this.handleThemePress(styles.$blue)} 
      			text="Blue" 
      			selected
      			checkmark={false}
      			iconBackground={styles.$blue}
  			/>
       		<Separator />
    		<ListItem 
      			onPress={() => this.handleThemePress(styles.$orange)} 
    			text="Orange" 
    			selected
    			checkmark={false}
    			iconBackground={styles.$orange}
			/>
     		<Separator />
    		<ListItem 
      			onPress={() => this.handleThemePress(styles.$green)} 
    			text="Green" 
    			selected
    			checkmark={false}
    			iconBackground={styles.$green}
			/>
     		<Separator />
    		<ListItem 
      			onPress={() => this.handleThemePress(styles.$purple)} 
    			text="Purple" 
    			selected
    			checkmark={false}
    			iconBackground={styles.$purple}
			/>
     		<Separator />
      </ScrollView>
    );
  }
}

export default Themes;