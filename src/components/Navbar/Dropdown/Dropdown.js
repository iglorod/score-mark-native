import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Dropdown = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  if (!props.open) return null;

  return (
    <View style={styles.dropdownMenu}>
      <TouchableOpacity onPress={() => { navigation.navigate(props.openPage, props.selectedItemData); props.closeDropdown() }}>
        <View style={styles.withIcon}>
          <Icon name={'page-next'} color={colors.secondaryText} size={20} />
          <Text style={[styles.menuText, { color: colors.text }]}> Page</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate(props.openFixtures, props.selectedItemData); props.closeDropdown() }}>
        <View style={styles.withIcon}>
          <Icon name={'view-list'} color={colors.secondaryText} size={20} />
          <Text style={[styles.menuText, { color: colors.text }]}> Matches</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Dropdown;

const styles = StyleSheet.create({
  dropdownMenu: {
    position: 'absolute',
    fontFamily: 'OpenSans-Regular',
    top: 55,
    left: 15,
    zIndex: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
  }
})
