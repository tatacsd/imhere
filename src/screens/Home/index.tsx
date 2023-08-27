import {
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
    console.log('Add participant');
  };

  const handleParticipantRemove = (name: string) => {
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
