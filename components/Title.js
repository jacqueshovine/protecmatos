import { StyleSheet, Text } from 'react-native';
import { gs } from '../assets/styles/global';

const Title = ({ label, level }) => {
    const titleWhite = {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 8,
    };

    const styles = StyleSheet.create({
      title1: {
        ...titleWhite,
        fontSize: 48,
      },
      title2: {
        ...titleWhite,
        fontSize: 32,
      },
      title3: {
        ...titleWhite,
        fontSize: 24,
      }
    });

    const getTitleStyle = (level = '2') => {
        return styles[`title${level}`];
    }

    return (
        <Text style={getTitleStyle(level)}> {label} </Text>
    );
}

export default Title;
