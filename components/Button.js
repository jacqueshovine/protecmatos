import { StyleSheet, View, Pressable, Text } from 'react-native';
import { gs } from '../assets/styles/global';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Button = ({ label, color, icon }) => {

    const styles = StyleSheet.create({
        buttonContainer: {
            width: 320,
            height: 68,
            marginHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
        },
        button: {
            borderRadius: 10,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: color ?? gs.buttonColors.red,
        },
        buttonIcon: {
            paddingRight: 8,
            color: '#fff',
        },
        buttonLabel: {
            color: '#fff',
            fontSize: 16,
        },
    });

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        {icon && <FontAwesome name={icon} size={24} style={styles.buttonIcon} />}
        <Text style={[styles.buttonLabel]}>{label}</Text>
      </Pressable>
    </View>
  );
}

export default Button;
