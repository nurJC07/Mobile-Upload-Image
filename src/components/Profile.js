import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { Card, CardSection, Button } from './common';
import { logoutUser, pictureCreate } from '../actions';
import PictureForm from './PictureForm';



class Profile extends Component{
    static navigationOptions = {
        tabBarLabel: 'Profile',
        
    };


    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login')
    }

    onButtonPress = () => {
        var data = {
                link: this.props.link, 
                caption: this.props.caption,
                email: this.props.user.email
        }
        this.props.pictureCreate(data) 
    }

    render() {
        return (
            <View>
                <Header 
                    containerStyle={{
                        backgroundColor: '#000',
                    }}
                    centerComponent={{text: 'My Galeri', style: { color: '#fff', fontSize:20 }}}
                    rightComponent={{
                        icon: 'home',
                        color: '#fff',
                        onPress: this.logOut
                    }}
                />
                <Card>
                    <PictureForm />
                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Post
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth.user)
    return { 
        user: state.auth.user,
        link: state.pictureForm.link,
        caption: state.pictureForm.caption
    }
}

export default connect(mapStateToProps, { logoutUser, pictureCreate })(Profile);