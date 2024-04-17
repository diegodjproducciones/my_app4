
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;
const image = {uri: 'https://www.icegif.com/wp-content/uploads/2023/05/icegif-855.gif'};
const imagehyoga = {uri: 'https://img1.picmix.com/output/stamp/normal/1/1/0/8/1578011_a3676.gif'};


const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
   
  <Separator />
  
      <Text style={styles.title}>
        Bienvenido instructor Carlos Mora esto es parte de mi evidencia
      </Text>
     
    </View>
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Bienvenido</Text>
    </ImageBackground>
  </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        APRENDIZ DIEGO DAVID MURILLO BORDA
       </Text>
       <Text style={styles.title}>
       GA8 220501096 AA2 EV02
       </Text>
     
      <Button
        title="PRONTO MAS INFO"
        color="#FA4343"
        onPress={() => Alert.alert('ESTAMOS EN CONSTRUCCION')}
      />
      
        <View style={styles.container}>
    <ImageBackground source={imagehyoga} resizeMode="cover" style={styles.image2}>
      
    </ImageBackground>
  </View>
    </View>
    <Separator />
    <View>
      
    </View>
    
    <View>
      <Text style={styles.title}>
        Estamos trabajando para un mejor aplicativo
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="INFO"
          color="#FA8543"
          onPress={() => Alert.alert('+573124578908 ')}
        />
        <Button
          title="Registrate"
          color="#FA8543"
          onPress={() => Alert.alert('ESCRIBE TUS DATOS DE REGISTRO')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
     flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    },
    image2: {
      flex: 3,
      justifyContent: 'center',
      },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 9,
    borderBottomColor: 'color="#2FFAFA"',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
});

export default App;