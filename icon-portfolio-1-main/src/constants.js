import placeholderImg from "./assets/placeholder.jpg";

export const NUMBER_OF_ROWS = 20;
export const NUMBER_OF_COLUMNS = 15;
export const CELL_WIDTH = 60;
export const CELL_HEIGHT = 60;

export const ItemTypes = {
  Card: "CARD",
  Block: "BLOCK",
  Input: "INPUT",
  Text: "TEXT",
  Link: "LINK",
  Image: "IMAGE",
  Divider: "DIVIDER",
};

export const Color = ["#096191", "#5956a3", "#a297e5", "#6768ab", "#f8bbcd"];

export const DefaultItemData = {
  Block: {
    backgroundColor: Color[3],
  },
  Input: {
    text: "",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#000",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  Text: {
    text: "This is a text",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#000",
    backgroundColor: "transparent",
  },
  Link: {
    link: "https://www.facebook.com/iconclub.it.tdtu",
    text: "This is a link",
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "normal",
    color: "#00f",
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
  Image: {
    source: placeholderImg,
    borderRadius: "0%",
  },
  Divider: {
    color: "#888",
    thick: 5,
  },
};
