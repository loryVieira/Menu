import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1}}>
            <View style={estilos.cabecalho}>
                <Image
                    source={ require('../assets/fotos/eu.jpeg') }
                    style={ estilos.foto }
                />
                <Text style={estilos.nome}>Lorena Vieira</Text>
            </View>
                

                <ScrollView>

                <Text style={estilos.texto}> Meu nome é Lorena Vieira, nasci em 17 de dezembro de 2008,
                    em Guararapes, São Paulo. Desde o meu nascimento convivo com o hipotireoidismo congênito,
                    descoberto ainda no teste do pezinho. Apesar disso, sempre encarei a vida com força e 
                    determinação para alcançar meus sonhos.
                </Text>

                <Text style={estilos.texto2}>
                    Atualmente, estudo de manhã no 2º ano do Ensino Médio e, à noite, curso a ETEC.
                    Durante a tarde, faço estágio, o que me ajuda a aprender na prática e a crescer tanto pessoal quanto profissionalmente.
                </Text>

                <Text style={estilos.texto3}>
                    Sou uma pessoa dedicada e persistente. Procuro sempre equilibrar meus estudos com a minha vida social,
                    acreditando que cada esforço é um passo em direção ao futuro que quero construir.
                </Text>
                    
                </ScrollView>

                <Button title="Sair"
                color="#64b5"
                onPress={() => {}} />

            
            
            {/* Foto
            Nome
            Biografia
            Hobbies
            Sonhos */}
        </View>
    );
}

const estilos = StyleSheet.create({
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
    foto: {
        width: 150,
        height: 150,
    },

    texto: {
        fontSize: 21,
        color:'black',
        fontWeight:'bold',
        padding:18,
    },

    texto2: {
        fontSize: 21,
        color:'black',
        fontWeight:'bold',
        padding:18,
    },

    texto3: {
        fontSize: 21,
        color:'black',
        fontWeight:'bold',
        padding:18,
    }



});

export default TelaInicio;