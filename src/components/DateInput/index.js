import React, { useState, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  function onChangePicker(event, dateSelected) {
    const datePicked = dateSelected || date;

    setOpened(Platform.OS === 'ios');
    onChange(datePicked);
  }

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour
            display="spinner"
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            onChange={onChangePicker}
          />
        </Picker>
      )}
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
