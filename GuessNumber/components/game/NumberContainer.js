import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold'
  }
});