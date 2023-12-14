import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DiffuserImage from './components/DiffuserImage';
import { LinearGradient } from 'expo-linear-gradient';
import CalendarPicker from 'react-native-calendar-picker';



//diffuser image
const diffuserPlaceholder = require("./assets/images/diffuser.png")

export default function App() {
  const onDateChange = (date) => {
    // Handle the date change logic here
    console.log('Selected date:', date);
  };

  return (
    <LinearGradient
      colors={['white', 'blueviolet']} // Define your gradient colors here
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <DiffuserImage placeholderImageSource={diffuserPlaceholder} />

        <View style={styles.calendarContainer}>
          <View style={{ width: '50%' }}> 
            <CalendarPicker onDateChange={onDateChange} />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Ensure the gradient takes up the entire screen
  },
  calendarContainer: {
    backgroundColor: 'white',
    width: '50%',
  },
});
