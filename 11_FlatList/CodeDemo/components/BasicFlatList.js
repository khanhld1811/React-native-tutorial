import React, { Component } from 'react';
import { AppRegistry, FlatList, Image, StyleSheet, Text, View, Alert, Platform, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from "react-native-swipeout"
import AddModal from './AddModel';
import EditModal from './EditModel';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return{
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }
    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key })
            },
            right: [
                {
                    onPress: () => {
                        // alert("Update");
                        this.props.parentFlatList.refs.editModal.showEditModel(flatListData[this.props.index], this)
                    },
                    text:'Edit', type:'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            "Are you sure you want to delete ? ",
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        //Refresh FlatList!
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                            ],
                            { cancelable: true }
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
        };

        return (
            <Swipeout {...swipeSetting}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: 'mediumseagreen'
                    }}>
                        <Image source={{ uri: this.props.item.imageUrl }}
                            style={{ width: 100, heigh: 100, margin: 5 }}>

                        </Image>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column'
                            }}
                        >
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: 'white'
                    }}>

                    </View>
                </View>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
})

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deleteRowKey: null,
        });
        /**
         * bind gán giá trị của this
         */
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <View style={{
                    backgroundColor: 'tomato',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>

                    <TouchableHighlight
                        style={{
                            marginRight: 10
                        }}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}>

                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('../icons/plus.png')} />

                    </TouchableHighlight>
                </View>
                <FlatList
                ref={"flatList"}
                data={flatListData}
    
                    renderItem={({ item, index }) => {
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${JSON.stringify(index)}`);
                        /**
                         * return A JSX for item component
                         */
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>
                        );
                    }}>
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>
            </View>
        );
    }
}