import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import PushNotification from 'react-native-push-notification'

export default class App extends Component {
  constructor() {
    super()
    this.state =
    {
      msg1: "",
      msg2: ""
    }
  }
  send = () => {
    if (this.state.msg1 && this.state.msg2) {
      var d = new Date();
      console.log(d)
      PushNotification.localNotification(
        {
          message: this.state.msg1+' '+this.state.msg2,
          color: 'green'
        }
      )
      PushNotification.localNotificationSchedule(
        {
          message: this.state.msg2,
          date: new Date(Date.now() + 2000)
        }
      )
    }
    else
      alert("Enter Message")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.headerText}>Push Notifications in React Native</Text>
        </View>
        <View style={styles.screen}>
          <TextInput placeholder="Enter message 1" defaultValue={this.state.msg1}
            onChangeText={(msg1) => this.setState({ msg1 })} style={styles.input}
            placeholderTextColor="#3498db"
          />
          <TextInput placeholder="Enter message 2" defaultValue={this.state.msg2}
            onChangeText={(msg2) => this.setState({ msg2 })} style={styles.input}
            placeholderTextColor="#3498db"
          />
          <TouchableOpacity onPress={this.send.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CLICK</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
  },
  input:
  {
    height: 50,
    width: '80%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    fontSize: 20,
    color: 'black',
    margin: 3
  },
  buttonContainer:
  {
    height: 40,
    width: '30%',
    margin: 3,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db'
  },
  buttonText:
  {
    fontSize: 25,
    color: 'snow',
  },
  screen: {
    marginTop:'60%',
    alignItems: 'center',
  },
  appHeader: {
    height: '8.5%',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  headerText: {
    marginTop: '4.25%',
    fontWeight: 'bold',
    fontSize: 21,
    color: 'snow'
  },
}
)