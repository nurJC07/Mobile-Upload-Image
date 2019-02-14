import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getListPicture } from '../actions';
import PictureDetail from './PictureDetail';



class Homepage extends Component{

    static navigationOptions = {
        drawerLabel: 'Homepage'
    };

    componentDidMount() {
        this.props.getListPicture();
        
    }

    renderAlbum = () => {
            const listJSX = this.props.postlist.map((item) => {
                return (
                    <PictureDetail key={item.uid} post={item} />
                );
            });
            return listJSX;
    }


    render() {
        return (
            <View>
                <Header 
                    containerStyle={{
                        backgroundColor: '#000',
                    }}
                    centerComponent={{text: 'MyGaleri', style: { color: '#fff', fontSize:20 }}}
                />
                <ScrollView>
                 {this.renderAlbum()}
                </ScrollView> 
            
                
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.postlist); 

    const postlist = _.map(state.postlist, (val,uid) => {
        return { ...val, uid }
    });
    console.log(postlist);

    return {postlist};
};

export default connect(mapStateToProps, { getListPicture })(Homepage);

