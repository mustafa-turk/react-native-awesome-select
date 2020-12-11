## React-native-awesome-select

A multiselect component with zero dependencies.

![demo](https://raw.githubusercontent.com/mustafa-turk/resources/master/demo.gif)

## Install

`npm install react-native-awesome-select`

## Usage

```javascript
import React from "react";
import { View } from "react-native";
import AwesomeSelect from "react-native-awesome-select";

const data = [
  {
    name: "First item",
    isActive: false
  },
  {
    name: "Second item",
    isActive: false
  }
];

export default function App() {
  return (
    <View>
      <AwesomeSelect
        data={ data }
        onValueChange={ value => console.log(value) }
      />
    </View>
  );
}
```

## Props

| Prop          | Type     | Description                                           |
| ------------- | -------- | ----------------------------------------------------- |
| data          | array    | Data array that will be passed and displayed          |
| onValueChange | function | Callback called when value has been changed           |
| activeStyle   | style    | The style applied to the elements with active state   |
| inactiveStyle | style    | The style applied to the elements with inactive state |
