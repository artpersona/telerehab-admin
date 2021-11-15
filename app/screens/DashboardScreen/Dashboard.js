import React from "react";
import {View, Text, FlatList} from "react-native";
import styles from "./styles";
import {CustomHeader, PatientCardHorizontal} from "../../components";
import MeetingCard from "./MeetingCard";
import Icon from "react-native-vector-icons/AntDesign";
import {Colors} from "../../config";
import {useAuthContext} from "../../shared/contexts/AuthContext";
const DATA = [
  {
    date: "Today",
    patient: "Mr. Roberto Dela Cruz",
    time: "10:00 am - 10:30 am",
    active: true,
  },

  {
    date: "Today",
    patient: "Mr. Roberto Dela Cruz",
    time: "10:00 am - 10:30 am",
  },
];

const DATA2 = [
  {
    id: 1,
    name: "Marshall Eriksen",
    age: 60,
    gender: "Male",
    address: "Davao City",
    guardian: "Paul Perez",
    contact_num: "0927110900",
    uri: "https://i.pinimg.com/originals/c2/68/73/c26873991a131ba181f91fb258354bf7.jpg",
  },
  {
    id: 2,
    name: "Ted Mosby",
    age: 55,
    gender: "Male",
    address: "Davao City",
    guardian: "Paul Perez",
    contact_num: "0927110900",
    uri: "https://upload.wikimedia.org/wikipedia/en/e/e0/Ted_Mosby.jpg",
  },
  {
    id: 3,
    name: "Barney Stinson",
    age: 30,
    gender: "Male",
    address: "Davao City",
    guardian: "Paul Perez",
    contact_num: "0927110900",
    uri: "https://ca-times.brightspotcdn.com/dims4/default/18fecfd/2147483647/strip/true/crop/350x450+0+0/resize/350x450!/quality/90/?url=https%3A%2F%2Fwww.trbimg.com%2Fimg-5305c0c8%2Fturbine%2Fzap-barney-stinson-quotes-intro",
  },
];

function Dashboard() {
  const {user} = useAuthContext();
  const renderItem = ({item, index}) => {
    return <MeetingCard data={item} />;
  };

  const renderNewPatients = ({item, index}) => (
    <PatientCardHorizontal data={item} />
  );
  return (
    <>
      <CustomHeader showNavButton />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.welcome__text}>Good Morning, </Text>
            <Text style={styles.name__text}>
              Dr.{" "}
              <Text style={{textTransform: "capitalize"}}>
                {user.last_name}
              </Text>
            </Text>
          </View>
          <View style={styles.reminder__container}>
            <View style={styles.reminder__header}>
              <Text style={styles.reminder__text}>Reminders</Text>
              <Text style={styles.all__text}>View All</Text>
            </View>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{marginTop: "3%"}}
            />
          </View>

          <View style={styles.actions__container}>
            <View style={styles.actions__wrapper}>
              <View style={styles.icon__container}>
                <View style={styles.icon}>
                  <Icon name={"calendar"} size={22} color={Colors.secondary} />
                </View>
                <Text style={styles.icon__text}>Schedule</Text>
              </View>

              <View style={styles.icon__container}>
                <View style={styles.icon}>
                  <Icon name={"wechat"} size={22} color={Colors.secondary} />
                </View>
                <Text style={styles.icon__text}>Message</Text>
              </View>

              <View style={styles.icon__container}>
                <View style={styles.icon}>
                  <Icon name={"phone"} size={22} color={Colors.secondary} />
                </View>
                <Text style={styles.icon__text}>Call Patient</Text>
              </View>
            </View>
          </View>

          <View style={styles.new__patients}>
            <FlatList
              data={DATA2}
              renderItem={renderNewPatients}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.addEx__container}>
            <Text style={styles.question__text}>Want to add exercise ?</Text>
            <View style={styles.add__container}>
              <Icon name={"plus"} size={22} color={Colors.secondary} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default Dashboard;
