import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { CheckBox } from "react-native-web";
import {
  getDatabase,
  ref,
  onValue,
  child,
  get,
  set,
  update,
  push,
} from "firebase/database";
import { database } from "../config/firebase";

// function for writing new data
function writeUserData(
  userId,
  name,
  email,
  placement,
  imageUrl,
  selectedPackage
) {
  const database = getDatabase();
  const reference = ref(database, "users/" + userId);
  set(reference, {
    username: name,
    email: email,
    placement: placement,
    profile_picture: imageUrl,
    selectedPackage: selectedPackage, // athlete package that they have selected, we will use a radio button to determine which they pick.
  });
}

// function for reading existing for placement data
var placementText;

function readUserPlacementData(userId) {
  const placementRef = ref(database, "users/" + userId + "/placement");
  onValue(placementRef, (snapshot) => {
    const data = snapshot.val();
    //updatePlacement(postElement, data);
    console.log(snapshot.val());
    placementText = snapshot.val();
  });
}

// function for reading existing for athletes/user's name data
var userName;
function readUserNametData(userId) {
  const userRef = ref(database, "users/" + userId + "/username");
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    //updateName(postElement, data);
    console.log(data);
    userName = data;

    // trying to change the users information CANNOT SOLVE JUST YET
    const newUserName = push(child(ref(database), "username")).key;

    const updates = {};

    updates["users/" + userId + "/username" + newUserName] = userName;
    return update(ref(database), updates);
  });
}

// changed user data NOT WORKING
function updateInformation(userId, updatedInfo) {
  const updates = {};

  updates["users/" + userId + "/username" + newUserName] = updatedInfo;
  return update(ref(database), updates);
}

// creating the users
writeUserData(
  "Craig",
  "Craig123",
  "hisemail@me.com",
  "1",
  "imageUrl",
  "unselected"
);
writeUserData(
  "Anders",
  "Anders321",
  "myemail@me.com",
  "2",
  "imageUrl",
  "unselected"
);

// reading the user's placement
readUserPlacementData("Craig");
readUserNametData("Craig");

const AthleteScreen = ({ navigation }) => {
  //export const AthleteScreen =({navigation}) =>{
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const database = getDatabase();

  const optionOneSelected = () => {
    setOptionOne(true);
    setOptionTwo(false);
  };

  const optionTwoSelected = () => {
    setOptionOne(false);
    setOptionTwo(two);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Grid>
            <Col size={75}>
              <Row style={styles.cell}>
                <Text style={styles.boldText}>100m Mens</Text>
              </Row>
              <Row style={styles.cell}>
                <Text>{userName}</Text>
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
                <Text style={styles.boldText}>Cost</Text>
              </Row>
              <Row style={styles.cell}>
                <Text>{placementText}</Text>
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
  );
};

export default AthleteScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 600,
    padding: 16,
    paddingTop: 25,
  },
  cell: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingLeft: 10,
    height: 500,
  },
  headerCell: {
    borderWidth: 0,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "",
  },
  boldText: {
    fontWeight: "800",
  },
  gridStyle: {
    paddingTop: 25,
  },
});
