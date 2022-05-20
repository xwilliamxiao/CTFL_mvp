import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function AthleteScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
      <Grid>
        <Col size={75}>
          <Row style={styles.cell}>
            <Text style ={styles.boldText}>100m Mens</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Brandon Letts</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Jonelle Halog</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Rabbi Bositampen</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Joshua Lunda</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Keysean Powell</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Addison De La Cruz</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Xavier Joseph</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Kejean Jackson Jr.</Text>
          </Row>
        </Col>
        <Col size={25}>
        <Row style={styles.cell}>
            <Text style ={styles.boldText}>Cost</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>8</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>7</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>6</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>5</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>4</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>3</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>2</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1</Text>
          </Row>
        </Col>
      </Grid>
    </View>
</ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    padding: 16,
    paddingTop: 25,
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1, 
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10,
    height: 500
   
  },
  headerCell: {
    borderWidth: 0,
    borderColor: '#ddd',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
  },
  boldText: {
    fontWeight: '800',
  }
});