import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, Modal, Button } from 'react-native';

let oSource = './assets/o-symbol.jpg'
let xSource = './assets/x-symbol.jpg'

export default function App() {
  let [turn, setTurn] = useState(1)
  let [winner, setWinner] = useState(null)
  let [tokensPl1, setTokensPl1] = useState([])
  let [tokensPl2, setTokensPl2] = useState([])

  useEffect(() => {
    if (tokensPl1.length + tokensPl2.length === 9 && winner === null) {
      setWinner(3)
    }
    // ---victory condition for player1
    if (tokensPl1.includes(1) && tokensPl1.includes(2) && tokensPl1.includes(3)) {
      setWinner(1)
    }
    if (tokensPl1.includes(4) && tokensPl1.includes(5) && tokensPl1.includes(6)) {
      setWinner(1)
    }
    if (tokensPl1.includes(7) && tokensPl1.includes(8) && tokensPl1.includes(9)) {
      setWinner(1)
    }
    if (tokensPl1.includes(1) && tokensPl1.includes(4) && tokensPl1.includes(7)) {
      setWinner(1)
    }
    if (tokensPl1.includes(2) && tokensPl1.includes(5) && tokensPl1.includes(8)) {
      setWinner(1)
    }
    if (tokensPl1.includes(3) && tokensPl1.includes(6) && tokensPl1.includes(9)) {
      setWinner(1)
    }
    if (tokensPl1.includes(1) && tokensPl1.includes(5) && tokensPl1.includes(9)) {
      setWinner(1)
    }
    if (tokensPl1.includes(3) && tokensPl1.includes(5) && tokensPl1.includes(7)) {
      setWinner(1)
    }
    // ---victory condition for player2
    if (tokensPl2.includes(1) && tokensPl2.includes(2) && tokensPl2.includes(3)) {
      setWinner(2)
    }
    if (tokensPl2.includes(4) && tokensPl2.includes(5) && tokensPl2.includes(6)) {
      setWinner(2)
    }
    if (tokensPl2.includes(7) && tokensPl2.includes(8) && tokensPl2.includes(9)) {
      setWinner(2)
    }
    if (tokensPl2.includes(1) && tokensPl2.includes(4) && tokensPl2.includes(7)) {
      setWinner(2)
    }
    if (tokensPl2.includes(2) && tokensPl2.includes(5) && tokensPl2.includes(8)) {
      setWinner(2)
    }
    if (tokensPl2.includes(3) && tokensPl2.includes(6) && tokensPl2.includes(9)) {
      setWinner(2)
    }
    if (tokensPl2.includes(1) && tokensPl2.includes(5) && tokensPl2.includes(9)) {
      setWinner(2)
    }
    if (tokensPl2.includes(3) && tokensPl2.includes(5) && tokensPl2.includes(7)) {
      setWinner(2)
    }

  }, [tokensPl1, tokensPl2])

  let restart = () => {
    setTurn(1)
    setTokensPl1([])
    setTokensPl2([])
    setWinner(null)
  }

  let addToken = (position) => {
    if (turn === 1) {
      if (tokensPl2.includes(position)) { return }
      let tokensPl1Temp = [...tokensPl1]
      tokensPl1Temp.push(position)
      setTokensPl1(tokensPl1Temp)
      setTurn(2)
    }
    if (turn === 2) {
      if (tokensPl1.includes(position)) { return }
      let tokensPl2Temp = [...tokensPl2]
      tokensPl2Temp.push(position)
      setTokensPl2(tokensPl2Temp)
      setTurn(1)
    }

  }

  let renderToken = (position) => {
    if (tokensPl1.includes(position)) {
      return require(xSource)
    }
    if (tokensPl2.includes(position)) {
      return require(oSource)
    }
    return
  }

  return (
    <>
      {winner !== null && <Modal transparent={true} animationType="slide">
        <View style={styles.endContainer}>
          {winner === 1 && <Text style={styles.endTitle}>Player X wins !</Text>}
          {winner === 2 && <Text style={styles.endTitle}>Player O wins !</Text>}
          {winner === 3 && <Text style={styles.endTitle}>Drawn !</Text>}
          <Button onPress={() => { restart() }} title="Restart" />
        </View>
      </Modal>}
      <View style={styles.top}>
        <Text style={styles.title}>Tic Tac Toe</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.column} onPress={() => addToken(1)}><Image style={styles.tinyImage} source={renderToken(1)} /></TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => addToken(2)}><Image style={styles.tinyImage} source={renderToken(2)} /></TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => addToken(3)}><Image style={styles.tinyImage} source={renderToken(3)} /></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.column} onPress={() => addToken(4)}><Image style={styles.tinyImage} source={renderToken(4)} /></TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => addToken(5)}><Image style={styles.tinyImage} source={renderToken(5)} /></TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => addToken(6)}><Image style={styles.tinyImage} source={renderToken(6)} /></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.column} onPress={() => addToken(7)}><Image style={styles.tinyImage} source={renderToken(7)} /></TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => addToken(8)}><Image style={styles.tinyImage} source={renderToken(8)} /></TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => addToken(9)}><Image style={styles.tinyImage} source={renderToken(9)} /></TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  endTitle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },

  row: {
    flex: 1,
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "black",

  },
  top: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,

  },
  endContainer: {
    borderWidth: 4,
    borderColor: "#20232a",
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    borderWidth: 4,
    borderColor: "#20232a",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyImage: {
    height: 70,
    width: 70
  }
});
