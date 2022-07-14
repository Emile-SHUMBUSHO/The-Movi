import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import AppStyles from "../../styles/styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { auth } from "../../firebase";

export const EditProfile = () => {
  return (
    <SafeAreaView style={{ backgroundColor: AppStyles.colors.topBottomColor }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 10 }}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Update Your Profile</Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            padding: 10,
          }}
        >
          <Image
            borderRadius={10}
            source={require("../../../assets/man.png")}
            style={{ width: 100, height: 100, margin: 5 }}
          />
          {/* <Text style={{margin:10, color:"#fff"}}>Emile SHUMBUSHO</Text> */}
          <Text style={{ color: AppStyles.colors.lightGreyColor }}>
            {auth.currentUser?.email}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: AppStyles.colors.containerColor,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            height: 500,
          }}
        >
          <View style={{ margin: 10 }}>
            <TouchableOpacity
              style={{
                margin: 10,
                borderWidth:1,
                borderColor:AppStyles.colors.btnColor,
                height: 30,
                borderRadius: 5,
                top: 20,
                flexDirection: "row",
              }}
            >
               <TextInput
                    placeholder="Change UserName"
                    style={{margin:5, color:AppStyles.colors.btnColor}}
                    placeholderTextColor="white"

                />
            </TouchableOpacity>


            <TouchableOpacity
              style={{
                margin: 10,
                borderWidth:1,
                borderColor:AppStyles.colors.btnColor,
                height: 30,
                borderRadius: 5,
                top: 20,
                flexDirection: "row",
              }}
            >
               <TextInput
                    placeholder="Change Email"
                    placeholderTextColor="white"
                    style={{margin:5, color:AppStyles.colors.btnColor}}
                />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                margin: 10,
                backgroundColor: AppStyles.colors.btnColor,
                justifyContent: "center",
                alignItems: "center",
                height: 30,
                borderRadius: 5,
                top: 250,
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>Save</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colors.topBottomColor,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: AppStyles.colors.containerColor,
    flexDirection: "column",
    padding: 20,
  },

  textField: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderColor: AppStyles.colors.lightGreyColor,
    borderWidth: 1,
    width: "100%",
    height: 40,
    padding: 10,
  },
  signInBtn: {
    width: "100%",
    height: 40,
    backgroundColor: AppStyles.colors.btnColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
