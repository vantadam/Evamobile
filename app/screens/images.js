import { Icon } from "@rneui/base";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const ImageSize = 75;

export function Images({ navigation, route }) {
  const search = route.params;
  const fetchImagesFromPexels = async () => {
    const data = await fetch(
      `https://api.pexels.com/v1/search?query=${search}`,
      {
        headers: {
          Authorization:
            "563492ad6f91700001000001c3882d7593b44872bc561d06f9de63b7",
        },
      }
    );

    const { photos } = await data.json();
    return photos;
  };

  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchImagesFromPexels();

      setImages(images);
    };
    fetchImages();
  }, []);
  const topRef = React.useRef();
  const iconRef = React.useRef();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const ScrollToActiveIndex = (index) => {
    setActiveIndex(index);
    topRef.current.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (ImageSize + 15) - ImageSize / 2 > width / 2) {
      iconRef.current.scrollToOffset({
        offset: index * (ImageSize + 15) - width / 2 + ImageSize / 2,
        animated: true,
      });
    }
  };

  if (!images) {
    return null;
  }

  console.log(images);
  return (
    <View>
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          ScrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width)
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.src.portrait }}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />

      <FlatList
        ref={iconRef}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ position: "absolute", top: 35 }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => ScrollToActiveIndex(index)}>
              <Image
                source={{ uri: item.src.portrait }}
                style={{
                  width: ImageSize,
                  height: ImageSize,
                  borderRadius: 50,
                  marginRight: 15,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? "white" : "transparent",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Country", { search })}
        style={{
          position: "absolute",
          bottom: 30,
          borderBottomWidth: 2,
          borderBottomColor: "white",
          width,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "white",
              fontWeight: "bold",
              marginHorizontal: 5,
            }}
          >
            {search}
          </Text>
          <Ionicons
            name="arrow-forward-circle-sharp"
            size={25}
            color="white"
            style={{ top: 1 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
