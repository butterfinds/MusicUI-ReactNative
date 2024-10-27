import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

export default function Dashboard({ navigation }) {
  
  const [fontsLoaded] = useFonts({
    'UberMove': require('./assets/UberMoveBold.otf') 
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
    colors={['rgba(2, 200, 10, 0.9)', '#102B2D', '#0E0E0E']} // Green with reduced opacity, then transition to other colors
    start={{ x: 0, y: 0 }} // Start the gradient from the top-left corner
    end={{ x: 0, y: 0.2 }}   // End the gradient at the bottom-right corner for an even blend
    locations={[0, 0, 5]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.nav}>
          <Image source={require('./assets/kuyamik.jpg')} style={styles.navimg} />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeback}>Welcome back!</Text>
            <Text style={styles.username}>KuyaMik</Text>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={35} color="#0bb949" />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={styles.cntnt}>
            <Text style={styles.musicfont}>Music</Text>
            <ImageBackground source={require('./assets/guitar.jpg')} style={styles.textcnt} borderRadius={16} imageStyle={{ opacity: 0.4 }}>
              <Text style={styles.contentxt} width={350}>
                Discover a diverse world of music genres. From pop to rock, jazz to hip-hop, find the perfect sound for every mood and moment!
              </Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.buttonText}>Go to contents →</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={styles.cntnt2}>
            <Text style={styles.musicfont}>Genre</Text>
            <View style={styles.cntgenre}>
              <TouchableOpacity onPress={() => navigation.navigate('Classical')}>
                <View style={styles.genreItem}>
                  <View style={styles.cntalgn}>
                    <Text style={styles.titlecnt}>Classical</Text>
                    <Text style={styles.desccnt}>A centuries-old genre known for its complexity.</Text>
                  </View>
                  <Image source={require('./assets/classical.jpg')} style={styles.cntn2img} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Rock')}>
                <View style={styles.genreItem}>
                  <View style={styles.cntalgn}>
                    <Text style={styles.titlecnt}>Rock</Text>
                    <Text style={styles.desccnt}>Known for strong beats and electric guitars.</Text>
                  </View>
                  <Image source={require('./assets/rock.jpg')} style={styles.cntn2img} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Hiphop')}>
                <View style={styles.genreItem}>
                  <View style={styles.cntalgn}>
                    <Text style={styles.titlecnt}>Hip-Hop</Text>
                    <Text style={styles.desccnt}>Combining rhythmic rapping with DJing and beat-making.</Text>
                  </View>
                  <Image source={require('./assets/hiphop.jpg')} style={styles.cntn2img} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Reggae')}>
                <View style={styles.genreItem}>
                  <View style={styles.cntalgn}>
                    <Text style={styles.titlecnt}>Reggae</Text>
                    <Text style={styles.desccnt}>Features offbeat rhythms and lyrics that promote peace and unity.</Text>
                  </View>
                  <Image source={require('./assets/reggae.jpg')} style={styles.cntn2img} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Edm')}>
                <View style={styles.genreItem}>
                  <View style={styles.cntalgn}>
                    <Text style={styles.titlecnt}>EDM</Text>
                    <Text style={styles.desccnt}>Designed for dance clubs and festivals.</Text>
                  </View>
                  <Image source={require('./assets/EDM.jpg')} style={styles.cntn2img} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity>
            <Foundation name="home" size={23} color="#1DB954" style={{ left: 4.5, top: 13 }} />
            <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <FontAwesome name="users" size={18} color="#1DB954" style={{ left: 10, top: 13 }} />
            <Text style={styles.footerText}>About</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  nav: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingBottom: 10,
  },
  navimg: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
  },
  textContainer: {
    marginLeft: -70,
  },
  welcomeback: {
    color: '#FFFFFF',
    fontFamily: 'UberMove',
    fontSize: 18,
    right: width * 0.01,
  },
  username: {
    color: '#FFFFFF',
    fontFamily: 'UberMove',
    fontSize: width * 0.04,
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
  },
  contentxt: {
    color: '#FFFFFF',
    fontFamily: 'UberMove',
    fontSize: width * 0.03,
    marginLeft: width * 0.02,
    textAlign: 'left',
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    top: height * 0.03,
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
  cntn2img: {
    top: height * -0.04,
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 8,
    marginTop: -22,
  },
  titlecnt: {
    color: '#FFFFFF',
    fontFamily: 'UberMove',
    fontSize: width * 0.04,
    left: width * -0.03,
  },
  desccnt: {
    color: '#D3D3D3', // Lighter color for readability
    fontFamily: 'UberMove',
    fontSize: width * 0.035,
    left: width * -0.03,
  },
  cntalgn: {
    marginLeft: 110,
    width: '70%',
  },
  footer: {
    height: height * 0.08,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  footerText: {
    color: 'white',
    fontFamily: 'UberMove',
    fontSize: width * 0.04,
    textAlign: 'center',
    left: width * -0.02,
    top: 14,
   
  },

});
