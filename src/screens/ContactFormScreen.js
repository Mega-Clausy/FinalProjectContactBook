import React from 'react';
import { View } from 'react-native';
import ContactForm from '../components/ContactForm';

const ContactFormScreen = ({ route, navigation }) => {
  const { contact } = route.params || {}; // contact may be undefined when adding a new contact

  const onSubmit = ({ name, phone, email }) => {
    // TODO: Save to database, update app state, etc.
    console.log('Saving contact:', { name, phone, email });

    // Go back to ContactList after saving
    navigation.navigate('ContactList');
  };

  return (
    <View style={{ flex: 1 }}>
      <ContactForm contact={contact} onSubmit={onSubmit} />
    </View>
  );
};

export default ContactFormScreen;
