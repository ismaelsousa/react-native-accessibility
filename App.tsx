import React from 'react';
import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Accessibility: React.FC = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.avatarContainer}>
        <Image
          width={200}
          height={200}
          style={style.avatar}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/28990749?s=400&v=4',
          }}
        />
      </View>
      <View style={style.separator} />
      <View>
        <Text style={style.text}>Nome: Ismael Sousa</Text>
        <Text
          onPress={() =>
            Linking.openURL('https://www.instagram.com/ismaelmoreiraa/')
          }
          style={style.text}>
          Insta: @ismaelmoreiraa
        </Text>
      </View>
      <View style={style.separator} />
      <Pressable
        style={style.button}
        onPress={() => Linking.openURL('https://github.com/ismaelsousa')}>
        <Text style={style.text}>Ir ao Github</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Accessibility;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  avatarContainer: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
  },
  separator: {
    height: 100,
  },
  button: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 20,
  },
});
