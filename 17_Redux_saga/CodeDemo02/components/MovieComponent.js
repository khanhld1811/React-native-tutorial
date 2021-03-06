import React, { Component } from 'react';
import Button from 'react-native-button';

import {
    Text,
    View,
    Image,
    Alert,
    Platform,
    TextInput,
    FlatList,
    RefreshControl
} from 'react-native';

import Swipeout from 'react-native-swipeout';
import FlatListItem from './FlatListItem';
import EditModal from './EditModal';

import { fetchMovies } from '../sagas/MovieSaga';

export default class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { movieName: '', releaseYear: '' }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                marginTop: Platform.OS === 'ios' ? 34 : 0
            }}>

                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Movie List
                </Text>

                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New movie infomation
                </Text>

                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ movieName: text })}
                        value={this.state.movieName}
                        placeholder='Enter new movie name'
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 1, borderColor: 'gray', borderWidth: 1, width: 120 }}
                        onChangeText={(text) => this.setState({ releaseYear: text })}
                        placeholder='Release year'
                    />
                </View>

                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.props.onFetchMovies('asc');
                        }}>
                        Fetch movies
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            const { movieName, releaseYear } = this.state;
                            if (!movieName.length || !releaseYear.length) {
                                alert('You must enter moive name and release year');
                                return;
                            }
                            this.props.onAddMovie({ name: movieName, releaseYear: releaseYear })
                        }}>
                        Add Movie
                    </Button>
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) =>
                        <FlatListItem
                            {...item}
                            itemIndex={index}
                            movieComponent={this}>

                        </FlatListItem>}

                />
                <EditModal ref={'editModal'} movieComponent={this}></EditModal>
            </View>
        );
    }
}