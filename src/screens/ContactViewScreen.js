import { View } from 'react-native';
import ContactCard from '../components/ContactCard';

const ContactViewScreen = ({ navigation, contact }) => {
    const { contactId } = route.params;
    const { contact } = route.params;

    navigation.navigate('ContactView', {
        contactId: item.id,
        contact: item  // if you want to pass the whole object
    });


    return (
        <View style={{ flex: 1 }}>
            <ContactCard contact={contact} />
        </View>
    );
};

export default ContactViewScreen;