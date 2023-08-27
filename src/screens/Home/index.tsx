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
  const participants = [
    'Thays',
    'Joao',
    'Luiz',
    'Lary',
    'Luis',
    'Larissa',
    'Luisa',
    'Marilou',
    'Rod',
    'Rafael',
    'Rafaela',
    'Rafaelo',
    'Rafaeli',
    'Rafaelu',
    'Rafaelou',
  ];

  const handleParticipantAdd = () => {
    if (participants.includes('Thays')) {
      return Alert.alert('Ops!', 'This participant is already in the list.');
    }

    console.log('Add participant Thays');
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
          onPress: () => Alert.alert('Participant removed'),
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
