import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
const CreateScreen = ({route}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(' ');

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setContent(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
});
export default CreateScreen;
