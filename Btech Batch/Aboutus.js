import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class Aboutus extends Component {
  render() {
    return (
      <Container>
        
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./images/naveen.jpg')}/>
                <Body>
                  <Text>Naveen Pittala</Text>
                  <Text note>Founder ContentCafe</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('./images/naveen.jpg')} style={{ width:150,height:150}}/>
                <Text>
                  95% of the students pursuing their B.E are dependent on the PDFs provided. I had to write my supplementary exams of one whole semester where I faced difficulty in collecting all the pdfs. One of my friends didn't attend his exam as he couldn't collect his pdfs to prepare. It was the main reason for developing this application so that it would help all my cse friends.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./images/admin.jpg')}/>
                <Body>
                  <Text>Srija Reddy Bussa</Text>
                  <Text note>Co-Founder ContentCafe</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('./images/admin.jpg')} style={{ width:150,height:150}}/>
                <Text>
          We also included basic interview questions which would help students to give them the idea of how to prepare for technical interviews. Python is the booming programming language. Those who are not aware of it, don't worry! We have added them in this application about WHY PYTHON and How to learn python from scratch
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}