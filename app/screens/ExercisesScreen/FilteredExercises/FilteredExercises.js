import React, {useState, useEffect} from "react";
import {View, Text, FlatList} from "react-native";
import styles from "../styles";
import {ExerciseCard} from "../../../components";
function FilteredExercises({filter, DATA, setDisplayExercises, screen}) {
  const renderItem = ({item, index}) => (
    <ExerciseCard
      data={item}
      displayExercises={DATA}
      setDisplayExercises={setDisplayExercises}
      index={index}
      key={index.toString()}
      screen={screen}
    />
  );
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (filter == "All") setDisplayData(DATA);
    else if (filter == "Upper")
      setDisplayData(DATA.filter(item => item.extremity == filter));
    else if (filter == "Lower")
      setDisplayData(DATA.filter(item => item.extremity == filter));
  }, [DATA]);

  return (
    <View style={styles.list__container}>
      <FlatList
        data={displayData}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: "20%",
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default FilteredExercises;
