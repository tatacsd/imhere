import { useState } from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [nameInput, setNameInput] = useState<string>('');

  const handleParticipantAdd = () => {
    if (participants.includes(nameInput)) {
      return Alert.alert('Ops!', 'This participant is already in the list.');
    }

    setParticipants([...participants, nameInput]);
    setNameInput('');
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert(
      'Remove participant',
      `Are you sure you want to remove ${name}?`,
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            );
            Alert.alert('Success!', `${name} was removed from the list.`);
          },
        },
      ]
    );
    console.log(`Remove participant ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event's name</Text>
      <Text style={styles.date}>Friday, 13 November 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant's name"
          placeholderTextColor={'#6b6b6b'}
          value={nameInput}
          onChangeText={setNameInput}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            No participants yet. Add one!
          </Text>
        )}
      />
    </View>
  );
}
