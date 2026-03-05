import { View, Text, Image, StyleSheet } from 'react-native';
import avatar from './assets/foto_perfil_azir.jpg';

export default function App() {
  const usuario = {
    nome: "Fernando",
    bio: "Primeira programadora da história 💻",
    seguidores: "2.4M",
    avatar: avatar,
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={avatar}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.introduction}>Olá!</Text>
      <Text style={styles.name_introduction}>Meu nome é <Text style={styles.nome}>{usuario.nome}</Text></Text>
      {/* Bio */}
      <Text style={styles.bio}>"Não há vitória sem dor"</Text>
      {/* Stats */}

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  avatar: {
    width: 350,
    height: 350,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'rgb(255, 153, 0)',
    marginBottom: 16,
  },

  introduction: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40
  },

  name_introduction: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8
  },

  nome: {
    fontSize:30,
    fontWeight: 'bold',
    color: 'rgb(255, 153, 0)',
    marginBottom: 8
  },
  bio: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
});