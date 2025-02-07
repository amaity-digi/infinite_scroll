import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Models = ({ modalVisible, setModalVisible }) => {
    const [movies, setMovies] = useState([]);

    const getMoviesList = async () => {
        try {
            const res = await fetch("https://reactnative.dev/movies.json");
            const result = await res.json();
            console.log("result", result?.movies)
            setMovies(result?.movies);
        } catch (error) {
            setMovies([]);
        }
    }

    useEffect(() => {
        getMoviesList();
    }, [])

    const renderItems = ({ item }: { item: { id: string, title: string, releaseYear: string } }) => (
        <View style={styles.modelContainer}>
            <Text >{item?.title}</Text>
            <Text >{item?.releaseYear}</Text>
        </View>
    )

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{"Hello World!"}</Text>
                            {movies.length > 0 &&
                                <FlatList
                                    data={movies}
                                    renderItem={renderItems}
                                />
                            }
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text >{"Hide Modal"}</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width: '80%',
        maxWidth: 400,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modelContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    }
});

export default Models;