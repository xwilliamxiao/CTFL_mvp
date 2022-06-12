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

const PackageScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.descriptionStyle}>
        The following below contains the 8 available packages for the current
        CTFL draft.
      </Text>

      {/* Package 1 Table Grid*/}
      <Text style={styles.textStyle}>Package 1</Text>
      <Grid>
        <Col size={50}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Athlete</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Jon Doe</Text>
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
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Event</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>200m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Long Jump</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Shot Put</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1500m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>800m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400mH</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400m</Text>
          </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Team</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
        </Col>
      </Grid>

      {/* Package 2 Table Grid*/}
      <Text style={styles.textStyle}>Package 2</Text>
      <Grid>
        <Col size={50}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Athlete</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Jon Doe</Text>
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
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Event</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>200m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Long Jump</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Shot Put</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1500m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>800m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400mH</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400m</Text>
          </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Team</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
        </Col>
      </Grid>

      {/* Package 3 Table Grid*/}
      <Text style={styles.textStyle}>Package 3</Text>
      <Grid>
        <Col size={50}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Athlete</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Jon Doe</Text>
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
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Event</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>200m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Long Jump</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Shot Put</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1500m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>800m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400mH</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400m</Text>
          </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Team</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
        </Col>
      </Grid>
      {/* Package 4 Table Grid*/}
      <Text style={styles.textStyle}>Package 4</Text>
      <Grid>
        <Col size={50}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Athlete</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Jon Doe</Text>
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
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Event</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>200m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Long Jump</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Shot Put</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1500m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>800m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400mH</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400m</Text>
          </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Team</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
        </Col>
      </Grid>

      {/* Package 5 Table Grid*/}
      <Text style={styles.textStyle}>Package 5</Text>
      <Grid>
        <Col size={50}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Athlete</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Jon Doe</Text>
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
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Event</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>200m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Long Jump</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Shot Put</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1500m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>800m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400mH</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400m</Text>
          </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Team</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
        </Col>
      </Grid>
      {/* Package 6 Table Grid*/}
      <Text style={styles.textStyle}>Package 6</Text>
      <Grid>
        <Col size={50}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Athlete</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Jon Doe</Text>
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
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Event</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>200m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Long Jump</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Shot Put</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1500m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>800m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400mH</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400m</Text>
          </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Team</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
        </Col>
      </Grid>
      {/* Package 7 Table Grid*/}
      <Text style={styles.textStyle}>Package 7</Text>
      <Grid>
        <Col size={50}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Athlete</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Jon Doe</Text>
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
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Event</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>200m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Long Jump</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Shot Put</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1500m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>800m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400mH</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400m</Text>
          </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Team</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
        </Col>
      </Grid>
      {/* Package 8 Table Grid*/}
      <Text style={styles.textStyle}>Package 8</Text>
      <Grid style={styles.padding}>
        <Col size={50}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Athlete</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Jon Doe</Text>
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
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Event</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>100m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>200m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Long Jump</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Shot Put</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>1500m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>800m</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400mH</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>400m</Text>
          </Row>
        </Col>
        <Col size={25}>
          <Row style={styles.cellLabel}>
            <Text style={styles.boldText}>Team</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Bears</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Spitfires</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Arctics</Text>
          </Row>
          <Row style={styles.cell}>
            <Text>Huskies</Text>
          </Row>
        </Col>
      </Grid>
    </ScrollView>
  );
};

export default PackageScreen;

const styles = StyleSheet.create({
  textStyle: {
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  descriptionStyle: {
    overflow: "hidden",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    fontSize: 16,
    color: "#8F8F8F",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 8,
    borderColor: "#D3D3D3",
    borderWidth: 1,
  },
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
    height: 40,
  },
  cellLabel: {
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: "#DA3000",
    paddingLeft: 10,
    height: 40,
  },
  headerCell: {
    borderWidth: 0,
    borderColor: "#ddd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  boldText: {
    fontWeight: "800",
    color: "white",
  },
  gridStyle: {
    paddingTop: 25,
  },
  padding: {
    paddingBottom: 80,
  },
});
