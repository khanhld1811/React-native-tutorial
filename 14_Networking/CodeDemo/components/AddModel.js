import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

import {insertNewFoodToServer} from '../networking/Server';

var screen = Dimensions.get('window')
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        }
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }
    render() {
        return (
            <Modal
                /**
                 * ref có nghĩa là tạo một tên biến cho Modal trỏ tới chính nó
                 */
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 263
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>
                    New food's infomation
                </Text>
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1
                }}
                    onChangeText={(text) => {
                        this.setState({ newFoodName: text })
                    }}
                    placeholder="Enter new  food's name"
                    value={this.state.newFoodName}
                >

                </TextInput>
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1
                }}
                    onChangeText={(text) => {
                        this.setState({ newFoodDescription: text })
                    }}
                    placeholder="Enter new  food's description"
                    value={this.state.newFoodDescription}
                >
                </TextInput>

                <Button style={{
                    fontSize: 18,
                    color: 'white'
                }}
                    containerStyle={{
                        padding: 9,
                        marginTop:20,
                        backgroundColor: 'mediumseagreen'
                    }}

                    onPress={() => {
                        if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key:newKey,
                            name:this.state.newFoodName,
                            // imageUrl:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISEhIVFhIXFRUYFxUYFxYXFxUXFhUXGBYVFRgYHSggGBolGxUXIjEhJSkrLi4uFx8zODMtNyguLisBCgoKDg0OGhAQGi0gHSUuLSstLS0tLS0tLS0tKy4tLS0tLSstLS0tLS0tLS0tLS0tKy0tLS0vLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EAEAQAAEDAgMFBgQDBAoDAQAAAAEAAhEDIQQSMQVBUWFxEyIygZGhBnKxwSNS0WKCkvAzQkNTorKzwsPhFCRzB//EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EACkRAQEAAgEEAQMDBQEAAAAAAAABAhEDBBIhMUEiMoEzUWETFEKR8CP/2gAMAwEAAhEDEQA/AL6IisYRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARERIiIiBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFHXcQLay0fxOA+6kRIiIiBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBXxps356f8AqMH3VhV8YLN+en/qsP2VhQn4FXx+NZRYalQw0RzJJsAANSTuVhab4twLquHOQS+m4VA382UEOA55XOjnCVOMls2npbSqOEtwlZ3R+GP/ADKwytXOuCxAHEdi72bVJ9l83FWwcNNZGt1ao4+oPDVqDo9w+6p78m7+2wd9Q2hTc7JJbU/u3tdTfA3hrwCRzFlaXEnbdZ7OzrRWZuFQS5p4seIe13MGVYwXxMaZy1A91L8x7z6fzEAdo3nAcP2tV3jyb9qeTprj5x8uuRYUarXtDmODmkSCDII4grNWMwvCF6iIeAr1Yv8AoskSIiq1sS4udTpBpe1uao9xilQb+eq4ezBc8hcRbJ7TjjcrqJq9drGlz3BrRvJgLmNr/FJu2gCI1qOFx8jDfzd6FUdq7UGb8Mue6/4zrPd/82aUGX3d4jVx0WqVV5L8NvH00nnLytYTa1Wi/tc7nfnDnOcHNkF1ibGBYj6L6ICvl2WRHKPsvoewqxfhqDjqaTJ65RK64646rGTVi8iIrGMREQEREBERAREQR12yOYgjqDIHsswZuNF6q9J2VxYdDJYeW9vIgn0I5qErCIilDg/iHZJoVC9o/Ae6xH9m52rXcGk6HnHBVqGHBsQu82nhBWpVKR/rtIngdx8jB8lxOzKkgZhDtHDg4GHD1BVHJNPR6bk7pq/CU4MgSJI4anyP2VWswQCNDoto8Oc4ZTGXfmN8w3siCNL8itjsr4YfiGkn8NuYlsiZDgCYHzEqvbS0fw7iqtKsG02vfSce/TaC7LxqtA0jfxHNd00PLsopVZyyPw3gG+4kAe66jYOyaWGphjAJjvOMZnHeT/Nls3VQBf0UzmsZ8+nxyu3EswtWAXUyCbxLQekEzPksHU6gJHY1bcGG/RdxRrSJ0WXaBP62Tm9Lh/LhCxwBc5j2j9ppb6Tr0ChFZoBkwGmDILY3gEEWsQuzxuOEEDz4LR1aknluCn+tU/2eN+WjdVfVcyjhiDVqTD/E2kxph9V3GJgN3uIGkxp/jTEMpFuBoEilT71R0y6tWcJLqjt5Av16ALrsg7xi7m5XHeWiYB4jvG3Mri9tfDobVYGVCS6XAPuXFviAcNTB0K5vJ3VZhwTjjn2UVkaK2AwjqeZzg4tm2VpMNG8gXvrpwWZY1zczSCOIU7WtHS0nm7/MV3fwqf8A1KHJseYJB9wuJpt7jTxv6mV1fwRVmg5n5KtQfxRU/wB6s4/bJ1U+iV0CIiuYBERAREQEREBERAWdGplIJaHDe06OG9p6jfuMHULBFFm/CZdLu1cB2RYWkuo1G5qbjqRaWu/aEjr6xSW+w8VNm4gO1oF1Rh3jKM8DrNRvRxWhKr4srdy+54d8kk1Z8i4PbTeyxGIA0JFQfvNBP+IOPmu8XG7awpqY4sHh7NjnHg0SI6k+wK65PS3pb9bZ/CuBB777S6TI3T3QAuydtJoIDItaP0Oi5UYxjCKYPejwjWOPIc1FicXUgloYBNgSZPSNPdZb5en6juG48HKRed2nI68FMahkWJsb8Ij9Vw/wjtV7qlWnXIFTuvaJmA7NLWneJpzxXc4Wu1w7u7VRZpMu2b6hDSdAtRX2qRMX5nRZ7Xxc90HujXmVx22tplgaGtzVHuysZpJ3uPAAJJst03lfao1LgAqw223cHH2WorUIy56jM514Nt/N1q8binQW0alFz/3gB6TPsp7XNy07KhtlhMEFvM6K85jXgTBAIIPAgyDIXF4Z5LGlwIcQJBiQYvMWVvD13NMtJCi4p7m/xOABu2x9v+lzGLoZCQ1pAF3yd54TJJ84ghdLs/aWezrO9j+ipfFOHdk7SmAXDxDi2D7iT68klTf3cGx/dPz1APKo4LofgapfEt50nfxNc3/jXO4en+HP7dQ+r3FdB8ENPaYg7slEec1Vow+5k6j9N1qIiueaIiICIiAiIgIiICImdou8w33PBrZ1cdAOJCVM8pqON/Cq0WnxVGZ/lY0Oa3zc6/JsHVQqOiyBoASS4gEkAuJJAJuQJgcgFIucZpOV2LQUn5q2IqW8Ypj5aQ0/jdU9lv1zODolnatP9/Wd1zPJHsR6Ljl9NPST60W1sS0Oa0lxe4Q1jJL3dALjrotS1jiXfh4hga7K90CoGugOh2UuizhNrSuh+E8IG4utUrEd85WEuFmCC0DgDI8wVufg7EvqYStTquytoYvEAggAtL3doSTqb1Ha/YKzj4JlJ5c9R1mWGV1j6cxs2o2nNXNniKgd3TIa17bFu4B58yujwm2A0kh0WgyuaxmGDsTXdTANN7mwwCJ7ga95H7RkzwAV7BfD+IImYbzEk+Y3rLnjJdbb+LK3GXWm2xmIzAGbfVcxt9tMZaz6jmZARaDOaLAEG/dC3dTCuptLS4ugmLRE7lpMVQD6tOpU8FN4cBE7tY5Ez5BRj7dZ3w0uKpYnIaowvc7sdscznEkBobSBADiSLZVs3UdpUp7XDMcG6hroc2NbE7uELqfi7ZNZ+Bp18C9tStTrU6pbTLXvGWS0taJJIdlMRuXX4zFYUYduLr1gO1Y18H+kJe0HKGC+YTpujcts4+P5ry7z8+t44+dvl+AxzaoJbIIs5p1afuOYV1ioYKm3PVqNYWNe6WsMS1u6YtvJgWE2kLYNWPLUvh6eHd2y5e1rCuIIIXQ0zmYuapuW72W43C4qyOM23Q7Oq9mXKJlo0ERqPdbv4RpAUS6Lue6/y937FbjbmHpOovdVbIY1zreIQJOU+Si2dhuzpMZ+VonrqT6kq/h8sfWXWMiwiIr3nCIiAiIgIiICIiAq9Vs1Kc6BryPm7onrlc71KsKOvTJAgw4GQYkTBFxvEEomJEXvZuDWOcLOBII0Jacrh1Dh7jisZ/mColl9FmkeIrBjXPPha0uPIASVo2vJbmOru8RwJuQtltq9Co3iA3qHOAI9CVrKwBNjB5foquW/Db0ePutTiqpzacp5xP0JVmkXuu97nDgXEydBqVcwuDc8wWy0Xc4bhxg/aV1Hw5sthHalsOOktILRugO0JFz1iYVO22TdU/hTZrGgCpUAPeNV4bm7+sRPQRuELdNx5Lg3uxIFrEEkRbRfOfj/AGoMJialLDsDDUYM7hNzEBwEwHXN44Lb/wD41imOo16eUZ2PDiYEkPGWZ/d91HbdbaLzcP244+f+/wBusx2ziQ7MJaRcjdzXH43BupmHabjuP88F9LVDaGz2vae6DxG4/wDaj0psfMa7YN4g6SLTwncn/jcMo8pW22tgeykwSw74kAcHLUso0gZEDlJgdAdF1EbqxTFgFO0KBlQc/IOP0CtYaZkN9TH6lEJ8PRvdbvCAARqd/LrwVHC0JPePkLD9VsmiLCw4Liuo8x+H7SlUZ+Zrh6hV6L8zWu4gH1ErYNK1VB4DnUjYtuBxYScpHLd5K7gvnTJ1uG8Zl+ywiItLzRERAREQEREBERAREQR7Y2q9rMLSp0HOaHVAXxAzuIeWg6Zi0iASJynysNoUA1r6+MyNdEMa1rHH9k55M8rKhtOm1zQC5zXZgWFnjzCYyiDNiQZEQTNlVwWzngl5cQ8gAvOV9UgaCfCwa90A6zKo7M5lqXw14cnFMN3HeS/jK2DMBmDq1Z/r1aj2i19HGfRqqsxuHb3XYOiANB2sf5lhjqNNuXMDUdmByuJeSDLZgnK0S4XsLKzQwpOsMb+VlvV2vpC5z+mtXBl3470ibTl5dQZla4AZGV5uCZN3Ro4egVjFbVxOGYXPFXKIAGWjUkmzWjIc0kkC/FelzGOYAwSSYsMzxvjNvsDe5yugK4cQ6piaVNrXdn2bqjnOa5vezhrB3gLwKhjos9495d260b8aUKPwi3EAYjHTUxLwCQO6ykCIyMZ01JkrZbO+FqFEDss7CBALajxw3A5TJEmQZXQQkKzuqJjGrFbEUvEO2ZxADao+jH/4PNXMLj6dRoc0yDxBBBFiHA3a4GxBuDqpy1c5trZdfO2phn5H5ml7T/R1WAiQ+xIcGzBF9Bwh7TfDZ4vBsfmBIDTquYw+wjUY8UyA5kECPFOaW62Pd91uMdXqeGmyTxMho68fVWdiYYU2ZXw5xJe95Grj4jyFgANwASIvlxzcI8eIweEKejRcP63t/wBrc43CDtHFzYaZIAtIkxYKnVoGDB9QD9IKbNMaIeDqP4T+q2JcRqB5H9VS2WH94QD0MH0P6q1XflMOBaeenkdCuamLNN4038N6obYpwadYeKm6DzpvIa4euV37qlpOvKkqNzCOMfVTLq7MsZljZUaLGkIa0ch9Fktzw6IiIgREQEREBERAWLjuGv05lZIUSwZTAvqTqd/TpyWBeXWbYb3/AGaN556dbxkRm18PDj15clIFAi7Boa5sWIMzqZEXOpKwwWILgG/2gsQdBFu0dxFtOMjdIkqvgSRPAcTuHX6KCjTDHh58R8Ua8AWje3QRyB1Bmrlx3GrpeTty1flsRhheYc0jvtcA4P5kHf7WHBWNlMa1wyABuQwAIAveBu1XtMTEaKwKJsW6i4/ToRbzWaPT0uiqpGulVadQO0sb2OttbealiFInXhWDXLMIlXdcyvOz4ATxhWhSXuWEQ0u18KSQ8km0DdEXWuFMyt9tOq0NynU6cua1MhQKIwpBMOj6/wA3KzqmBJOmpP3WZrAuygxaT9vv6LJ+H4kkIK9OnGlun6aKcVIF/UfcLGrZYNCDKnoOgWSjpCw9D1FlIt09PDymroREUuRERAREQEREBeFs9F6iAiIgjDZOY7rD7n+d3VZ4YNc8gi7SCD5D9QvVnhvGOYI+h+yr5J9NaOmuuSNiwK/QZAVSg262QCyR6ylicI4kFniBlvUiC08j7a7l7gu1nJVpuB3OgEO+YtsHc9Dugy0bXCMvPBWHslNuLdVrGDWQQVYbRKncAOagqY1otHXl6qNndWWTjZVsdXbTBJcJ3DWVTr7UeQQDA3WExzWpxQc7SPtyRM2xr4gvcXGB7BRVKwiAZ6e99ApBSMAT6ackdRmZ03n7I6U9nUjJc7xOvyA4D2V8uWNKlF/bgFlCmkRvugasyEUJQEQ48wD9j9B6r1e1xdh5lvqJ/wBoXi2cV3i8nqsdcl/kREVjMIiICIiAiIgIiICIiAs8OfxGdT/lcsFNgac1Afygn+KQPoVxyfbV/TzfJG4w7VeVSiVbasj11vCaealebKLC6eamXKrL2q1Hwdyp7Te7KBYA6wPZXq+CY6+h4iyq4jZ4DScz3EbiSiZWjeFHlO5T9iZg2UoZeALosVm01IWq43ClQ4ijlRKqQoiFMQsCxBEiyyLyEEONtTJ/KQ7yBBPtKxVh7QWkHQgg9CFVpTlE6wJ6wtHBfcef1s8yskRFoYBERAREQEREBERAREQFa2X4nnmG+gn/AHKqrOyD4/nPs1o+yp5vta+jn/p+G3pq61UGFX2aBZ3p1ZwpseqnUGGU65VZexEREI6lEFeU8M0XgTxUqIbV30b8lXxNCQtgo6jbI6mTnq1GFWctzWpLT4lsWU6WRC56C6wWbAiWNcw1x4NP0VdTbQMU3/K76KFX8Hy8/rfeIiItDAIiICIiAiIgIiICIiAp9kH+kHCofdrD91FTEkKejSyvc4GzspjgQIJ9A30Wfny+G7o8Lu5fhtKav0tFrcO8EgLaMCoehVinopwVA1SsKhVWSIiIEREBCERBWrMWrx2HkytvXN1qNp14GUanXopWYtbkF14vCvVDtU2q78OOLqY9Xtn2lYqzUYDruMjqNCqy08HqvO633KIiK9hEREBERAREQEREBERBnR1VpEWXm+56fR/p/lYwfjC3TURVRqqdikYvUUOKyRERyIiICIiCCvquf2j/AEh8voiIsxVV6iI6YlVERaOD5YOt/wAfyIiLQwCIiAiIg//Z',
                            foodDescription: this.state.newfoodDescription
                        };
                        // flatListData.push(newFood);
                        // this.props.parentFlatList.refreshFlatList(newKey);
                        insertNewFoodToServer(newFood).then(() => {
                            this.props.parentFlatList.refreshDataFromServer();
                        })
                        this.refs.myModal.close();
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}
