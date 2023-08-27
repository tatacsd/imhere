import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
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
      <Participant
        name="Thays"
        onRemove={() => handleParticipantRemove('Thays')}
      />
      <Participant
        name="Joao"
        onRemove={() => handleParticipantRemove('Joao')}
      />
      <Participant
        name="Luiz"
        onRemove={() => handleParticipantRemove('Luiz')}
      />
      <Participant
        name="Lary"
        onRemove={() => handleParticipantRemove('Lary')}
      />
    </View>
  );
}
