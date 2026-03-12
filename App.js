import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import avatar from "./assets/foto_perfil_azir.jpg";
import React, { useState, useEffect } from "react";
import { Linking } from "react-native";

export default function App() {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(false);

  useEffect(() => {
    if (copos >= 8) {
      setMeta(true);
    } else {
      setMeta(false);
    }
  }, [copos]);

  const adicionarCopo = () => {
    setCopos(copos + 1);
  };

  const resetar = () => {
    setCopos(0);
  };

  const usuario = {
    nome: "Fernando",
    bio: "Primeira programadora da história 💻",
    seguidores: "2.4M",
    avatar: avatar,
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image source={avatar} style={styles.avatar} />
      {/* Nome */}
      <Text style={styles.introduction}>Olá!</Text>
      <Text style={styles.name_introduction}>
        Meu nome é <Text style={styles.nome}>{usuario.nome}</Text>
      </Text>
      {/* Bio */}
      <Text style={styles.bio}>"Não há vitória sem dor"</Text>
      {/* Stats */}

      {/* Botões */}

      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => Linking.openURL("https://github.com")}
        >
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => Linking.openURL("https://github.com")}
        >
          <Text style={styles.link}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() =>
            Linking.openURL("mailto:prof@fiap.com.br?subject=Dúvida Aula 04")
          }
        >
          <Text style={styles.link}>E-mail</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.container, meta && styles.metaAtingida]}>
        <Text style={styles.titulo}>💧 Hidratação</Text>

        <Text style={styles.contador}>{copos} copos</Text>

        {/* Emojis */}
        <Text style={styles.emojis}>{"🥤".repeat(copos)}</Text>

        {meta && <Text style={styles.metaText}>🏆 Meta do dia atingida!</Text>}

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botaoAdd} onPress={adicionarCopo}>
            <Text style={styles.botaoTexto}>+ Copo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoReset} onPress={resetar}>
            <Text style={styles.botaoTexto}>Resetar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#0a0a0a",
    padding: 20,
  },

  linksContainer: {
    flexDirection: "row",
    justifyContent: "center", // centraliza horizontal
    gap: 10, // espaço entre botões (RN mais novo)
    marginTop: 10,
  },

  botao: {
    backgroundColor: "#24292e",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },

  metaAtingida: {
    backgroundColor: "#0f5132"
  },

  titulo: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },

  contador: {
    color: "#4fc3f7",
    fontSize: 40,
    marginVertical: 10
  },

  emojis: {
    fontSize: 24,
    marginBottom: 10
  },

  metaText: {
    color: "#00ff95",
    fontSize: 18,
    marginBottom: 10
  },

  botoes: {
    flexDirection: "row",
    gap: 10
  },

  botaoAdd: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8
  },

  botaoReset: {
    backgroundColor: "#e53935",
    padding: 10,
    borderRadius: 8
  },

  botaoTexto: {
    color: "white",
    fontWeight: "bold"
  },

  avatar: {
    width: 350,
    height: 350,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "rgb(255, 153, 0)",
    marginBottom: 16,
  },

  introduction: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },

  name_introduction: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },

  nome: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(255, 153, 0)",
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#aaa",
    textAlign: "center",
    marginBottom: 16,
  },

  link: {
    color: "#4fc3f7",
    textDecorationLine: "underline",
    fontSize: 16,
  },

  stat: {
    color: "#fff",
    fontSize: 14,
  },
});
