import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';

function TelaContato() {
    return (

        <View style={{ flex: 1}}>
            <View style={estilos.cabecalho}>
                <Image
                    source={ require('../assets/fotos/contato.png') }
                    style={ estilos.foto }
                />
                <Text style={estilos.nome}>Meus Contatos</Text>
            </View>

            <Text style={estilos.text1}>Email: lorenaevangelistavieira@gmail.com</Text>
            <Text style={estilos.text2}>Telefone: 18 99707-9793</Text>
            <Text style={estilos.text3}>Redes Sociais: lor1_v1e1ra</Text>
        </View>
        

    );
}

const estilos = StyleSheet.create({
    text1: {
        fontSize: 21,
        color:'black',
        fontWeight:'bold',
        padding:18,
    },
    text2: {
        fontSize: 21,
        color:'black',
        fontWeight:'bold',
        padding:18,
    },
    text3: {
        fontSize: 21,
        color:'black',
        fontWeight:'bold',
        padding:18,
    },

    foto: {
        width: 150,
        height: 150,
    },

    cabecalho: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#64b5',
        padding: 10,
        marginBottom: 10,
    },

    nome: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },

});

export default TelaContato;