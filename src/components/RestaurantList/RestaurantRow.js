import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
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
          <TouchableHighlight
            style={RestaurantListStyle.sectionButton}
            accessibilityLabel="Info"
            onPress={() => setShowInfo(!showInfo)}>
            <Text style={RestaurantListStyle.sectionButtonText}>Info</Text>
          </TouchableHighlight>
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
