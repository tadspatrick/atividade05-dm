import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: "",
      date: 2,
      list: [],
      modal: false,
      month: 0,
      months: [
        { key: 0, name: "Selecione um mês" },
        { key: 1, name: "Janeiro" },
        { key: 2, name: "Fevereiro" },
        { key: 3, name: "Março" },
        { key: 4, name: "Abril" },
        { key: 5, name: "Maio" },
        { key: 6, name: "Junho" },
        { key: 7, name: "Julho" },
        { key: 8, name: "Agosto" },
        { key: 9, name: "Setembro" },
        { key: 10, name: "Outubro" },
        { key: 11, name: "Novembro" },
        { key: 12, name: "Dezembro" },
      ],
    };
    this.details = [];
  }

  async componentDidMount() {
    this.loadStorage();
  }

  async componentDidUpdate() {
    this.loadStorage();
  }

  async loadStorage() {
    try {
      const arr = await AsyncStorage.getItem("list");
      if (arr != null) {
        this.setState({
          list: JSON.parse(arr),
        });
      }
    } catch (e) {
      alert("[ERROR]: AsyncStorage - getItem()");
    }
    //AsyncStorage.clear();
  }

  async add() {
    const arr = [
      ...this.state.list,
      {
        activity: this.state.activity,
        date: this.state.months[this.state.month].name,
      },
    ];

    try {
      const json = JSON.stringify(arr);
      await AsyncStorage.setItem("list", json);
      alert("Adicionado com Sucesso!");
      this.setState({
        activity: "",
        date: 2,
      });
      Keyboard.dismiss();
    } catch (e) {
      alert("[ERROR]: AsyncStorage - setItem()");
    }
  }

  openModal() {
    let aux = [];
    let text;

    this.state.months.forEach((date, index) => {
      text = "";
      this.state.list.forEach((act, ind) => {
        if (act.date == date.name) {
          if (text != "") {
            text = text + "/ ";
          }
          text = text + act.activity + " ";
        }
      });
      aux[index] = text;
    });

    this.details = aux;
    //console.log(this.details)
    this.setState({
      modal: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Feriados / Meses</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Feriado"
          onChangeText={(text) => this.setState({ activity: text })}
        />
        <Picker
          style={styles.picker}
          selectedValue={this.state.month}
          onValueChange={(item, index) => this.setState({ month: index })}
        >
          {this.state.months.map((item, index) => {
            return (
              <Picker.Item
                style={styles.item}
                key={index}
                value={item}
                label={item.name}
              />
            );
          })}
        </Picker>
        <TouchableOpacity
          style={styles.touchSave}
          onPress={() => {
            this.add();
            this.setState({ text: "" });
          }}
        >
          <Text style={styles.touchText}>GRAVAR</Text>
        </TouchableOpacity>

        <ScrollView style={styles.list}>
          {this.state.list.map((item, index) => {
            return (
              <Text key={index} style={styles.textListItem}>
                {item.activity}
              </Text>
            );
          })}
        </ScrollView>
        <TouchableOpacity style={styles.touch} onPress={() => this.openModal()}>
          <Text style={styles.touchText}>MAIS INFORMAÇÕES</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modal}
        >
          <View style={styles.modal}>
            <Text style={styles.textModalDate}>Janeiro</Text>
            <Text style={styles.textModalAct}>{this.details[1]}</Text>
            <Text style={styles.textModalDate}>Fevereiro</Text>
            <Text style={styles.textModalAct}>{this.details[2]}</Text>
            <Text style={styles.textModalDate}>Março</Text>
            <Text style={styles.textModalAct}>{this.details[3]}</Text>
            <Text style={styles.textModalDate}>Abril</Text>
            <Text style={styles.textModalAct}>{this.details[4]}</Text>
            <Text style={styles.textModalDate}>Maio</Text>
            <Text style={styles.textModalAct}>{this.details[5]}</Text>
            <Text style={styles.textModalDate}>Junho</Text>
            <Text style={styles.textModalAct}>{this.details[6]}</Text>
            <Text style={styles.textModalDate}>Julho</Text>
            <Text style={styles.textModalAct}>{this.details[7]}</Text>
            <Text style={styles.textModalDate}>Agosto</Text>
            <Text style={styles.textModalAct}>{this.details[8]}</Text>
            <Text style={styles.textModalDate}>Setembro</Text>
            <Text style={styles.textModalAct}>{this.details[9]}</Text>
            <Text style={styles.textModalDate}>Outubro</Text>
            <Text style={styles.textModalAct}>{this.details[10]}</Text>
            <Text style={styles.textModalDate}>Novembro</Text>
            <Text style={styles.textModalAct}>{this.details[11]}</Text>
            <Text style={styles.textModalDate}>Dezembro</Text>
            <Text style={styles.textModalAct}>{this.details[12]}</Text>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => this.setState({ modal: false })}
            >
              <Text style={styles.textModalDate}>Sair</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default App;
