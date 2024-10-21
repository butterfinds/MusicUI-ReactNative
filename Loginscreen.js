import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

export default function Loginscreen({navigation}) {

  const [fontsLoaded] = useFonts({
    'UberMove': require('./assets/UberMoveBold.otf') 
  });

return (
<LinearGradient
  colors={['rgba(2, 200, 10, 0.9)', '#102B2D', '#0E0E0E']} // Green with reduced opacity, then transition to other colors
  start={{ x: 0, y: 0 }} // Start the gradient from the top-left corner
  end={{ x: 0, y: 0.2 }}   // End the gradient at the bottom-right corner for an even blend
  locations={[0, 0, 5]} // Adjusts how quickly the colors blend into each other
  style={styles.container}
>

<Image
source={require('./assets/Topimage.png')}
style={{ width: 200, height: 200, marginBottom: 10 }}
/>

<Text style={styles.title}>Login To Your Account</Text>
<TextInput
style={styles.input}
placeholder=" Enter Email" placeholderTextColor="#888"
/>
<TextInput
style={styles.input}
placeholder=" Enter Password" placeholderTextColor="#888"
secureTextEntry={true}
/>
<TouchableOpacity>
<Text style={styles.linkText}>Forgot The Password?</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Dashboard")} >
<Text style={styles.loginButtonText}>Login</Text>
</TouchableOpacity>

<Text style={styles.Littletitle}>--- Or Login With ---</Text>

<View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, left: 23,}}>
<View style={{ borderRadius: 25, overflow: 'hidden', margin: 10 }}>
<TouchableOpacity onPress={() => navigation.navigate("Social-log")} >
<ImageBackground
source={require('./assets/gugil.png')}
style={{ width: 45, height: 45}}
imageStyle={{ resizeMode: 'contain' }}
>
</ImageBackground>
</TouchableOpacity>
</View>

<View style={{ borderRadius: 25, overflow: 'hidden', margin: 10 }}>
<TouchableOpacity  onPress={() => navigation.navigate("Social-log")}>
<ImageBackground
source={require('./assets/fisbuk.png')}
style={{ width: 45, height: 45 }}
imageStyle={{ resizeMode: 'contain' }}
>
</ImageBackground>
</TouchableOpacity>
</View>

<View style={{ borderRadius: 25, overflow: 'hidden', margin: 10 }}>
<TouchableOpacity  onPress={() => navigation.navigate("Social-log")}>
<ImageBackground
source={require('./assets/apul.png')}
style={{  left: -20, top: -20, width: 90, height: 90 }}
imageStyle={{ resizeMode: 'contain' }}
>
</ImageBackground>
</TouchableOpacity>
</View>
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

img: {
marginright: 10,
},

title: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 20,
marginBottom: 20,
color: '#fff',
fontFamily: 'UberMove',
},

input: {
width: 300,
height: 53,
backgroundColor: '#1E1E1E',
color: '#fff',
marginTop: 10,
marginBottom: 5,
padding: 10,
borderRadius: 90,
fontFamily: 'UberMove',
},

linkText: {
fontSize: 13,
color: '#3A9647',
textDecorationLine: 'underline',
marginBottom: 33,
marginTop: 33,
fontFamily: 'UberMove',
},

loginButton: {
width: 300,
height: 53,
backgroundColor: '#34C759',
justifyContent: 'center',
alignItems: 'center',
borderRadius: 100,
marginBottom: 10,

},

loginButtonText: {
fontSize: 18,
color: '#fff',
fontFamily: 'UberMove',
},

Littletitle: {
fontSize: 13,
color: '#fff',
marginTop: 30,
marginBottom: -5,
fontFamily: 'UberMove',
}
});