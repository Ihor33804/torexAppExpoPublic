import { StyleSheet } from "react-native";

import variables, { scale } from "../../../styles/variables";
import {
  GREEN,
  DARK_COLOR,
  TEXT_GRAY_COLOR,
  WHITE_COLOR,
  INPUT_BACKGROUND_COLOR,
  INPUT_BORDER_COLOR,
  INPUT_LABEL
} from "../../../styles/colorConstants";

const { xx_large } = variables.fontSize;

export default StyleSheet.create({
    container: {
        width: '100%',
        height: scale(65),
        marginTop: scale(12),
    },
    labelText: {
        color: INPUT_LABEL,
        fontSize: 14
    },
    input: {
        backgroundColor: INPUT_BACKGROUND_COLOR,
        borderRadius: scale(5),
        borderWidth: scale(1),
        borderColor: INPUT_BORDER_COLOR,
        height: scale(40),
        marginTop: scale(10),
        width: '100%'
    }
});
