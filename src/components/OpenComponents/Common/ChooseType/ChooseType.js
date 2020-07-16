import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Card from '../../../UI/Card/Card';
import StepProgress from '../../../UI/StepProgress/StepProgress';
import LabelAvatar from '../../../UI/LabelAvatar/LabelAvatar';

const ChooseType = (props) => {
  const { selectedId, setSelectedId } = props;
  const navigation = useNavigation();

  const onNextHandler = () => {
    if (selectedId === null) return null;
    else if (selectedId === 2) return navigation.navigate('TodayFixtures');
    return props.onNext();
  }

  return (
    <Card style={{ flexDirection: 'column' }}>
      <StepProgress
        progress={props.step}
        onBack={() => { setSelectedId(null); props.onBack(); }}
        onNext={onNextHandler}
        nextButtonAvailible={selectedId !== null} />

      <View style={styles.avatarContainer}>
        <LabelAvatar
          text={'Club'}
          selected={selectedId === 0}
          picture={require('../../../../assets/images/abstract1.png')}
          onPress={setSelectedId.bind(this, selectedId === 0 ? null : 0)} />
        <LabelAvatar
          text={'Leagues'}
          selected={selectedId === 1}
          picture={require('../../../../assets/images/abstract2.png')}
          onPress={setSelectedId.bind(this, selectedId === 1 ? null : 1)} />
        <LabelAvatar
          text={'Today'}
          selected={selectedId === 2}
          picture={require('../../../../assets/images/abstract3.png')}
          onPress={setSelectedId.bind(this, selectedId === 2 ? null : 2)} />
      </View>
    </Card>
  )
}

export default ChooseType;

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  }
})
