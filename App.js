import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from './components/ColorCounter'

const COLOR_INCREMENT = 15;

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const currentRGB = `rgb(${red}, ${blue}, ${green})`;

  const changeColor = (color, isIncreasing, changeFunction)=> {
    const newValue = isIncreasing === true ?
      color + COLOR_INCREMENT :
      color - COLOR_INCREMENT
    if (newValue >= 0 && newValue < 256) {
      changeFunction( newValue );
    }
  }

  return (
    <View>
      <Text style={styles.header}>Color Customizer</Text>
      <Text style={styles.liveColorHeader}>Custom color: { currentRGB }</Text>
      <ColorCounter
        color="Red"
        onIncrease={ ()=> changeColor( red, true, setRed ) }
        onDecrease={ ()=> changeColor( red, false, setRed ) }
      />
      <ColorCounter
        color="Blue"
        onIncrease={ ()=> changeColor( blue, true, setBlue ) }
        onDecrease={ ()=> changeColor( blue, false, setBlue ) }
      />
      <ColorCounter
        color="Green"
        onIncrease={ ()=> changeColor( green, true, setGreen ) }
        onDecrease={ ()=> changeColor( green, false, setGreen ) }
      />
      <View
        style={{height: 150, width: 150, backgroundColor: currentRGB}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },
  liveColorHeader: {
    fontSize: 20,
    paddingVertical: 5,
  }
})

export default App;
