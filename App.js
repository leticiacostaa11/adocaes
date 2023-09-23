import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Retângulo com a cor #FF8743 */}
      <View style={styles.rectangle}>
        <View style={styles.rectangleContent}>
          <Text style={styles.rectangleText}>Adocães</Text>
        </View>
      </View>

      {/* Botões fixos na parte inferior */}
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[styles.button, styles.buttonEntrar]}
          underlayColor="#038FDE" // Cor de realce ao toque
          onPress={() => alert('Entrar pressionado')}
        >
          <Text style={[styles.buttonText, styles.buttonTextEntrar]}>Entrar</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.buttonCadastrar]}
          underlayColor="#ffffff" // Cor de realce ao toque
          onPress={() => alert('Cadastrar pressionado')}
        >
          <Text style={[styles.buttonText, styles.buttonTextCadastrar]}>Cadastrar</Text>
        </TouchableHighlight>
      </View>

      {/* Barra de status */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinha o conteúdo na parte superior

  },
  rectangle: {
    width: '100%',
    height: '85%', // Altura definida com base no XML
    backgroundColor: '#FF8743',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    
  },
  rectangleContent: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    marginBottom: -250, // Margem inferior adicionada

  },
  rectangleText: {
    fontSize: 48, // Tamanho definido com base no XML
    color: '#038FDE', // Cor definida com base no XML
    letterSpacing: -0.01, // Espaçamento entre letras definido com base no XML
    fontWeight: 'bold',
    lineHeight: 72, // Altura da linha definida com base no XML
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    width: 167, // Largura definida
    height: 52, // Altura definida
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonEntrar: {
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#038FDE',
  },
  buttonCadastrar: {
    backgroundColor: '#038FDE',
    borderWidth: 0, // Removendo a borda
  },
  buttonTextEntrar: {
    color: '#038FDE',
  },
  buttonTextCadastrar: {
    color: '#FFFFFF',
  },
});
