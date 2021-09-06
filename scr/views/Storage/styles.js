import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "lightgrey",
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "grey",
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    textAlign: "center",
    marginBottom: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
  picker: {
    marginBottom: 10,
    marginLeft: 20,
    height: 70,
    width: "90%",
    backgroundColor: "lightgrey",
  },
  touchSave: {
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 4,
    marginBottom: 20,
    alignSelf: "center",
    elevation: 8,
    shadowColor: "#52006A",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  touch: {
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a81924",
    borderRadius: 4,
    marginBottom: 40,
    alignSelf: "center",
    marginTop: 10,
    elevation: 8,
    shadowColor: "#52006A",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  touchText: {
    fontSize: 16,
    color: "white",
  },
  list: {
    width: "90%",
    borderColor: "#330000",
    borderTopWidth: 2,
    paddingTop: 15,
    alignSelf: "center",
  },
  textListItem: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },
  modal: {
    flex: 1,
    backgroundColor: "#000",
    opacity: 0.92,
    alignItems: "center",
    paddingTop: 40,
  },
  textModalDate: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  textModalAct: {
    color: "#ff8000",
    fontWeight: "bold",
    marginBottom: 6,
  },
  buttonModal: {
    position: "absolute",
    bottom: 25,
    width: "90%",
    height: 50,
    backgroundColor: "#ff8000",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    fontSize: 28,
    fontWeight: "bold",
    color: "grey",
  },
});

export default styles;
