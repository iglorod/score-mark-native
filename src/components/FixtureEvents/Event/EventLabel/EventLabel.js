import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const EventLabel = (props) => {
  let margins = [0];

  switch (props.type) {
    case 'Card': {
      if (!props.detail.includes('Yellow')) {
        margins = [-24];
      }
      break;
    }
    case 'subst': {
      margins = [-75, -105];
      break;
    }
    case 'Goal': {
      margins = [-52];
      break;
    }
  }

  const Label = ({ text, marginTop }) => (
    <View style={styles.label}>
      <ImageBackground
        source={require('../../../../assets/images/icons.png')}
        imageStyle={{
          resizeMode: 'cover',
          top: marginTop,
          height: 127,
        }}
        style={{
          width: 25,
          height: 25,
          overflow: 'hidden',
        }}
      >
      </ImageBackground>
      <Text style={styles.actionType}>{text}</Text>
    </View>
  )

  return (
    <View style={styles.labels}>
      <FlatList
        data={margins}
        renderItem={({ item }) => (
          <Label
            text={props.detail || props.type}
            marginTop={item} />
        )}
        keyExtractor={(item, key) => key} />
    </View>
  )
}

export default EventLabel;

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  labels: {
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
  },
  actionType: {
    color: '#fff',
    paddingLeft: 5,
  }
})
