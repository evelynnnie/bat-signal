import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import styles from './BatFormStyles';

export function BatForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [note, setNote] = useState('');

  function handleSubmit() {
    alert('Bat Sinal enviado!');
  }

  return (
    <View>
      <Text style={styles.text}>Nome</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.text}>Telefone</Text>
      <TextInput
        placeholder="Digite seu telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <Text style={styles.text}>Localização</Text>
      <TextInput
        placeholder="Digite sua localização"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      <Text style={styles.text}>Observação</Text>
      <TextInput
        placeholder="Observação"
        value={note}
        onChangeText={setNote}
        multiline
        style={styles.input}
      />

      <Button title="Enviar" onPress={handleSubmit} color="#E5BF3C" />
    </View>
  );
}