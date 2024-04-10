import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nisl eu mauris fringilla pretium. Sed euismod tortor quis nisi dapibus, eget tincidunt eros vehicula. Phasellus semper purus in mi ultrices luctus. Nam fermentum enim ut dictum consectetur. Nulla facilisi. Donec tristique tortor in tellus efficitur interdum. Nullam vitae libero condimentum, euismod odio a, fermentum quam. In et libero diam. Vestibulum mattis mi a justo rutrum viverra. Nullam id tortor et metus luctus malesuada. Nulla facilisi. Nam aliquet tellus nisl, vel tempor metus ultricies eu. Morbi vitae feugiat elit, at placerat ipsum.
        </Text>
        <Text style={styles.text}>
          Fusce fermentum velit sit amet metus consequat, et efficitur sapien placerat. Mauris dictum, nisi ac malesuada fermentum, est justo fermentum ligula, eu vehicula turpis augue at lectus. Phasellus id libero vestibulum, rutrum elit sit amet, congue velit. Phasellus vulputate vel mi id feugiat. In hac habitasse platea dictumst. Nam pulvinar arcu nec tincidunt aliquam. Suspendisse sed libero at purus maximus commodo. Vestibulum sit amet sem ultricies, feugiat leo nec, pharetra nulla. Nullam accumsan lacinia metus, eget tempor libero pellentesque vitae. Mauris sed faucibus lectus. Nam nec sodales dolor. Suspendisse in tristique odio, id volutpat nisl. Maecenas vel dui a ligula commodo varius. Ut rutrum risus in velit interdum, vel tincidunt odio mattis.
        </Text>
        <Text style={styles.text}>
          Integer at feugiat nunc. Nullam elementum lorem a leo lobortis, eget euismod elit laoreet. Mauris dictum ultricies enim sit amet accumsan. Phasellus nec ex sed est vestibulum efficitur. Nulla commodo leo eget eros finibus, eget congue mi consequat. Ut id malesuada urna, et aliquet lectus. In hac habitasse platea dictumst. Nulla facilisi. Nam nec condimentum nulla. Duis dictum consectetur mauris non condimentum. Morbi sagittis commodo eros, nec dictum felis mollis vel. Nulla facilisi.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default App;
