import { View, Text, StyleSheet, Switch } from 'react-native'
import React from 'react'
import useRootContext from '../../hooks/useRootContext'

const ThemeScreen = () => {
    const {theme, toggleTheme} = useRootContext();
    const isDarkMode = theme === 'dark';

  return (
    <View style={[styles.container, {
        backgroundColor: isDarkMode ? "#000000" : "#ffffff"
    }]}>
      <Text style={{color: isDarkMode ? "#ffffff" : "#000000"}}>{"Toggle Scrren Demo"}</Text>
      <Switch 
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{false: '#767577', true: "81b0ff"}}
        thumbColor={isDarkMode? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor={"#3e3e3e"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ThemeScreen