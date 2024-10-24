import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

export default function Dashboard({navigation}) {
  
  const [fontsLoaded] = useFonts({
    'UberMove': require('./assets/UberMoveBold.otf') 
  });

  if (!fontsLoaded) {
    return null; // If fonts are not loaded, return null or a loading indicator.
  }

  return (
    <LinearGradient
    colors={['rgba(2, 200, 10, 0.9)', '#102B2D', '#0E0E0E']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 0.2 }}
    locations={[0, 0, 1]}
    style={styles.container}
  >


    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1}}>
      <View style={styles.nav}>
        <Image source={require('./assets/kuyamik.jpg')} style={styles.navimg} />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeback}>Welcome back!</Text>
          <Text style={styles.username}>KuyaMik</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <View style={styles.linesContainer}>
            <View style={styles.line1} />
            <View style={styles.line2} />
            <View style={styles.line3} />
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.cntnt2}>
      <Text style={styles.musicfont}>Genre</Text>

        <View style={styles.cntgenre}> 

          <View title = "classical" style={styles.genreItem}>
          <View title = "text div" style={styles.cntalgn}>
          <Text style={styles.titlecnt}>Classical</Text>
          </View>
          <TouchableOpacity> 
            <Image source={require('./assets/classical.jpg')} style={styles.cntn2img}/>
          </TouchableOpacity> 
          </View>

          <View title = "Grieg: Peer Gynt Suite No. 1, Op. 46: I. Morning Mood" style={styles.genredes}>
          <View style={styles.genre}>
          <Text style={styles.description}>Classical music is a genre of Western art music that spans several centuries, characterized by structured forms, intricate compositions, and a rich harmonic language. Originating in the late Middle Ages, it includes various periods such as the Baroque, Classical, Romantic, and Modern eras. Typically performed by orchestras and ensembles, classical music features a wide range of instruments and emphasizes melody, harmony, and rhythm. Notable composers like Johann Sebastian Bach, Ludwig van Beethoven, and Wolfgang Amadeus Mozart have shaped this genre, which conveys a broad spectrum of emotions and continues to influence many contemporary styles.Classical music not only serves as a foundation for many modern musical genres but also provides a deep cultural heritage that continues to inspire musicians and listeners around the world.</Text>
          </View>
      
         
          </View>

          
        
        </View>
      </View>

      <View title = "footer" style={styles.footer}>

      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
         <Foundation name="home" size={30} color="#1DB954"/> 
         <View>
         <Text style={styles.footerText}>Home</Text>
         </View>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
      <FontAwesome name="users" size={24} color="#1DB954" />
      <View>
      <Text style={styles.footerText}>About</Text>
         </View>
      </TouchableOpacity>

      </View>

      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  // (The same styles as you have)
});


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems:'center',
    paddingTop: 25,
  },
  nav: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%', // Adjusted for consistent padding
    paddingBottom: 10,
  },
  navimg: {
    width: width * 0.15, // Adjusted size based on screen width
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
  },
  textContainer: {

    marginLeft: -70,
  },
  welcomeback: {
    color: '#ffffff',
    fontFamily: 'UberMove',
    fontSize: width * 0.06, 
    right: width * 0.01,// Scaled font size
  },
  username: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.04,
  },
  button: {
    backgroundColor: '#000000',
    padding: width * 0.02,
    borderRadius: 8,
  },
  linesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  line1: {

    width: width * 0.1,
    height: 3,
    backgroundColor: '#1DB954',
    marginVertical: 1,
  },
  line2: {
    left: width * 0.03,
    width: width * 0.07,
    height: 3,
    backgroundColor: '#1DB954',
    marginVertical: 3,
  },
  line3: {
    left: width * 0.05,
    width: width * 0.05,
    height: 3,
    backgroundColor: '#1DB954',
    marginVertical: 1,
  },
  cntnt: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: height * 0.04,
  },
  musicfont: {
    color: '#1DB954',
    fontFamily: 'UberMove',
    fontSize: width * 0.09,
    marginBottom: 7,
  },
  textcnt: {
    height: height * 0.2,
    width: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 0,
    
  },
  contentxt: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.03,
    marginLeft: width * 0.02,
    textAlign: 'left',
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    top: height * 0.02,
    left: width * 0.2,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: width * 0.03,
    color: '#000000',
    fontFamily: 'UberMove',
  },
  cntnt2: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: height * 0.02,
  },
  cntgenre: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: height * 0.04,
  },

cntn2img:  {
top: height * -0.04,
width: width * 0.2,
height: width * 0.2,
borderRadius: 8,  
marginTop: -22,
left: width * 0.03,

},
titlecnt: {
color: 'white',
fontFamily: 'UberMove',
fontSize: width * 0.07,
left: width * -0.01,
},
  desccnt: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.035,
    left: width * -0.03,
  },
  cntalgn: {
    marginLeft: 110,
    width: '70%',
  },
  footer: {
    bottom: height * -0.1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '24%',
  },
  footerText: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.04,
    textAlign: 'center',
    left: width * -0.02,
  
  },
  description: {
    lineHeight: 36,
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.045,
    right: width * 0.2,
    marginRight: width * -0.1,
    paddingleft: width * 0.60,
    textAlign: 'justify',
  },
  genre: {
    marginLeft: 100,
    width: '76%',
  },
});