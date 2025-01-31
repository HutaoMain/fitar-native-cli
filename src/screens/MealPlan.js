import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import MealPlanCard from '../components/MealPlanCard';
import {mealPlanData} from '../MealPlanData';
import useFetchCurrentBmiData from '../CurrentBmiResult';
import useFetchUserAllergies from '../CurrentUserAllergies';

const MealPlan = () => {
  const {bmiResultData} = useFetchCurrentBmiData();
  const currentAllergiers = useFetchUserAllergies();

  console.log(currentAllergiers);

  const groupMealPlansByDay = () => {
    const groupedDays = {};

    mealPlanData?.forEach((mealPlan, index) => {
      const dayOfWeek = index % 7;
      if (!groupedDays[dayOfWeek]) {
        groupedDays[dayOfWeek] = [];
      }

      const isInBmiRange =
        bmiResultData &&
        bmiResultData.bmiResult >= mealPlan.bmiRange.min &&
        bmiResultData.bmiResult <= mealPlan.bmiRange.max;

      const containsAllergy = mealPlan.allergies.some(allergy =>
        currentAllergiers?.allergies.includes(allergy),
      );

      if ((isInBmiRange || !bmiResultData) && !containsAllergy) {
        groupedDays[dayOfWeek].push(mealPlan);
      }
    });

    return groupedDays;
  };

  const daysWithMealPlans = groupMealPlansByDay();

  return (
    <View>
      <ScrollView>
        {Object.keys(daysWithMealPlans).map((day, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <Text>{getDayName(parseInt(day))}</Text>
            {daysWithMealPlans[parseInt(day)].map((mealPlan, key) => (
              <MealPlanCard mealPlan={mealPlan} key={key} />
            ))}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const getDayName = day => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[day];
};

export default MealPlan;
