import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

const BMIResult = ({ route }) => {
  const { gender, height, weight, age, bmiResult, bmiCategory } = route.params;

  const getBmiNotes = (bmiCategory) => {
    switch (bmiCategory) {
      case "Underweight":
        return {
          note: "You are underweight. It's important to maintain a healthy weight.",
        };
      case "Normal":
        return {
          note: "Your BMI is within the normal range. Keep up the good work!",
        };
      case "Overweight":
        const idealWeightLow = 18.5 * (height / 100) ** 2;
        const idealWeightHigh = 24.9 * (height / 100) ** 2;
        const weightToLose = weight - idealWeightHigh;
        return {
          note: `You are overweight. Here are some notes:\n- Healthy BMI range: 18kg/m² - 25 kg/m²\n- Healthy weight for your height: ${idealWeightLow.toFixed(
            1
          )}kgs\n- ${idealWeightHigh.toFixed(
            1
          )}kgs\n- Lose ${weightToLose.toFixed(
            1
          )}kgs to reach a BMI of 25kg/m²`,
        };
      case "Obese":
        // Add notes for obese category here
        return {
          note: "You are obese. It's important to focus on a healthy lifestyle.",
        };
      default:
        return { note: "" };
    }
  };

  const bmiNotes = getBmiNotes(bmiCategory);

  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",

        position: "relative",
        height: "100%",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 10,
          backgroundColor: "white",
          width: "90%",
          height: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginVertical: 20,
        }}
      >
        <Text style={{ fontSize: 30 }}>Your current BMI:</Text>
        <Text style={{ color: "#E44203", fontSize: 50 }}>{bmiResult}</Text>
        <Text style={{ fontSize: 35, color: "#E44203" }}>{bmiCategory}</Text>
      </View>
      <View
        style={{
          width: "90%",
          height: "35%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            padding: 10,
            width: "48%",
            height: "100%",
            backgroundColor: "white",
            marginVertical: 10,
            gap: 3,
            paddingLeft: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Summary</Text>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 14 }}>Gender:</Text>
            <Text style={{ textTransform: "capitalize", fontSize: 14 }}>
              {gender}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 14 }}>Height:</Text>
            <Text style={{ fontSize: 14 }}> {height}</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 14 }}>Weight: </Text>
            <Text style={{ fontSize: 14 }}>{weight}</Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 14 }}>Age: </Text>
            <Text style={{ fontSize: 14 }}> {age}</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            padding: 10,
            width: "48%",
            height: "100%",
            backgroundColor: "white",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Note: </Text>
          <Text style={{ lineHeight: 30 }}>{bmiNotes.note}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginTop: 20,
          width: "90%",
          borderWidth: 1,
          borderColor: "black",
          position: "absolute",
          bottom: 20,
        }}
      >
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          Save BMI Result
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BMIResult;
