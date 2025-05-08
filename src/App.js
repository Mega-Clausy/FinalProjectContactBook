import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactListScreen from './screens/ContactListScreen';
import AddContactScreen from './screens/AddContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import { ContactsProvider } from './context/ContactsContext';

import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <ContactsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContactsList"
            component={AddContactScreen}
            options={{ title: 'Add Contact' }}
          />
          <Stack.Screen
            name="ContactView"
            component={ContactListScreen}
            options={{ title: 'View Contacts' }}
          />
          <Stack.Screen
            name="ContactForm"
            component={EditContactScreen}
            options={{ title: 'Edit Contact' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </ContactsProvider>
    </PaperProvider>
  );
}