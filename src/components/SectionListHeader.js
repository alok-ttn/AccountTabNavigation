import React from 'react';
import {Text, StyleSheet} from 'react-native';
class SectionHeaderCustom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title} = this.props;
    return <Text style={styles.header}>{title}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
});

export default SectionHeaderCustom;
