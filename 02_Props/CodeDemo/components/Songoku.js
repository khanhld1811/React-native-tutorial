import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Songoku extends Component{
    render(){
        const imageSource = {
            uri:'https://img.thuthuatphanmem.vn/uploads/2018/11/06/anh-songoku-be-dep_044039827.jpg'
        }
        return(
            <Image source={imageSource}
                    style={{width:300, height:200}}></Image>
        );
    }
}