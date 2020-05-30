import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import RestaurantListStyle from './RestaurantList.style';

const RestaurantRow = (props) => {
  const {place, index} = props;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <React.Fragment>
      {showInfo && (
        <Text style={RestaurantListStyle.infoMessage}>Show info</Text>
      )}
      <View key={place.name} style={RestaurantListStyle.sectionContainer}>
        <View style={RestaurantListStyle.flexColumn}>
          <Text style={RestaurantListStyle.sectionCount}>{`${
            index + 1
          }. `}</Text>
          <Text style={RestaurantListStyle.sectionTitle}>{place.name}</Text>
          <Button
            style={RestaurantListStyle.sectionButton}
            title="Info"
            accessibilityLabel="Info"
            onPress={() => setShowInfo(!showInfo)}
          />
        </View>
        <View>
          <Text style={RestaurantListStyle.sectionSubTitle}>
            {place.address}
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
};

export default RestaurantRow;
