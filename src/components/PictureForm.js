import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { pictureUpdate } from '../actions'
import { CardSection, Input } from './common';

class PictureForm extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="Image"
                        placeholder="Image URL"
                        value={this.props.link}
                        onChangeText={text => this.props.pictureUpdate('link', text)}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Caption"
                        placeholder="The Caption"
                        value={this.props.caption}
                        onChangeText={ text => this.props.pictureUpdate('caption', text)}
                    />
                </CardSection>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    const { link, caption } = state.pictureForm;
    return { link, caption };
}

export default connect(mapStateToProps, { pictureUpdate })(PictureForm);