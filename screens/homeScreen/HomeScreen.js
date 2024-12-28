import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "./homeScreenStyles";
import HomeCard from "../../components/homeComponent/HomeCard";
import exerciseService from "../../service/excersiceService";
import TabBar from "../../components/mainComponents/tabBar";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "../../redux/store";

const HomeScreen = ({ route }) => {
  const { username } = route.params;

  const [status, setStatus] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [target, setTarget] = useState(null);
  const [bodyPart, setBodyPart] = useState(null);
  const [equipment, setEquipment] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const dispatch = useDispatch();
  const clickCount = useSelector((state) => state.counter.clickCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await exerciseService.getStatus();
        setStatus(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handleItemPress}>
      <HomeCard
        name={item.name}
        target={item.target}
        bodyPart={item.bodyPart}
        equipment={item.equipment}
        imgUrl={item.gifUrl}
      />
    </TouchableOpacity>
  );

  const handleItemPress = () => {
    dispatch(incrementCount());
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <ImageBackground
          source={require("../../assets/images/home2.png")}
          style={styles.background}
          imageStyle={styles.imageStyle}
        >
          <SafeAreaView>
            <View style={styles.textArea}>
              <Text style={styles.welcomeText}>Welcome, </Text>
              <Text style={styles.user}>{username}!</Text>
              <Text style={styles.sub}>
                Your Personalized Fitness Space is Set!{" "}
              </Text>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
      <Text style={styles.headText}>Your Activities </Text>

      {status.length > 0 ? (
        <FlatList
          data={status}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.errorText}>No activities found</Text>
      )}

      <TabBar></TabBar>

      <TouchableOpacity style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>Clicks: {clickCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
