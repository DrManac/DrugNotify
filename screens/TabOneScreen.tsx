import {Button, StyleSheet} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import {Text, View} from '../components/Themed';
import {RootTabScreenProps} from '../types';
import notifee from '@notifee/react-native';

export default function TabOneScreen({navigation}: RootTabScreenProps<'TabOne'>) {
    async function onDisplayNotification() {
        // Create a channel
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'Notification Title',
            body: 'Main body content of the notification',
            android: {
                channelId,
            },
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <Button title='Press me!' onPress={onDisplayNotification}/>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
